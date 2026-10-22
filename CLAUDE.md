# Proyecto Julia H — Julia Halupczok

Antes se llamaba HACHE. La marca visible es **Julia H** (dominio juliah.com.ar);
"HACHE" y el juego con la letra H quedan como concepto narrativo del sitio, no
como nombre. Si aparece "HACHE" en un título, meta o schema, es un residuo.

## Stack
- HTML estático + **Tailwind v4 compilado con Vite** (nunca el CDN)
- JavaScript vanilla, sin framework
- Íconos SVG de Lucide **inlineados** en el HTML — no hay dependencia en runtime
- Vercel (deploy, framework `vite`)
- Función de Vercel `api/contacto.js` + Resend (email)

## Archivos
- `index.html` — todo el markup
- `src/styles.css` — tokens `@theme` + CSS propio. Es la entrada de Tailwind
- `src/site.js` — reveals, monograma H, carrusel, formulario
- `public/lang.js` — diccionario ES/EN
- `scripts/gen-brand.py` — genera og-image e iconos

Las únicas dependencias son `vite`, `tailwindcss` y `@tailwindcss/vite`. No hay
script `dev` a propósito: acá no se levantan servidores locales.

## Convenciones
- **Textos: nunca hardcodear una cadena visible.** Va con `data-i18n="clave"` en
  el HTML y la clave se agrega en `es` **y** en `en` dentro de `public/lang.js`.
  Variantes: `data-i18n-placeholder`, `data-i18n-aria`, `data-i18n-alt`.
- Colores: usar los tokens de `src/styles.css` (`brand-soft-black`,
  `brand-smoke`, `brand-taupe`, `brand-line`, pasteles e `brand-ink-*`).
  `smoke` y `taupe` están calibrados para contraste AA sobre el fondo warm
  white — **no aclararlos**. `brand-line` es solo para filetes, nunca texto.
- Texto mínimo 11px. Nada de `text-[9px]` / `text-[10px]`.
- Toda animación tiene que respetar `prefers-reduced-motion` (ya hay un bloque
  al final de `src/styles.css`).
- Commits en español, descriptivos.
- Verificar con `npm run build` antes de commitear: si Tailwind no generó una
  clase, ahí se nota.

## CTAs de contacto
- Header fijo: botón "Consulta gratis" (→ `#contacto`)
- Hero: "Consulta gratis" + "Enviar WhatsApp"
- Después de la sección de servicios: "Hablemos"
- `#contacto`: formulario + link de WhatsApp
- Botón flotante de WhatsApp, que se oculta solo al llegar a `#contacto`

## Orden de secciones
Hero → El Factor H → El Síntoma → Las Bases (servicios) → La Directora →
Impacto (reseñas) → Contacto

## Formulario de leads (#contacto)
Campos: nombre, empresa, necesidad (textarea), whatsapp — **requeridos**;
email — **opcional**.
Validación por campo con mensaje propio, `aria-invalid` y foco al primer error.
Anti-spam: honeypot (`sitio`) + descarte de envíos en menos de 2,5 s.
Submit: POST JSON a `/api/contacto`.
Body: `{ nombre, empresa, necesidad, whatsapp, email, sitio }` — `email` puede venir
vacío; `sitio` es el honeypot.

## Formulario → Vercel → Resend
Desde el 22/10/2026 el formulario ya no pasa por n8n (incidente de seguridad de
Railway). `api/contacto.js` valida igual que el viejo workflow (campos requeridos,
WhatsApp con 8+ dígitos, honeypot vacío) y manda el mail por la API de Resend.
Variables en Vercel: `RESEND_API_KEY` (key `hache-web`, solo envío) en Production
y Preview; `CONTACT_TO` solo en Preview (`hola@rubra.ar`, para probar sin
molestar a Julia).

## Email
- Destinatario de leads: juliahylux@gmail.com
- Remitente: notificaciones@rubra.ar (dominio rubra.ar verificado en Resend)

## Presupuesto base cliente
- Hosting: USD 25/mes
- Soporte: USD 75/mes (opcional)

## Pendiente de contenido (requiere a Julia)
- Las 4 reseñas son anónimas y genéricas; se leen como inventadas. Hacen falta
  nombres/empresas reales o sacarlas.
- Falta un resultado cuantificado y una explicación del proceso/entregables.
