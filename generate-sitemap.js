import fs from 'fs';
import { globby } from 'globby';
const productPaths = [
  '/products/bent-glass',
  '/products/bent-triplex',
  '/products/curved-glass-for-showcases',
  '/products/curved-glass-for-furniture',
  '/products/spherical-glass',
  '/products/spherical-mirrors',
  '/products/curved-glass-for-shower-cabin',
  '/products/tempered-curved-glass',
  '/products/90degree-bent-glass',
  '/products/fireproof-glass',
  '/products/curved-glass-for-fireplace',
  '/products/tempered-glass',
  '/products/curved-mirrors',
  '/products/curved-glass-for-stairs',
  '/products/curved-glass-unit',
  '/products/curved-glass-for-aquarium',
  '/products/curved-glass-for-special-equipment',
  '/products/curved-glass-for-boats',
  '/products/molten-glass',
  '/products/glass-polishing',
  '/products/glass-tempering',
  '/products/chemical-glass-tempering',
  '/products/furnaces-for-bent-glass-production',
  '/products/glass-frosting',
  '/products/glass-painting',
  '/products/universal-mold-for-glass-milling',
];

(async () => {
  const staticPages = await globby([
    'src/pages/**/*{.js,.jsx,.ts,.tsx}',
    '!src/pages/_*.tsx',
    '!src/pages/404.tsx',
    '!src/pages/products/[name].tsx',
    '!src/pages/api',
  ]);

  const dynamicPaths = productPaths.map(path => `${path}`);
  const pages = [...staticPages, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => {
    const path = page
      .replace('src/pages', '')
      .replace(/\.(js|jsx|ts|tsx)$/, '')
      .replace('/index', '');
    const route = path === '/index' ? '' : path;
    return `<url><loc>${`https://bentglass.ru${route}`}</loc></url>`;
  }).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
