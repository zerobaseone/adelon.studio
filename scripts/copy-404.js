// this script copies the index.html file to the 404.html file
// then react router sees the url path and goes to the route
// yes i know its a hack but its github pages so its fine


import { copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');
const indexHtml = join(dist, 'index.html');
const notFoundHtml = join(dist, '404.html');

if (existsSync(indexHtml)) {
  copyFileSync(indexHtml, notFoundHtml);
  console.log('Copied index.html → 404.html for GitHub Pages SPA routing');
}
