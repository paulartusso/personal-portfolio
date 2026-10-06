import { Component, inject } from '@angular/core';
import { LANGS, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div class="switcher" role="group" [attr.aria-label]="i18n.ui().hero.language">
      @for (lang of langs; track lang; let last = $last) {
        <button
          type="button"
          class="switcher__btn"
          [class.switcher__btn--active]="i18n.lang() === lang"
          [attr.aria-pressed]="i18n.lang() === lang"
          [attr.lang]="lang"
          (click)="i18n.setLang(lang)"
        >
          {{ lang }}
        </button>
        @if (!last) {
          <span class="switcher__sep" aria-hidden="true">·</span>
        }
      }
    </div>
  `,
  styles: `
    .switcher {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      font-size: clamp(16px, 2vw, 28px);
      text-transform: uppercase;
    }
    .switcher__btn {
      position: relative;
      padding: 2px 0;
      text-transform: inherit;
      color: var(--muted);
      transition: color 0.3s ease;
    }
    .switcher__btn::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -4px;
      height: 2px;
      background: var(--highlight-color);
      transform: scaleX(0);
      transition: transform 0.4s var(--ease-out);
    }
    .switcher__btn:hover,
    .switcher__btn--active {
      color: var(--text-color);
    }
    .switcher__btn--active::after {
      transform: scaleX(1);
    }
    .switcher__sep {
      color: var(--faint);
    }
  `,
})
export class LanguageSwitcher {
  protected readonly i18n = inject(LanguageService);
  protected readonly langs = LANGS;
}
