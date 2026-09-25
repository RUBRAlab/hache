/* Comportamiento del sitio de Julia H. Sin dependencias. */

const WEBHOOK_URL =
  import.meta.env.VITE_N8N_WEBHOOK_URL ||
  'https://n8n-production-ac060.up.railway.app/webhook/hache-contacto';

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

/* ------------------------------------------------------------------ año */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* -------------------------------------------------------- header pegado */
const header = document.getElementById('site-header');
if (header) {
  const syncHeader = () =>
    header.classList.toggle('is-stuck', window.scrollY > 40);
  syncHeader();
  addEventListener('scroll', syncHeader, { passive: true });
}

/* ------------------------------------------------------- reveals al scroll */
/* Un IntersectionObserver no alcanza: cuando el scroll pega un salto grande
 * (clic en "Consulta gratis", un ancla, buscar en la página) los elementos
 * pasan de abajo a arriba del viewport dentro del mismo frame, nunca llegan a
 * intersecar y quedan en opacity 0 para siempre. Barremos por posición, que es
 * determinístico y no se puede saltear nada. */
let pendientes = [...document.querySelectorAll('.reveal')];

/* Sin throttle de requestAnimationFrame a propósito: en una pestaña en segundo
 * plano rAF no corre, y cualquier flag de "ya pedí un frame" queda trabado y
 * mata los reveals para el resto de la sesión. Son 20 rects como mucho y la
 * lista se vacía enseguida. */
function barrerReveals() {
  pendientes = pendientes.filter((el) => {
    if (el.getBoundingClientRect().top >= window.innerHeight - 75) return true;
    el.classList.add('active');
    return false;
  });
  if (!pendientes.length) {
    removeEventListener('scroll', barrerReveals);
    removeEventListener('resize', barrerReveals);
  }
}

if (prefersReducedMotion) {
  pendientes.forEach((el) => el.classList.add('active'));
  pendientes = [];
} else {
  barrerReveals();
  addEventListener('scroll', barrerReveals, { passive: true });
  addEventListener('resize', barrerReveals);
}

/* ------------------------------------------------------ monograma H */
const hMark = document.getElementById('h-mark');
const hToggle = document.getElementById('h-toggle');

if (hMark && hToggle) {
  const setOpen = (open) => {
    hMark.classList.toggle('is-open', open);
    hToggle.setAttribute('aria-expanded', String(open));
    if (open) hMark.classList.add('hint-used');
  };

  hToggle.addEventListener('click', () => {
    setOpen(hToggle.getAttribute('aria-expanded') !== 'true');
  });

  // El hover solo para punteros finos: en touch deja la H trabada abierta.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    hMark.addEventListener('mouseenter', () => setOpen(true));
    hMark.addEventListener('mouseleave', () => setOpen(false));
    hToggle.addEventListener('focus', () => setOpen(true));
    hToggle.addEventListener('blur', () => setOpen(false));
  } else {
    // En touch el mensaje es el corazón de la marca: no lo dejamos escondido
    // detrás de un gesto que nadie descubre.
    setTimeout(() => {
      if (hToggle.getAttribute('aria-expanded') !== 'true') setOpen(true);
    }, 1800);
  }
}

/* --------------------------------------------------- carrusel de reseñas */
const marqueeClone = document.querySelector('.marquee-clone');
if (marqueeClone) {
  const cards = document.querySelectorAll('.marquee-content > .review-card');
  cards.forEach((card) => {
    const copy = card.cloneNode(true);
    copy.removeAttribute('id');
    marqueeClone.appendChild(copy);
  });
}

// En touch no hay hover para pausar: un toque alterna la pausa.
const marquee = document.getElementById('marquee');
if (marquee && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  marquee.addEventListener('click', () => marquee.classList.toggle('is-paused'));
}

/* ---------------------------------------------- WhatsApp flotante */
const waFloat = document.getElementById('wa-float');
const contacto = document.getElementById('contacto');
if (waFloat) {
  // Estorba en dos lugares: sobre el hero, que ya tiene su botón de WhatsApp
  // justo debajo, y sobre el formulario de contacto.
  let enContacto = false;

  const syncWaFloat = () => {
    const pasoElHero = window.scrollY > window.innerHeight * 0.85;
    waFloat.classList.toggle('is-visible', pasoElHero && !enContacto);
  };

  if (contacto && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entry]) => {
        enContacto = entry.isIntersecting;
        syncWaFloat();
      },
      { threshold: 0.15 },
    ).observe(contacto);
  }

  syncWaFloat();
  addEventListener('scroll', syncWaFloat, { passive: true });
}

