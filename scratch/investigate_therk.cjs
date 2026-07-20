const cheerio = require('cheerio');

async function run() {
  try {
    const res = await fetch('https://therk.group/product-range/');
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const products = [];
    // The exact selector depends on the structure. We will log all links to see which ones are products.
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.includes('/product/')) {
        products.push(href);
      }
    });
    
    console.log("Found product links:", [...new Set(products)]);
  } catch (err) {
    console.error(err);
  }
}
run();
