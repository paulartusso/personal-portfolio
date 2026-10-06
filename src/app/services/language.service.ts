import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { UI } from '../i18n/ui';

export const LANGS = ['en', 'es', 'it'] as const;
export type Lang = (typeof LANGS)[number];

/** A piece of content written in every supported language. */
export type Localized = Record<Lang, string>;

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);

  readonly lang = signal<Lang>('en');
  /** UI strings (menu, titles, buttons…) for the current language. */
  readonly ui = computed(() => UI[this.lang()]);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    const saved = localStorage.getItem('lang');
    const browser = navigator.language?.slice(0, 2);
    const initial = [saved, browser].find((l): l is Lang => LANGS.includes(l as Lang));
    this.setLang(initial ?? 'en');
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
    if (!isPlatformBrowser(this.platformId)) return;
    this.document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }

  /** Picks the current-language version of a Localized text. */
  pick(text: Localized): string {
    return text[this.lang()];
  }
}