/* ------------------------------------------------------------ formulario */
const form = document.getElementById('contact-form');

if (form) {
  const submitBtn = document.getElementById('form-submit-btn');
  const btnText = document.getElementById('form-btn-text');
  const btnIcon = document.getElementById('form-btn-icon');
  const btnSpinner = document.getElementById('form-btn-spinner');
  const successMsg = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');
  const honeypot = document.getElementById('f-sitio');
  const renderedAt = Date.now();

  const t = (key, fallback) =>
    typeof window.tr === 'function' ? window.tr(key, fallback) : fallback;

  const fields = [
    { el: document.getElementById('f-nombre'), required: true },
    { el: document.getElementById('f-empresa'), required: true },
    { el: document.getElementById('f-necesidad'), required: true },
    { el: document.getElementById('f-whatsapp'), required: true, min: 6 },
    { el: document.getElementById('f-email'), required: false, email: true },
  ];

  // Conecta cada input con su mensaje de error para lectores de pantalla.
  fields.forEach(({ el }) => {
    const wrap = el.closest('[data-field]');
    const err = wrap && wrap.querySelector('.field-error');
    if (err) {
      err.id = `${el.id}-err`;
      el.setAttribute('aria-describedby', err.id);
    }
  });

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

  function validateField({ el, required, min, email }) {
    const value = el.value.trim();
    let ok = true;
    if (required && !value) ok = false;
    else if (min && value.replace(/\D/g, '').length < min) ok = false;
    else if (email && value && !isEmail(value)) ok = false;

    const wrap = el.closest('[data-field]');
    if (wrap) wrap.setAttribute('data-invalid', String(!ok));
    el.setAttribute('aria-invalid', String(!ok));
    return ok;
  }

  let attempted = false;
  fields.forEach((f) => {
    f.el.addEventListener('blur', () => {
      if (attempted || f.el.value.trim()) validateField(f);
    });
    f.el.addEventListener('input', () => {
      if (attempted) validateField(f);
    });
  });

  function setLoading(loading) {
    submitBtn.disabled = loading;
    form
      .querySelectorAll('input, textarea')
      .forEach((el) => (el.disabled = loading));
    btnText.textContent = loading
      ? t('form.sending', 'Enviando...')
      : t('form.submit', 'Consulta gratis');
    btnIcon.classList.toggle('hidden', loading);
    btnSpinner.classList.toggle('hidden', !loading);
  }

  function showSuccess() {
    form.reset();
    fields.forEach(({ el }) => {
      const wrap = el.closest('[data-field]');
      if (wrap) wrap.setAttribute('data-invalid', 'false');
      el.removeAttribute('aria-invalid');
    });
    attempted = false;
    successMsg.classList.remove('hidden');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    attempted = true;
    successMsg.classList.add('hidden');
    errorMsg.classList.add('hidden');

    const results = fields.map(validateField);
    if (results.includes(false)) {
      const firstBad = fields[results.indexOf(false)].el;
      firstBad.focus();
      firstBad.scrollIntoView({
        block: 'center',
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      return;
    }

    // Trampas anti-spam: el campo oculto debe venir vacío y un humano no
    // completa cinco campos en menos de dos segundos y medio.
    if (honeypot.value || Date.now() - renderedAt < 2500) {
      showSuccess();
      return;
    }

    setLoading(true);

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: document.getElementById('f-nombre').value.trim(),
        empresa: document.getElementById('f-empresa').value.trim(),
        necesidad: document.getElementById('f-necesidad').value.trim(),
        whatsapp: document.getElementById('f-whatsapp').value.trim(),
        email: document.getElementById('f-email').value.trim(),
        // Honeypot: viaja vacío desde el form real. El nodo IF del workflow
        // descarta el envío si llega con valor.
        sitio: honeypot.value,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        setLoading(false);
        showSuccess();
      })
      .catch(() => {
        setLoading(false);
        errorMsg.classList.remove('hidden');
      });
  });
}
