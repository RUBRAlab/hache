# Proyecto HACHE — Julia Halupczok

## Stack
- Static HTML + Tailwind (CDN) + vanilla JS
- Lucide icons (CDN)
- Vite como servidor/bundler (sin React en producción — index.html es la app)
- Vercel (deploy)
- n8n (webhook de leads)
- Resend (email transaccional)

## Convenciones
- Todo el contenido está en `index.html` (raíz del proyecto)
- Traducciones en `public/lang.js` — agregar claves en `es` y `en` al tocar textos
- Variables de entorno en `.env.local` (nunca commitear)
- Commits en español, descriptivos

## CTAs de contacto
- Sección intro (debajo de la cita): botones "Enviar WhatsApp" + "Consulta gratis" (enlaza a #contacto)
- Sección #contacto: formulario de leads (ver abajo) + botón "Contacto por WhatsApp" como alternativa

## Formulario de leads (#contacto)
Campos: nombre, empresa, necesidad, whatsapp, email (todos requeridos)
Estados: idle → loading (spinner, campos deshabilitados) → success / error
Submit: POST JSON a `VITE_N8N_WEBHOOK_URL`
Body enviado: `{ nombre, empresa, necesidad, whatsapp, email }`
Botón: "Consulta gratis" con ícono `send` de Lucide

## Webhook n8n
URL: `https://n8n-production-ac060.up.railway.app/webhook/hache-contacto`
Variable: `VITE_N8N_WEBHOOK_URL` en `.env.local` y en Vercel → Settings → Environment Variables → Production
Nota: el webhook URL está hardcodeado en el script inline de index.html (Vite no transforma import.meta.env en scripts inline de HTML)

## Email
- Destinatario de leads: juliahylux@gmail.com
- Remitente: notificaciones@rubra.ar (dominio rubra.ar verificado en Resend)

## Presupuesto base cliente
- Hosting: USD 25/mes
- Soporte: USD 75/mes (opcional)

