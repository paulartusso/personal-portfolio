import { Component, inject } from '@angular/core';
import { Icon } from '../../components/icon/icon';
import { PROFILE, SOCIALS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;
  protected readonly i18n = inject(LanguageService);
  protected readonly year = new Date().getFullYear();
}
