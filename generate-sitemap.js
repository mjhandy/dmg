const fs = require('fs');
const path = require('path');

// Read the routes file content
const routesContent = fs.readFileSync('./src/app/app.routes.ts', 'utf8');

// Base URL of your website
const BASE_URL = 'https://dmg.dundee-media-group.workers.dev/'; // Update this to your actual domain

// Extract routes using regex
const routeRegex = /path:\s+'([^']+)'/g;
const routes = [];

// Add home page route explicitly
routes.push('');

// Extract all routes from the file
let match;
while ((match = routeRegex.exec(routesContent)) !== null) {
  if (match[1]) {
    routes.push(match[1]);
  }
}

// Remove duplicates and filter out empty paths
const uniqueRoutes = [...new Set(routes)];

// Generate sitemap XML content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map(
    route => `  <url>
    <loc>${BASE_URL}${route ? '/' + route : ''}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Write the sitemap file
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);

console.log('Sitemap generated successfully at public/sitemap.xml');