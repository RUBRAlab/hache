// Recibe el formulario de contacto y lo manda por mail con Resend.
// Reemplaza al workflow de n8n "HACHE – Notificación de Lead".

const TO = process.env.CONTACT_TO || 'juliahylux@gmail.com';

const escape = (v) =>
  String(v ?? '').slice(0, 5000).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'JSON inválido' }, { status: 400 });
  }

  const nombre = String(body.nombre || '').trim();
  const digitos = String(body.whatsapp || '').replace(/\D/g, '');
  // Honeypot lleno o datos que el form real no permite: se responde OK sin mandar nada.
  if (!nombre || nombre.length > 120 || !body.empresa || !body.necesidad || digitos.length < 8 || body.sitio) {
    return Response.json({ ok: true });
  }

  const email = body.email ? `<p><strong>Email:</strong> ${escape(body.email)}</p>` : '';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'HACHE Consultora <notificaciones@rubra.ar>',
      to: TO,
      subject: `Nuevo lead HACHE – ${nombre}`,
      html: `<h2>Nuevo contacto desde juliah.com.ar</h2><p><strong>Nombre:</strong> ${escape(nombre)}</p><p><strong>Empresa:</strong> ${escape(body.empresa)}</p><p><strong>Necesidad:</strong> ${escape(body.necesidad)}</p><p><strong>WhatsApp / Teléfono:</strong> ${escape(body.whatsapp)}</p>${email}<hr/><p style="color:#888;font-size:12px">Enviado desde juliah.com.ar via RUBRA</p>`,
    }),
  });

  if (!res.ok) {
    console.error('Resend', res.status, await res.text());
    return Response.json({ ok: false, error: 'No se pudo enviar' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
