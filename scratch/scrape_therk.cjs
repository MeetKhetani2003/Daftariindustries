const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const https = require('https');
const crypto = require('crypto');

const TS_FILE = path.join(__dirname, '../src/data/products.ts');

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${res.statusCode}`));
      }
    }).on('error', (err) => reject(err));
  });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function run() {
  const html = fs.readFileSync(path.join(__dirname, 'therk.html'), 'utf-8');
  const $ = cheerio.load(html);

  const newProducts = [];
  
  const cards = $('.product-range-card').toArray();
  for (let i = 0; i < cards.length; i++) {
    const el = cards[i];
    const imgUrl = $(el).find('.product-range-img img').attr('src');
    const title = $(el).find('.product-range-content h5').text().trim();
    const desc = $(el).find('.product-range-content p').text().trim();
    
    if (!title || !imgUrl) continue;
    
    const slug = slugify(title);
    
    const productDir = path.join(__dirname, '../public/images/products', slug);
    if (!fs.existsSync(productDir)) {
      fs.mkdirSync(productDir, { recursive: true });
    }
    
    const ext = path.extname(new URL(imgUrl).pathname) || '.png';
    const mainImgName = `main${ext}`;
    const destImgPath = path.join(productDir, mainImgName);
    
    console.log(`Downloading ${imgUrl} for ${title}...`);
    try {
      await downloadImage(imgUrl, destImgPath);
    } catch(e) {
      console.error(`Error downloading ${imgUrl}`, e);
    }
    
    const mainImgUrl = `/images/products/${slug}/${mainImgName}`;
    
    newProducts.push({
      id: crypto.randomUUID(),
      title,
      slug,
      shortDesc: desc.substring(0, 100) + (desc.length > 100 ? '...' : ''),
      desc,
      mainImg: mainImgUrl,
      category: 'Industrial',
      details: [],
      gallery: [mainImgUrl]
    });
  }

  // Parse existing products from TS file
  let tsContent = fs.readFileSync(TS_FILE, 'utf-8');
  // Very hacky but works for this specific file structure
  const startIdx = tsContent.indexOf('export const products: Product[] = [');
  if (startIdx === -1) throw new Error("Could not find start of products array");
  
  // It's just a JSON array assigned to the variable.
  // The safest way is to regex out the old JSON and parse it using Function, but it might contain non-JSON syntax.
  // Instead, since we wrote it as JSON.stringify before, we can parse it.
  const arrayStart = tsContent.indexOf('[', startIdx);
  const arrayEnd = tsContent.lastIndexOf(']');
  
  const arrayStr = tsContent.substring(arrayStart, arrayEnd + 1);
  let existingProducts = [];
  try {
    existingProducts = eval(`(${arrayStr})`);
  } catch(e) {
    console.error("Failed to parse existing products array");
    return;
  }
  
  // Merge, avoiding duplicates by title
  const finalProducts = [...existingProducts];
  for (const np of newProducts) {
    if (!finalProducts.find(p => p.title.toLowerCase() === np.title.toLowerCase() || p.slug === np.slug)) {
      finalProducts.push(np);
    } else {
      console.log(`Skipping duplicate: ${np.title}`);
    }
  }
  
  const newTsContent = `export interface Product {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  desc: string;
  mainImg: string;
  category: string;
  details: string[];
  gallery?: string[];
}

export const products: Product[] = ${JSON.stringify(finalProducts, null, 2)};
`;
  
  fs.writeFileSync(TS_FILE, newTsContent);
  console.log(`Added ${newProducts.length} new products. Total: ${finalProducts.length}`);
}

run();
