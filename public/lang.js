/* Traducciones del sitio de Julia H.
 *
 * Cada cadena traducible lleva en el HTML un atributo:
 *   data-i18n="clave"              -> reemplaza el texto del elemento
 *   data-i18n-placeholder="clave"  -> reemplaza el placeholder
 *   data-i18n-aria="clave"         -> reemplaza el aria-label
 *   data-i18n-alt="clave"          -> reemplaza el alt
 *
 * Al agregar o cambiar un texto del sitio hay que agregar la clave en `es` y
 * en `en`. Si falta en `en`, se muestra el español.
 */

const translations = {
  es: {
    'meta.title': 'Julia H | Consultoría de gestión para pymes y bodegas',

    'a11y.skip': 'Ir al contenido',
    'a11y.hMark': 'Descubrir el significado de la H',
    'a11y.waFloat': 'Escribir por WhatsApp',

    'brand.role': 'Consultora',
    'nav.cta': 'Consulta gratis',

    'h.line1': 'La "h" no suena...',
    'h.line2': 'pero da forma a las palabras.',
    'h.body':
      'Exactamente como nuestros procesos. Organizan, conectan y dan estructura a tu empresa, aunque operen en silencio.',

    'hero.hint': '( Pasar el cursor o tocar )',
    'hero.h1':
      'Orden y método para empresas que crecieron más rápido que sus procesos.',
    'hero.sub':
      'Consultoría de gestión para pymes, bodegas y empresas familiares. Mendoza, Argentina.',
    'hero.ctaPrimary': 'Consulta gratis',
    'hero.ctaWa': 'Enviar WhatsApp',

    'intro.eyebrow': '(El Factor H)',
    'intro.quote':
      '"Dicen que la \'H\' es muda, pero en consultoría, es la que más dice. Representa el factor Humano, ese que sostiene a las organizaciones cuando todo lo demás falla."',

    'sym.eyebrow': 'El Síntoma',
    'sym.head': 'Tu empresa sigue creciendo, pero el día a día se rige por la',
    'sym.headHighlight': 'urgencia continua.',
    'sym.c1.t': 'Concentración',
    'sym.c1.b':
      'El funcionamiento crítico recae sobre unas pocas cabezas, generando un techo invisible de crecimiento.',
    'sym.c2.t': 'Fricción entre áreas',
    'sym.c2.b':
      'La información se corta al pasar de un área a otra. Falta fluidez y visión compartida.',
    'sym.c3.t': 'Sin protocolo',
    'sym.c3.b':
      'El equipo trabaja arduamente, pero sin una documentación accionable que les permita autonomía real.',
    'sym.c4.t': 'Datos ciegos',
    'sym.c4.b':
      'Sobra información dispersa, pero faltan indicadores consolidados para basar las decisiones estratégicas y financieras.',

    'svc.eyebrow': 'Las Bases',
    'svc.s1.t': 'Diagnóstico de Gestión',
    'svc.s1.b':
      'Evaluamos la empresa como un todo orgánico. Identificamos las raíces del desorden, los problemas ocultos y las debilidades numéricas para obtener una foto real, sin filtro.',
    'svc.s2.t': 'Optimización Operativa',
    'svc.s2.b':
      'Simplificamos circuitos complejos y creamos flujos de coordinación directos. Documentación táctica que todo tu equipo puede leer y aplicar en el día a día.',
    'svc.s3.t': 'Escala Estratégica',
    'svc.s3.b':
      'Trabajamos codo a codo en la fase de implementación. Garantizamos que el cambio estructural se sostenga en el tiempo, aportando el seguimiento de control al nivel directivo.',
    'svc.ctaText': '¿Te suena conocido alguno de estos puntos?',
    'svc.ctaBtn': 'Hablemos',

    'dir.eyebrow': 'La Directora',
    'dir.photoAlt': 'Julia Halupczok, consultora de gestión',
    'dir.caption': 'Fundadora de Julia H',
    'dir.quote':
      '"Entiendo el caos de crecer rápido, porque experimenté esos procesos trabajando inmersa en la',
    'dir.quoteEm': 'industria real."',
    'dir.b1':
      'No aplico análisis corporativos estandarizados. Mi propuesta de valor radica en un equilibrio muy fino entre rigurosidad analítica y una mirada genuinamente abocada a las personas que operan el negocio.',
    'dir.b2':
      'Principalmente en industrias donde interviene la historia, las viñas, las bodegas y la producción física a escala comercial, las consultoras externas suelen carecer de la sensibilidad necesaria para conectar a quienes envasan con quienes auditan.',
    'dir.tag1': 'Vitivinicultura',
    'dir.tag2': 'Producción',
    'dir.tag3': 'PYMEs Familiares',
    'dir.linkedin': 'Ver LinkedIn',

    'rev.eyebrow': 'Impacto',
    'rev.q1':
      'Crecimos de golpe y todo dependía de mí. Julia logró mapear procesos con una empatía enorme hacia los empleados. Nos dio el orden técnico para delegar con paz.',
    'rev.a1': 'Director Empresarial',
    'rev.o1': 'Empresa Familiar, Mendoza',
    'rev.q2':
      'Habitualmente te dejan un manual que se empolva. Ella estructuró circuitos reales y accionables. Por primera vez Producción y Finanzas se entienden.',
    'rev.a2': 'Gerencia de Operaciones',
    'rev.o2': 'Bodega Boutique',
    'rev.q3':
      'Logramos bajar a tierra procedimientos que estaban en la cabeza de los fundadores. La claridad que aportó a la empresa es invaluable.',
    'rev.a3': 'Gerencia Administrativa',
    'rev.o3': 'PYME de Servicios',
    'rev.q4':
      'Transformó el caos de la temporada alta en un flujo de trabajo predecible. Ahora basamos decisiones en datos, no en intuición.',
    'rev.a4': 'Jefatura de Planta',
    'rev.o4': 'Industria Manufacturera',

    'form.eyebrow': '(Primer Paso)',
    'form.head':
      'Hagamos un primer diagnóstico ágil. Hablemos de los puntos ciegos de tu operativa interna y encontremos los pilares de orden para el próximo escalón.',
    'form.nombre': 'Nombre completo *',
    'form.nombrePh': 'María Pérez',
    'form.errNombre': 'Contanos tu nombre.',
    'form.empresa': 'Empresa / Negocio *',
    'form.empresaPh': 'Bodega Los Andes',
    'form.errEmpresa': 'Contanos de qué empresa nos escribís.',
    'form.necesidad': '¿Cuál es tu principal necesidad hoy? *',
    'form.necesidadPh': 'Organizar los procesos internos del equipo',
    'form.errNecesidad': 'Contanos brevemente qué necesitás.',
    'form.whatsapp': 'WhatsApp o teléfono *',
    'form.whatsappPh': '+54 9 261 000 0000',
    'form.errWhatsapp': 'Necesitamos un teléfono para poder responderte.',
    'form.email': 'Email (opcional)',
    'form.emailPh': 'maria@bodegalosandes.com',
    'form.errEmail': 'Revisá el formato del email.',
    'form.submit': 'Consulta gratis',
    'form.sending': 'Enviando...',
    'form.success': '¡Gracias! Te contactamos en menos de 72 horas.',
    'form.error': 'Hubo un error al enviar.',
    'form.errorWa': 'Escribinos por WhatsApp.',
    'form.alt': 'O si preferís escribir directamente',
    'form.waLink': 'Contacto por WhatsApp',

    'footer.tagline': 'Consultoría Estratégica.',
  },

  en: {
    'meta.title': 'Julia H | Management consulting for SMEs and wineries',

    'a11y.skip': 'Skip to content',
    'a11y.hMark': 'Discover the meaning of the H',
    'a11y.waFloat': 'Message us on WhatsApp',

    'brand.role': 'Consultant',
    'nav.cta': 'Free consultation',

    'h.line1': 'The "h" is silent...',
    'h.line2': 'but it shapes the words.',
    'h.body':
      'Exactly like our processes. They organize, connect and give structure to your company, even while they work in silence.',

    'hero.hint': '( Hover or tap )',
    'hero.h1':
      'Order and method for companies that outgrew their own processes.',
    'hero.sub':
      'Management consulting for SMEs, wineries and family businesses. Mendoza, Argentina.',
    'hero.ctaPrimary': 'Free consultation',
    'hero.ctaWa': 'Send WhatsApp',

    'intro.eyebrow': '(The H Factor)',
    'intro.quote':
      '"They say the \'H\' is silent, but in consulting it is the one that says the most. It stands for the Human factor, the one that holds organizations together when everything else fails."',

    'sym.eyebrow': 'The Symptom',
    'sym.head': 'Your company keeps growing, but the day-to-day runs on',
    'sym.headHighlight': 'constant urgency.',
    'sym.c1.t': 'Concentration',
    'sym.c1.b':
      'Critical operations rest on a handful of people, creating an invisible ceiling on growth.',
    'sym.c2.t': 'Friction between areas',
    'sym.c2.b':
      'Information breaks down as it moves from one area to the next. Fluidity and a shared view are missing.',
    'sym.c3.t': 'No protocol',
    'sym.c3.b':
      'The team works hard, but without actionable documentation that gives them real autonomy.',
    'sym.c4.t': 'Blind data',
    'sym.c4.b':
      'There is plenty of scattered information, but no consolidated indicators to ground strategic and financial decisions.',

    'svc.eyebrow': 'The Foundations',
    'svc.s1.t': 'Management Diagnosis',
    'svc.s1.b':
      'We assess the company as an organic whole. We identify the roots of the disorder, the hidden problems and the weak numbers, to get a real, unfiltered picture.',
    'svc.s2.t': 'Operational Optimization',
    'svc.s2.b':
      'We simplify complex circuits and build direct coordination flows. Practical documentation your whole team can actually read and apply day to day.',
    'svc.s3.t': 'Strategic Scaling',
    'svc.s3.b':
      'We work side by side through implementation. We make sure the structural change holds over time, bringing control and follow-up to the leadership level.',
    'svc.ctaText': 'Does any of this sound familiar?',
    'svc.ctaBtn': "Let's talk",

    'dir.eyebrow': 'The Director',
    'dir.photoAlt': 'Julia Halupczok, management consultant',
    'dir.caption': 'Founder of Julia H',
    'dir.quote':
      '"I understand the chaos of growing fast, because I lived through those processes working inside the',
    'dir.quoteEm': 'real industry."',
    'dir.b1':
      'I do not apply off-the-shelf corporate analysis. My value lies in a careful balance between analytical rigor and genuine attention to the people who actually run the business.',
    'dir.b2':
      'Especially in industries shaped by history — vineyards, wineries and physical production at commercial scale — outside consultants often lack the sensitivity to connect the people on the bottling line with the people auditing the books.',
    'dir.tag1': 'Winemaking',
    'dir.tag2': 'Production',
    'dir.tag3': 'Family SMEs',
    'dir.linkedin': 'View LinkedIn',

    'rev.eyebrow': 'Impact',
    'rev.q1':
      'We grew all at once and everything depended on me. Julia mapped our processes with enormous empathy for the staff. She gave us the technical order to delegate with peace of mind.',
    'rev.a1': 'Managing Director',
    'rev.o1': 'Family Business, Mendoza',
    'rev.q2':
      'Usually they leave you a manual that gathers dust. She structured real, actionable circuits. For the first time, Production and Finance understand each other.',
    'rev.a2': 'Operations Management',
    'rev.o2': 'Boutique Winery',
    'rev.q3':
      'We managed to get down on paper the procedures that lived in the founders’ heads. The clarity she brought to the company is invaluable.',
    'rev.a3': 'Administrative Management',
    'rev.o3': 'Services SME',
    'rev.q4':
      'She turned the chaos of high season into a predictable workflow. We now base decisions on data, not intuition.',
    'rev.a4': 'Plant Management',
    'rev.o4': 'Manufacturing Industry',

    'form.eyebrow': '(First Step)',
    'form.head':
      "Let's start with a quick diagnosis. Let's talk about the blind spots in your internal operation and find the pillars of order for the next step up.",
    'form.nombre': 'Full name *',
    'form.nombrePh': 'María Pérez',
    'form.errNombre': 'Please tell us your name.',
    'form.empresa': 'Company / Business *',
    'form.empresaPh': 'Los Andes Winery',
    'form.errEmpresa': 'Please tell us which company you are writing from.',
    'form.necesidad': 'What is your main need today? *',
    'form.necesidadPh': "Organizing the team's internal processes",
    'form.errNecesidad': 'Tell us briefly what you need.',
    'form.whatsapp': 'WhatsApp or phone *',
    'form.whatsappPh': '+54 9 261 000 0000',
    'form.errWhatsapp': 'We need a phone number to get back to you.',
    'form.email': 'Email (optional)',
    'form.emailPh': 'maria@losandeswinery.com',
    'form.errEmail': 'Please check the email format.',
    'form.submit': 'Free consultation',
    'form.sending': 'Sending...',
    'form.success': "Thank you! We'll be in touch within 72 hours.",
    'form.error': 'Something went wrong.',
    'form.errorWa': 'Message us on WhatsApp.',
    'form.alt': 'Or if you prefer to write directly',
    'form.waLink': 'Contact via WhatsApp',

    'footer.tagline': 'Strategic Consulting.',
  },
};

