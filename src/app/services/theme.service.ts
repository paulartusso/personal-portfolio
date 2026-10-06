import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  private platformId = inject(PLATFORM_ID);
  readonly isDark = signal(false);

  initTheme() {
    if (!isPlatformBrowser(this.platformId)) return;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('theme-dark');
      this.isDark.set(true);
    }
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) return;
    const root = document.documentElement;
    root.classList.toggle('theme-dark');
    const isDark = root.classList.contains('theme-dark');
    this.isDark.set(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
