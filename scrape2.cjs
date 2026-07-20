const fs = require('fs/promises');
const path = require('path');
const cheerio = require('cheerio');
const https = require('https');

const BASE_URL = 'https://krisonengineering.com/';
const PRODUCT_SLUGS = [
  'cryogenic-storage-tank',
  'cryogenic-microbulk-storage-tank',
  'cryogenic-transport-tank',
  'pressure-reducing-station-skids',
  'puff-insulated-lco2-storage-transport-tank',
  'anhydrous-ammonia-tank',
  'ambient-air-heated-vaporizer',
  'lmo-medical-installation',
  'lpg-propane-eo-storage-transport-tank',
  'cryogenic-cylinder-filling-station',
  'cryogenic-semi-trailers'
];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(require('fs').createWriteStream(dest))
          .on('error', reject)
          .once('close', () => resolve());
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function scrapeProducts() {
  const products = [];

  for (const slug of PRODUCT_SLUGS) {
    console.log(`Scraping ${slug}...`);
    try {
      const url = `${BASE_URL}${slug}/`;
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);

      const mainContent = $('.page-content').length ? $('.page-content') : $('body');

      let title = mainContent.find('h2.elementor-heading-title').first().text().trim();
      if (!title) {
         title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      }

      const descText = [];
      mainContent.find('p').each((_, el) => {
        const text = $(el).text().trim();
        if (text && text.length > 20 && !descText.includes(text)) descText.push(text);
      });
      const desc = descText.slice(0, 3).join(' '); // Get up to 3 paragraphs

      const details = [];
      mainContent.find('ul li').each((_, el) => {
        const text = $(el).text().trim();
        if (text && text.length > 5 && !text.includes('Menu') && !text.includes('Home') && !details.includes(text)) {
           // Basic filter to avoid grabbing header/footer menus if they sneaked into main content
           if (text.length > 15) details.push(text);
        }
      });

      // Find all images within the page content
      const imageSet = new Set();
      mainContent.find('img').each((_, el) => {
        let src = $(el).attr('src');
        if (!src) src = $(el).attr('data-src'); // Check for lazy loaded
        
        if (src) {
           // Remove query params like ?v=123
           src = src.split('?')[0];
           if (src.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
              if (src.startsWith('/')) {
                 imageSet.add(`${BASE_URL}${src.substring(1)}`);
              } else if (!src.startsWith('data:')) {
                 imageSet.add(src);
              }
           }
        }
      });
      const images = Array.from(imageSet);

      const category = title.includes('Cryogenic') || title.includes('Microbulk') ? 'Cryogenics' 
                     : title.includes('Storage') ? 'Industrial Gas' : 'Equipment';

      // Download images locally
      const imgDir = path.join(__dirname, 'public', 'images', 'products', slug);
      await fs.mkdir(imgDir, { recursive: true });

      const localImages = [];
      let imgCount = 1;
      for (const imgUrl of images) {
         try {
            const ext = path.extname(imgUrl) || '.png';
            const localFilename = `image_${imgCount}${ext}`;
            const localPath = path.join(imgDir, localFilename);
            await downloadImage(imgUrl, localPath);
            localImages.push(`/images/products/${slug}/${localFilename}`);
            imgCount++;
         } catch (e) {
            console.error(`Error downloading image ${imgUrl}:`, e.message);
         }
      }

      let mainImg = '/images/gas_cylinders.png';
      let gallery = [];
      if (localImages.length > 0) {
          mainImg = localImages[0];
          gallery = localImages.slice(1);
      }

      products.push({
        id: slug,
        slug,
        title,
        desc: desc || `High quality ${title} for industrial applications.`,
        category,
        mainImg,
        gallery,
        details: details.slice(0, 10) // Limit to top 10 bullet points
      });

    } catch (e) {
      console.error(`Error scraping ${slug}:`, e.message);
    }
  }

  // Generate products.ts content
  const tsContent = `export interface Product {
  id: string;
  slug: string;
  title: string;
  desc: string;
  category: string;
  mainImg: string;
  gallery: string[];
  details: string[];
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

  const tsPath = path.join(__dirname, 'src', 'data', 'products.ts');
  await fs.writeFile(tsPath, tsContent, 'utf-8');
  console.log('Successfully wrote products.ts!');
}

scrapeProducts();
