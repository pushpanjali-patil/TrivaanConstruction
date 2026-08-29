import {
  Component,
  HostListener,
  signal,
  ElementRef,
  Renderer2
} from '@angular/core';

import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  isScrolled = signal(false);

  isHomePage = signal(false);

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {

        this.isHomePage.set(
          this.router.url === '/'
        );

        this.closeMenu();

      });

    this.isHomePage.set(
      this.router.url === '/'
    );
  }


  @HostListener('window:scroll')
  onScroll() {

    this.isScrolled.set(
      window.scrollY > 50
    );

  }


  closeMenu(): void {

    const navbarMenu =
      this.elementRef.nativeElement
        .querySelector('#navbarMenu');

    const navbarToggler =
      this.elementRef.nativeElement
        .querySelector('.navbar-toggler');


    if (!navbarMenu) {
      return;
    }


    this.renderer.removeClass(
      navbarMenu,
      'show'
    );


    if (navbarToggler) {

      this.renderer.setAttribute(
        navbarToggler,
        'aria-expanded',
        'false'
      );

      this.renderer.addClass(
        navbarToggler,
        'collapsed'
      );

    }

  }

}