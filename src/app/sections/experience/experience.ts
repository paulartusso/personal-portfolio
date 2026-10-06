import { Component, inject } from '@angular/core';
import { Star } from '../../components/star/star';
import { EXPERIENCE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  imports: [Star, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly jobs = EXPERIENCE;
  protected readonly i18n = inject(LanguageService);
}
