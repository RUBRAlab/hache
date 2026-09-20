import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'vite';

// index.html es la app: HTML estático + Tailwind compilado + JS vanilla.
// No hay framework, así que Vite solo compila el CSS y empaqueta src/site.js.
export default defineConfig({
  plugins: [tailwindcss()],
});
