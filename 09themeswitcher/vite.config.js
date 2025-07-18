import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  plugins: [react(), tailwindcss()],
  // Note: 'darkMode' is not a Vite config option. 
  // If you want to enable dark mode with Tailwind, set 'darkMode' in your tailwind.config.js instead.
})
