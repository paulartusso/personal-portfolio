import { Component } from '@angular/core';

/** Small 8-point star used as a decorative spinner next to section titles. */
@Component({
  selector: 'app-star',
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0l2.2 7.2L21 3l-4.2 6.8L24 12l-7.2 2.2L21 21l-6.8-4.2L12 24l-2.2-7.2L3 21l4.2-6.8L0 12l7.2-2.2L3 3l6.8 4.2z" />
    </svg>
  `,
  styles: `
    :host { display: inline-block; }
    svg { display: block; width: 100%; height: 100%; }
  `,
})
export class Star {}
