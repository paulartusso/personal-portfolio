import { Component, ElementRef, OnDestroy, OnInit, inject, signal, viewChild } from '@angular/core';

/** Dot + trailing ring cursor. Only active on devices with a precise pointer. */
@Component({
  selector: 'app-cursor',
  template: `
    @if (enabled()) {
      <div #ring class="ring" [class.ring--hover]="hovering()" [class.ring--hidden]="hidden()"></div>
      <div #dot class="dot" [class.ring--hidden]="hidden()"></div>
    }
  `,
  styles: `
    .ring,
    .dot {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      pointer-events: none;
      border-radius: 50%;
      translate: -50% -50%;
      transition: opacity 0.3s ease;
    }
    .dot {
      width: 8px;
      height: 8px;
      background: var(--highlight-color);
    }
    .ring {
      width: 40px;
      height: 40px;
      border: 1px solid var(--muted);
      transition: width 0.35s var(--ease-out), height 0.35s var(--ease-out),
        background-color 0.35s ease, border-color 0.35s ease, opacity 0.3s ease;
    }
    .ring--hover {
      width: 72px;
      height: 72px;
      border-color: transparent;
      background: color-mix(in srgb, var(--accent-color) 30%, transparent);
    }
    .ring--hidden {
      opacity: 0;
    }
  `,
})
export class Cursor implements OnInit, OnDestroy {
  protected readonly enabled = signal(false);
  protected readonly hovering = signal(false);
  protected readonly hidden = signal(true);

  private ring = viewChild<ElementRef<HTMLElement>>('ring');
  private dot = viewChild<ElementRef<HTMLElement>>('dot');
  private doc = inject(ElementRef).nativeElement.ownerDocument as Document;

  private mouse = { x: 0, y: 0 };
  private ringPos = { x: 0, y: 0 };
  private frame = 0;

  private onMove = (e: PointerEvent) => {
    this.mouse = { x: e.clientX, y: e.clientY };
    this.hidden.set(false);
    const target = e.target as Element | null;
    this.hovering.set(!!target?.closest('a, button, [data-cursor="hover"]'));
  };
  private onLeave = () => this.hidden.set(true);

  ngOnInit() {
    if (typeof window.matchMedia !== 'function') return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    this.enabled.set(true);
    this.doc.body.classList.add('has-cursor');
    this.doc.addEventListener('pointermove', this.onMove);
    this.doc.documentElement.addEventListener('pointerleave', this.onLeave);

    const loop = () => {
      // ring trails the pointer, dot sticks to it
      this.ringPos.x += (this.mouse.x - this.ringPos.x) * 0.18;
      this.ringPos.y += (this.mouse.y - this.ringPos.y) * 0.18;
      const ring = this.ring()?.nativeElement;
      const dot = this.dot()?.nativeElement;
      if (ring) ring.style.transform = `translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0)`;
      if (dot) dot.style.transform = `translate3d(${this.mouse.x}px, ${this.mouse.y}px, 0)`;
      this.frame = requestAnimationFrame(loop);
    };
    this.frame = requestAnimationFrame(loop);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
    this.doc.body.classList.remove('has-cursor');
    this.doc.removeEventListener('pointermove', this.onMove);
    this.doc.documentElement.removeEventListener('pointerleave', this.onLeave);
  }
}
