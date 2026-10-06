import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS, IconName } from './icons';

/** Pixel icon from the Streamline set. Sized by font-size (1em) and coloured by currentColor. */
@Component({
  selector: 'app-icon',
  template: '',
  host: {
    'aria-hidden': 'true',
    '[innerHTML]': 'svg()',
  },
  styles: `
    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
      flex: none;
      line-height: 0;
    }
    :host ::ng-deep svg {
      width: 100%;
      height: 100%;
      shape-rendering: crispEdges;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();

  private sanitizer = inject(DomSanitizer);

  // ICONS is a static, in-repo constant — safe to trust
  protected readonly svg = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${ICONS[this.name()]}</svg>`,
    ),
  );
}
