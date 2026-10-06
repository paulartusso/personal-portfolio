import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cursor } from './components/cursor/cursor';
import { Loader } from './components/loader/loader';
import { Menu } from './components/menu/menu';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Home } from './sections/home/home';
import { Projects } from './sections/projects/projects';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader, Cursor, Menu, Home, About, Projects, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly ready = signal(false);
  private themeService = inject(ThemeService);
  private document = inject(DOCUMENT);

  constructor() {
    this.themeService.initTheme();
  }

  onRevealed() {
    this.ready.set(true);
    this.document.body.classList.remove('is-loading');
  }
}
