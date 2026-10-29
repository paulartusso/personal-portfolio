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
  /** Optional, e.g. { en: 'Milan · Hybrid', es: 'Milán · Híbrido', it: 'Milano · Ibrido' } */
  location?: Localized;
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

export const PROJECTS: Project[] = [
  {
    title: 'Luna Verde Ecohabitat',
    category: { en: 'Website', es: 'Sitio web', it: 'Sito web' },
    year: '2026',
    description: {
      en: 'Website for Luna Verde, an eco-sustainable habitat in Colombia, built with vanilla JavaScript, HTML and CSS.',
      es: 'Sitio web para Luna Verde, una estructura ecosostenible en Colombia, desarrollado con JavaScript vanilla, HTML y CSS.',
      it: 'Sito web per Luna Verde, una struttura ecosostenibile in Colombia, sviluppato con JavaScript vanilla, HTML e CSS.',
    },
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://lunaverdeecohabitat.com/',
    image: 'projects/luna-verde.jpg',
    tone: 'berry',
  },
  {
    title: 'Associazione Gemellaggio',
    category: { en: 'Website', es: 'Sitio web', it: 'Sito web' },
    year: '2025',
    description: {
      en: "Website for the twinning association linking Filottrano, Kuppenheim and Raon-l'Étape, built with Angular 16, TypeScript and SCSS.",
      es: "Sitio web para la asociación de hermanamiento entre Filottrano, Kuppenheim y Raon-l'Étape, desarrollado con Angular 16, TypeScript y SCSS.",
      it: "Sito web per l'associazione di gemellaggio tra Filottrano, Kuppenheim e Raon-l'Étape, sviluppato con Angular 16, TypeScript e SCSS.",
    },
    tags: ['Angular 16', 'TypeScript', 'SCSS'],
    link: 'https://capable-taiyaki-9c2bdc.netlify.app/home',
    image: 'projects/gemellaggio.jpg',
    tone: 'amber',
  },
  {
    title: 'Hello, soy Jae',
    category: same('Portfolio'),
    year: '2020',
    description: {
      en: "Portfolio website for a graphic designer client, adapting the client's Figma design into a site built with vanilla JavaScript, HTML and CSS.",
      es: 'Sitio web portfolio para una clienta diseñadora gráfica: adaptación de su diseño en Figma, desarrollado con JavaScript vanilla, HTML y CSS.',
      it: 'Sito portfolio per una cliente graphic designer: adattamento del suo design in Figma, sviluppato con JavaScript vanilla, HTML e CSS.',
    },
    tags: ['Figma', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://trusting-curran-962860.netlify.app/',
    image: 'projects/hello-soy-jae.jpg',
    tone: 'ash',
  },
];

// Current job first, then by end date (newest first).
export const EXPERIENCE: Job[] = [
  {
    period: { en: 'Sep 2024 – Present', es: 'Sep 2024 – Actualidad', it: 'Set 2024 – Oggi' },
    role: same('Full Stack Developer'),
    company: 'Everience',
    description: {
      en: 'Management and development of internal projects with a full stack approach, mainly using Angular, Node.js and SQL. Technical support for junior profiles and coordination of development activities.',
      es: 'Gestión y desarrollo de proyectos internos con un enfoque full stack, utilizando principalmente Angular, Node.js y SQL. Soporte técnico a perfiles junior y coordinación de actividades de desarrollo.',
      it: 'Gestione e sviluppo di progetti interni con un approccio full stack, utilizzando principalmente Angular, Node.js e SQL. Supporto tecnico ai profili junior e coordinamento delle attività di sviluppo.',
    },
    stack: ['Angular', 'Node.js', 'SQL'],
  },
  {
    period: { en: 'Dec 2025 – Feb 2026', es: 'Dic 2025 – Feb 2026', it: 'Dic 2025 – Feb 2026' },
    role: { en: 'Consultant / Angular Developer', es: 'Consultora / Angular Developer', it: 'Consulente / Angular Developer' },
    company: 'Banca Ifis',
    description: {
      en: "Development and maintenance of frameworks and applications based on Angular 8 and AngularJS. Building Angular components, directives and services, handling and resolving support tickets, and collaborating on solutions for dynamic components. Working according to the company's development guidelines and processes.",
      es: 'Desarrollo y mantenimiento de frameworks y aplicaciones basados en Angular 8 y AngularJS. Desarrollo de componentes, directivas y servicios Angular, gestión y resolución de tickets de soporte y colaboración en soluciones para componentes dinámicos. Trabajo siguiendo las directrices y procesos de desarrollo de la empresa.',
      it: 'Sviluppo e manutenzione di framework e applicazioni basati su Angular 8 e AngularJS. Sviluppo di componenti, direttive e servizi Angular, gestione e risoluzione di ticket di supporto e collaborazione a soluzioni per componenti dinamici. Lavoro secondo le linee guida e i processi di sviluppo aziendali.',
    },
    stack: ['Angular 8', 'AngularJS'],
  },
  {
    period: same('2024'),
    role: same('Web Developer'),
    company: 'Freelance',
    description: {
      en: 'Development and customization of WordPress websites based on client needs, including maintenance and changes to existing sites.',
      es: 'Desarrollo y personalización de sitios web en WordPress según las necesidades de los clientes, incluyendo tareas de mantenimiento y modificación de sitios existentes.',
      it: 'Sviluppo e personalizzazione di siti web in WordPress in base alle esigenze dei clienti, incluse attività di manutenzione e modifica di siti esistenti.',
    },
    stack: ['WordPress'],
  },
  {
    period: { en: 'Mar 2021 - May 2023', es: 'Mar 2021 - May 2023', it: 'Mar 2021 - Mag 2023' },
    role: same('Frontend Developer'),
    company: 'Blockinar',
    description: {
      en: 'Development and maintenance of a mobile app for the medical sector, mainly using Angular, Ionic and TypeScript. Managing the Android build process with Android Studio.',
      es: 'Desarrollo y mantenimiento de una aplicación móvil para el sector médico, utilizando principalmente Angular, Ionic y TypeScript. Gestión del proceso de build para Android mediante Android Studio.',
      it: "Sviluppo e manutenzione di un'applicazione mobile per il settore medico, utilizzando principalmente Angular, Ionic e TypeScript. Gestione del processo di build per Android tramite Android Studio.",
    },
    stack: ['Angular', 'Ionic', 'TypeScript', 'Android Studio'],
  },
  {
    period: { en: 'Sep 2021 - Mar 2023', es: 'Sep 2021 - Mar 2023', it: 'Set 2021 - Mar 2023' },
    role: { en: 'JavaScript Tutor', es: 'Tutora de JavaScript', it: 'Tutor di JavaScript' },
    company: 'Coderhouse',
    description: {
      en: 'Tutor in JavaScript courses, supporting teachers and students during classes and with exercises. Helping solve questions and technical problems.',
      es: 'Tutora en cursos de JavaScript, dando soporte a profesores y alumnos durante las clases y en la realización de ejercicios. Ayuda en la resolución de dudas y problemas técnicos.',
      it: 'Tutor nei corsi di JavaScript, a supporto di docenti e studenti durante le lezioni e nello svolgimento degli esercizi. Aiuto nella risoluzione di dubbi e problemi tecnici.',
    },
    stack: ['JavaScript'],
  },
];
