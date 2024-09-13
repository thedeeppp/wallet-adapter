import { defineConfig } from 'vite';
// import NodeGlobalsPolyfillPlugin from 'vite-plugin-node-polyfills';
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    react(),
  ],
});
