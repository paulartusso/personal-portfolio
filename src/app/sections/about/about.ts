import { AfterViewInit, Component, ElementRef, OnDestroy, inject, signal, viewChildren } from '@angular/core';
import { PROFILE, SKILLS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly skills = SKILLS;
  protected readonly i18n = inject(LanguageService);
  protected readonly active = signal(0);

  private items = viewChildren<ElementRef<HTMLElement>>('skill');
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    if (typeof IntersectionObserver === 'undefined') return;
    // a skill becomes "active" while it crosses the middle band of the viewport
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(Number((entry.target as HTMLElement).dataset['index']));
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    this.items().forEach((item) => this.observer!.observe(item.nativeElement));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
