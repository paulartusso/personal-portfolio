import { AfterViewInit, Component, ElementRef, OnDestroy, inject, signal, viewChildren } from '@angular/core';
import { Star } from '../../components/star/star';
import { PROJECTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  imports: [Star, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit, OnDestroy {
  protected readonly projects = PROJECTS;
  protected readonly i18n = inject(LanguageService);
  protected readonly active = signal(0);

  private cards = viewChildren<ElementRef<HTMLElement>>('card');
  private observer?: IntersectionObserver;

  protected pad(n: number) {
    return String(n).padStart(2, '0');
  }

  ngAfterViewInit() {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(Number((entry.target as HTMLElement).dataset['index']));
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px' },
    );
    this.cards().forEach((card) => this.observer!.observe(card.nativeElement));
  }

  scrollTo(i: number) {
    this.cards()[i]?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
