// Interface strings. Your own content (bio, projects, jobs…) lives in data/portfolio.data.ts.

const en = {
  loading: 'Loading',
  nav: { about: 'About', work: 'Work', experience: 'Experience', contact: 'Contact', home: 'Home', menu: 'Menu' },
  theme: { light: 'Light', dark: 'Dark', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
  hero: { scrollDown: 'Scroll down', language: 'Language' },
  about: { title: 'About me' },
  work: { title: 'Selected works', viewProject: 'View project' },
  experience: { title: 'Experience', lead: "Where I've been building things." },
  contact: { kicker: 'Have a project in mind?', cta: 'Get in touch', backToTop: 'Back to top', iconsBy: 'Pixel icons by Streamline' },
};

export type UiStrings = typeof en;

const es: UiStrings = {
  loading: 'Cargando',
  nav: { about: 'Sobre mí', work: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', home: 'Inicio', menu: 'Menú' },
  theme: { light: 'Claro', dark: 'Oscuro', toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
  hero: { scrollDown: 'Bajar', language: 'Idioma' },
  about: { title: 'Sobre mí' },
  work: { title: 'Proyectos destacados', viewProject: 'Ver proyecto' },
  experience: { title: 'Experiencia', lead: 'Donde estuve construyendo cosas.' },
  contact: { kicker: '¿Tenés un proyecto en mente?', cta: 'Hablemos', backToTop: 'Volver arriba', iconsBy: 'Íconos Pixel de Streamline' },
};

const it: UiStrings = {
  loading: 'Caricamento',
  nav: { about: 'Chi sono', work: 'Progetti', experience: 'Esperienza', contact: 'Contatti', home: 'Home', menu: 'Menu' },
  theme: { light: 'Chiaro', dark: 'Scuro', toLight: 'Passa al tema chiaro', toDark: 'Passa al tema scuro' },
  hero: { scrollDown: 'Scorri giù', language: 'Lingua' },
  about: { title: 'Chi sono' },
  work: { title: 'Progetti selezionati', viewProject: 'Vedi progetto' },
  experience: { title: 'Esperienza', lead: 'Dove ho costruito cose.' },
  contact: { kicker: 'Hai un progetto in mente?', cta: 'Parliamone', backToTop: 'Torna su', iconsBy: 'Icone Pixel di Streamline' },
};

export const UI = { en, es, it };
