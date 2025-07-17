import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const base = join(process.cwd(), 'dist');
const port = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

createServer((req, res) => {
  const url = req.url ? req.url.split('?')[0] : '/';
  let filePath = join(base, url);
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(base, 'index.html');
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'no-cache');
  } else {
    const ext = extname(filePath);
    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    if (ext !== '.html') {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
  createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});