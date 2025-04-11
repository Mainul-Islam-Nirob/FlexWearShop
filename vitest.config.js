import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // ✅ sets up a browser-like DOM environment
  },
});
