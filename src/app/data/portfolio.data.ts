// Everything personal lives here — edit this file to fill in your portfolio.
// Text that changes with the language switcher is written as { en, es, it }.

import { IconName } from '../components/icon/icons';
import type { Localized } from '../services/language.service';

/** Same text in every language (names, job titles you keep in English…). */
const same = (text: string): Localized => ({ en: text, es: text, it: text });

export interface Project {
  title: string;
  category: Localized;
  year: string;
  description: Localized;
  tags: string[];
  link: string;
  /** Optional cover image (e.g. 'projects/my-project.jpg' inside /public). Falls back to a palette gradient. */
  image?: string;
  /** Palette tone used for the card glow + gradient fallback. */
  tone: 'amber' | 'berry' | 'ash';
}

export interface Job {
  period: Localized;
  role: Localized;
  company: string;
  location: Localized;
  description: Localized;
  stack: string[];
  link?: string;
}

export interface Skill {
  label: Localized;
  quote: Localized;
}

export interface Social {
  label: string;
  url: string;
  /*Optional pixel icon shown before the label*/
  icon?: IconName;
}

export const PROFILE = {
  firstName: 'Paula',
  lastName: 'Artusso',
  role: same('Frontend developer'),
  email: 'pavlartdeveloper@gmail.com',
  // the line break is kept on screen
  bio: {
    en: 'Argentinian developer based in Milan,\nI work mostly on frontend, dive into backend when needed, naturally step into team leadership roles, and never stop being curious about technology and people.',
    es: 'Soy de Argentina y desarrollo desde Milán,\ntrabajo principalmente en frontend, me meto en el backend cuando hace falta, asumo con naturalidad roles de liderazgo de equipo y nunca dejo de sentir curiosidad por la tecnología y las personas.',
    it: "Vengo dall'Argentina e sviluppo da Milano,\nlavoro soprattutto sul frontend, mi immergo nel backend quando serve, assumo con naturalezza ruoli di guida del team, e la curiosità per la tecnologia e le persone non mi abbandona mai.",
  } satisfies Localized,
};

export const SOCIALS: Social[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/paula-artusso/', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/paulartusso' },
  { label: 'Email', url: `mailto:${PROFILE.email}`, icon: 'email' },
];

export const SKILLS: Skill[] = [
  {
    label: same('Angular'),
    quote: {
      en: 'Structure first, then everything flows',
      es: 'Primero la estructura, después todo fluye',
      it: 'Prima la struttura, poi tutto scorre',
    },
  },
  {
    label: same('TypeScript'),
    quote: {
      en: 'Types are documentation that never lies',
      es: 'Los tipos son documentación que nunca miente',
      it: 'I tipi sono documentazione che non mente mai',
    },
  },
  {
    label: same('HTML / SCSS'),
    quote: {
      en: 'Good markup is the quiet backbone of the web',
      es: 'Un buen marcado es la columna silenciosa de la web',
      it: 'Un buon markup è la spina dorsale silenziosa del web',
    },
  },
  {
    label: { en: 'Animations', es: 'Animaciones', it: 'Animazioni' },
    quote: {
      en: 'Motion should explain, not decorate',
      es: 'El movimiento debe explicar, no decorar',
      it: 'Il movimento deve spiegare, non decorare',
    },
  },
  {
    label: { en: 'Accessibility', es: 'Accesibilidad', it: 'Accessibilità' },
    quote: {
      en: 'Built for everyone, or not really built',
      es: 'Hecho para todos, o no está hecho',
      it: 'Fatto per tutti, o non è fatto davvero',
    },
  },
  {
    label: { en: 'Performance', es: 'Rendimiento', it: 'Performance' },
    quote: {
      en: 'Every millisecond is part of the design',
      es: 'Cada milisegundo es parte del diseño',
      it: 'Ogni millisecondo fa parte del design',
    },
  },
];

const projectPlaceholder: Localized = {
  en: 'A short sentence about what this project is, the problem it solves and your role in it.',
  es: 'Una frase corta sobre qué es este proyecto, el problema que resuelve y tu rol en él.',
  it: "Una breve frase su cos'è questo progetto, il problema che risolve e il tuo ruolo.",
};

export const PROJECTS: Project[] = [
  {
    title: 'Project One',
    category: { en: 'Web app', es: 'Aplicación web', it: 'Web app' },
    year: '2026',
    description: projectPlaceholder,
    tags: ['Angular', 'TypeScript', 'SCSS'],
    link: '#',
    tone: 'berry',
  },
  {
    title: 'Project Two',
    category: { en: 'Website', es: 'Sitio web', it: 'Sito web' },
    year: '2025',
    description: projectPlaceholder,
    tags: ['React', 'GSAP', 'Figma'],
    link: '#',
    tone: 'amber',
  },
  {
    title: 'Project Three',
    category: same('Design system'),
    year: '2025',
    description: projectPlaceholder,
    tags: ['Storybook', 'Accessibility', 'CSS'],
    link: '#',
    tone: 'ash',
  },
];

const jobPlaceholder: Localized = {
  en: 'What you worked on, the impact you had and the things you learned.',
  es: 'En qué trabajaste, el impacto que tuviste y lo que aprendiste.',
  it: "Su cosa hai lavorato, l'impatto che hai avuto e cosa hai imparato.",
};

export const EXPERIENCE: Job[] = [
  {
    period: { en: '2024 — Present', es: '2024 - Actualidad', it: '2024 - Oggi' },
    role: same('Frontend Developer'),
    company: 'Company Name',
    location: { en: 'City · Hybrid', es: 'Ciudad · Híbrido', it: 'Città · Ibrido' },
    description: {
      en: 'What you work on, the impact you have and the things you are proud of.',
      es: 'En qué trabajás, el impacto que tenés y lo que te enorgullece.',
      it: "Su cosa lavori, l'impatto che hai e i risultati di cui essere fieri.",
    },
    stack: ['Angular', 'TypeScript', 'RxJS'],
    link: '#',
  },
  {
    period: same('2022 - 2024'),
    role: same('Junior Frontend Developer'),
    company: 'Company Name',
    location: { en: 'City · Remote', es: 'Ciudad · Remoto', it: 'Città · Da remoto' },
    description: jobPlaceholder,
    stack: ['React', 'SCSS', 'Jest'],
    link: '#',
  },
  {
    period: same('2021 - 2022'),
    role: { en: 'Web Development Intern', es: 'Pasantía en desarrollo web', it: 'Stage in sviluppo web' },
    company: 'Company Name',
    location: { en: 'City · On-site', es: 'Ciudad · Presencial', it: 'Città · In sede' },
    description: jobPlaceholder,
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];