const STORAGE_KEY = 'juliah-lang';
let currentLang = 'es';

/** Devuelve la cadena de la clave en el idioma activo. */
function tr(key, fallback) {
  const dict = translations[currentLang] || translations.es;
  return dict[key] || translations.es[key] || fallback || '';
}

function applyLang(lang) {
  currentLang = translations[lang] ? lang : 'es';
  document.documentElement.lang = currentLang;
  document.title = tr('meta.title');

  const apply = (attr, set) => {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const value = tr(el.getAttribute(attr));
      if (value) set(el, value);
    });
  };

  apply('data-i18n', (el, v) => (el.textContent = v));
  apply('data-i18n-placeholder', (el, v) => el.setAttribute('placeholder', v));
  apply('data-i18n-aria', (el, v) => el.setAttribute('aria-label', v));
  apply('data-i18n-alt', (el, v) => el.setAttribute('alt', v));

  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  if (btnEs) btnEs.setAttribute('aria-pressed', String(currentLang === 'es'));
  if (btnEn) btnEn.setAttribute('aria-pressed', String(currentLang === 'en'));
}

/** Llamado desde los botones ES / EN del header. */
function setLang(lang) {
  if (lang === currentLang) return;
  applyLang(lang);
  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (_) {
    /* modo privado: la elección simplemente no persiste */
  }
}

let saved = null;
try {
  saved = localStorage.getItem(STORAGE_KEY);
} catch (_) {
  /* sin acceso a storage */
}
if (saved && saved !== 'es') applyLang(saved);
else applyLang('es');
