import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, Icon],
  standalone: true,
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  protected readonly profile = PROFILE;
  protected readonly links = [
    { key: 'about', href: '#about' },
    { key: 'work', href: '#work' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' },
  ] as const;

  protected readonly theme = inject(ThemeService);
  protected readonly i18n = inject(LanguageService);
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly hiddenBar = signal(false);

  private lastY = 0;

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    this.scrolled.set(y > 40);
    // hide while scrolling down, show again when scrolling up
    this.hiddenBar.set(y > 300 && y > this.lastY && !this.open());
    this.lastY = y;
  }

  toggle() {
    this.open.update((v) => !v);
  }

  close() {
    this.open.set(false);
  }
}
