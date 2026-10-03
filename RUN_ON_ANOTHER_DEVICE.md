# SentinelShare — Run on Another Device

This is the unchanged SentinelShare React/Vite web app source.

## Requirements

- Node.js 18 or newer (Node.js 20+ recommended)
- npm, pnpm, or another Node package manager

## Run locally

From the project folder:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

If using pnpm:

```bash
pnpm install
pnpm dev --host 0.0.0.0
```

## Test from another device on the same Wi-Fi

1. Start the app with `--host 0.0.0.0`.
2. Find the computer's local network IP address.
   - Windows: `ipconfig`
   - macOS/Linux: `ifconfig` or `ip addr`
3. On the second device, open `http://YOUR_COMPUTER_IP:5173`.
4. Make sure both devices are on the same Wi-Fi network and the firewall allows the development port.

## Production build test

```bash
npm install
npm run check
npm run build
npm run start
```

The app is a browser-based React prototype using mock transfer data. It does not yet perform real local-Wi-Fi file transfer or cloud storage.

## Important

The included `client/` directory is the frontend source. The full project archive also includes the package manifest, lockfile, Vite configuration, and server wrapper required to run it.
