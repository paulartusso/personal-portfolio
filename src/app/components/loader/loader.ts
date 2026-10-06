import { Component, OnDestroy, OnInit, inject, output, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type Phase = 'counting' | 'cover' | 'reveal' | 'done';

const COUNT_DURATION = 2200;
const STAGGER = 80;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader implements OnInit, OnDestroy {
  /** Fires when the columns start lifting and the page underneath becomes visible. */
  readonly revealed = output<void>();

  protected readonly i18n = inject(LanguageService);
  protected readonly progress = signal(0);
  protected readonly phase = signal<Phase>('counting');
  protected readonly columns = ['amber', 'berry', 'ink', 'ash', 'ghost'];
  protected readonly stagger = STAGGER;

  private frame = 0;
  private timers: ReturnType<typeof setTimeout>[] = [];

  ngOnInit() {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / COUNT_DURATION, 1);
      // ease-in-out so the counter accelerates then settles on 100
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      this.progress.set(Math.round(eased * 100));
      if (t < 1) {
        this.frame = requestAnimationFrame(tick);
      } else {
        this.runExit();
      }
    };
    this.frame = requestAnimationFrame(tick);
  }

  private runExit() {
    const spread = STAGGER * (this.columns.length - 1);
    this.later(250, () => this.phase.set('cover'));
    this.later(250 + 700 + spread, () => {
      this.phase.set('reveal');
      this.revealed.emit();
    });
    this.later(250 + 700 + spread + 800 + spread, () => this.phase.set('done'));
  }

  private later(ms: number, fn: () => void) {
    this.timers.push(setTimeout(fn, ms));
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
    this.timers.forEach(clearTimeout);
  }
}
