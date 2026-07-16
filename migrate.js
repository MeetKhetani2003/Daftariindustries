import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');
const appDir = path.join(__dirname, 'src', 'app');

const pageMapping = {
  'HomePage.tsx': 'page.tsx',
  'AboutPage.tsx': 'about/page.tsx',
  'ProductsPage.tsx': 'products/page.tsx',
  'EngineeringPage.tsx': 'engineering/page.tsx',
  'IndustriesPage.tsx': 'industries/page.tsx',
  'InfrastructurePage.tsx': 'infrastructure/page.tsx',
  'ServicesPage.tsx': 'services/page.tsx',
  'GalleryPage.tsx': 'gallery/page.tsx',
  'ContactPage.tsx': 'contact/page.tsx'
};

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

for (const [oldName, newPathSuffix] of Object.entries(pageMapping)) {
  const oldPath = path.join(pagesDir, oldName);
  const newPath = path.join(appDir, newPathSuffix);
  
  if (fs.existsSync(oldPath)) {
    let content = fs.readFileSync(oldPath, 'utf8');
    
    // Add "use client" if not present
    if (!content.startsWith('"use client";')) {
      content = '"use client";\n' + content;
    }
    
    // Replace react-router-dom Link with next/link
    content = content.replace(/import\s+\{([^}]*)\bLink\b([^}]*)\}\s+from\s+['"]react-router-dom['"];?/g, (match, p1, p2) => {
      let otherImports = (p1 + p2).split(',').map(s => s.trim()).filter(Boolean);
      let res = `import Link from 'next/link';\n`;
      if (otherImports.length > 0) {
         // This is a naive fallback if there are other imports from react-router-dom, but usually there aren't in these pages.
         res += `import { ${otherImports.join(', ')} } from 'react-router-dom';\n`;
      }
      return res;
    });

    // Handle generic react-router-dom imports that might still exist
    // If they have useNavigate, etc, we'd need more complex replacement, but for now just Link
    
    // Replace <Link to="..." with <Link href="..."
    content = content.replace(/<Link\s+([^>]*?)to=/g, '<Link $1href=');

    const newDir = path.dirname(newPath);
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }
    
    fs.writeFileSync(newPath, content, 'utf8');
    console.log(`Migrated ${oldName} to ${newPathSuffix}`);
  }
}

// Clean up pages dir
fs.rmSync(pagesDir, { recursive: true, force: true });
console.log('Deleted src/pages directory');
