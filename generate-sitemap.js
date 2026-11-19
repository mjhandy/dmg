const fs = require('fs');
const path = require('path');
const ts = require('typescript');

// Base URL of your website
const BASE_URL = 'https://mjhandy.github.io/dmg';

const routesFile = path.join(__dirname, 'src', 'app', 'app.routes.ts');
const routesSource = ts.createSourceFile(
  routesFile,
  fs.readFileSync(routesFile, 'utf8'),
  ts.ScriptTarget.Latest,
  true
);
const routesDeclaration = routesSource.statements
  .filter(ts.isVariableStatement)
  .flatMap(statement => statement.declarationList.declarations)
  .find(declaration => declaration.name.getText(routesSource) === 'routes');

if (!routesDeclaration || !routesDeclaration.initializer || !ts.isArrayLiteralExpression(routesDeclaration.initializer)) {
  throw new Error('Could not find the routes array in src/app/app.routes.ts');
}

const routes = [];

function getPropertyInitializer(route, propertyName) {
  const property = route.properties.find(
    item =>
      ts.isPropertyAssignment(item) &&
      (ts.isIdentifier(item.name) || ts.isStringLiteral(item.name)) &&
      item.name.text === propertyName
  );
  return property && ts.isPropertyAssignment(property) ? property.initializer : undefined;
}

function collectRoutes(routeArray, parentPath = '') {
  for (const route of routeArray.elements) {
    if (!ts.isObjectLiteralExpression(route)) {
      continue;
    }

    const pathInitializer = getPropertyInitializer(route, 'path');
    const segment = pathInitializer && ts.isStringLiteral(pathInitializer) ? pathInitializer.text : '';
    const fullPath = [parentPath, segment].filter(Boolean).join('/');

    if (fullPath) {
      routes.push(fullPath);
    }

    const children = getPropertyInitializer(route, 'children');
    if (children && ts.isArrayLiteralExpression(children)) {
      collectRoutes(children, fullPath);
    }
  }
}

collectRoutes(routesDeclaration.initializer);

// Remove duplicates and filter out empty paths
const uniqueRoutes = ['', ...new Set(routes)];

// Generate sitemap XML content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map(
    route => `  <url>
    <loc>${BASE_URL}/${route}</loc>
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