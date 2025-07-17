# CC-Web

This project is a Vite + React app. To improve caching and fix the "Choose an effective cache storage period" warning,
a small Node server (`server.js`) has been added. It serves the built `dist` folder with long-term caching headers.

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Serving with caching

After running `npm run build`, start the server:

```bash
npm run serve
```

The server sends static assets (JS, CSS, images) with `Cache-Control: public, max-age=31536000, immutable` and HTML with `Cache-Control: no-cache`.