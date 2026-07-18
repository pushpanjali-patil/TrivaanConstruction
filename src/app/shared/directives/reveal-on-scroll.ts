import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {

    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.element.nativeElement, 'transform', 'translateY(40px)');
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'all 0.8s ease');

    const observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {

        this.renderer.setStyle(this.element.nativeElement, 'opacity', '1');
        this.renderer.setStyle(this.element.nativeElement, 'transform', 'translateY(0)');

        observer.unobserve(this.element.nativeElement);
      }

    }, {
      threshold: 0.2
    });

    observer.observe(this.element.nativeElement);
  }
}