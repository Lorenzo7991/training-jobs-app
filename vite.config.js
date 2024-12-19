import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* Change the port on which the project is hosted and set the "open" parameter to true for automatic launch in "npm run dev" */
  server: {
    port: 3000,
    open: true,
  },
});
