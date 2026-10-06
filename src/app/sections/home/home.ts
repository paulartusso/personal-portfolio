import { Component, inject, input, signal } from '@angular/core';
import { LanguageSwitcher } from '../../components/language-switcher/language-switcher';
import { PROFILE } from '../../data/portfolio.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [LanguageSwitcher],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: {
    '(pointermove)': 'onPointer($event)',
  },
})
export class Home {
  /** Starts the intro animation once the loader has lifted. */
  readonly ready = input(false);

  protected readonly profile = PROFILE;
  protected readonly i18n = inject(LanguageService);
  protected readonly tilt = signal({ x: 0, y: 0 });

  onPointer(e: PointerEvent) {
    // -1..1 from the viewport centre, used for a light parallax on the name
    this.tilt.set({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }
}
