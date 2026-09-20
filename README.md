# Julia H — sitio institucional

Landing de una sola página de **Julia Halupczok**, consultora de gestión para
pymes, bodegas y empresas familiares (Mendoza, Argentina).

Producción: https://www.juliah.com.ar

## Stack

- HTML estático + Tailwind v4 **compilado con Vite** (no CDN)
- JavaScript vanilla, sin framework (React quedó en `package.json` pero no se usa)
- Íconos SVG de Lucide inlineados — sin dependencia en runtime
- Deploy en Vercel (framework detectado: `vite`)
- Formulario de leads → webhook de n8n → Resend

## Estructura

| Archivo | Qué contiene |
|---|---|
| `index.html` | Todo el markup del sitio |
| `src/styles.css` | Tokens de marca (`@theme`) + CSS propio. Entrada de Tailwind |
| `src/site.js` | Comportamiento: reveals, monograma H, carrusel, formulario |
| `public/lang.js` | Diccionario ES/EN y el switch de idioma |
| `public/og-image.png` | Imagen de compartido, 1200×630 |

`src/App.tsx`, `src/main.tsx` y `src/index.css` son restos del scaffold de AI
Studio y no se usan.

## Desarrollo

> [!IMPORTANT]
> **No levantar servidores locales en este proyecto.** Los cambios se verifican
> deployando a Vercel.

```bash
npm install
npm run build   # compila a dist/ — sirve para validar que Tailwind generó todo
```

## Textos y traducciones

Cada cadena traducible lleva un atributo en el HTML y su clave vive en
`public/lang.js`, en **los dos idiomas**:

```html
<p data-i18n="hero.sub">Consultoría de gestión para pymes…</p>
<input data-i18n-placeholder="form.nombrePh">
<a data-i18n-aria="a11y.waFloat">
<img data-i18n-alt="dir.photoAlt">
```

Si una clave falta en `en`, se muestra el español.

## Variables de entorno

| Variable | Dónde | Para qué |
|---|---|---|
| `VITE_N8N_WEBHOOK_URL` | `.env.local` y Vercel → Production | Endpoint del formulario de leads |

Si la variable no está definida, `src/site.js` cae al webhook de producción
hardcodeado, así que el formulario nunca queda muerto.

## Assets de marca

`og-image.png`, `favicon.ico`, `favicon.svg` y `apple-touch-icon.png` se generan
con el script `scripts/gen-brand.py` (requiere `pillow` y las tipografías
Playfair Display e Inter). Correrlo solo si cambia la identidad.
