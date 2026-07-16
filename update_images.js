import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appDir = path.join(__dirname, 'src', 'app');

const newImages = [
  '/images/hero_industrial_plant.png',
  '/images/cryogenic_tank.png',
  '/images/gas_cylinders.png',
  '/images/medical_oxygen.png',
  '/images/pipeline_infrastructure.png'
];

const specificMappings = {
  '1519494026892': '/images/medical_oxygen.png', // Medical
  '1587854692152': '/images/medical_oxygen.png', // Pharmaceutical
  '1581091226825': '/images/hero_industrial_plant.png', // Main Hero
  '1504328345606': '/images/cryogenic_tank.png', // Tanks
  '1581093458791': '/images/pipeline_infrastructure.png', // Pipeline
  '1513828583688': '/images/gas_cylinders.png',
};

let fallbackIndex = 0;

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const newContent = content.replace(/https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?w=\d+&q=\d+/g, (match, id) => {
        // Try specific first
        for (const [key, val] of Object.entries(specificMappings)) {
          if (id.includes(key) || key.includes(id)) {
            return val;
          }
        }
        // Fallback
        const img = newImages[fallbackIndex % newImages.length];
        fallbackIndex++;
        return img;
      });
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated images in ${fullPath}`);
      }
    }
  }
}

processDir(appDir);
