import { Component, HostListener, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
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
  constructor(private router: Router) {
     this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isHomePage.set(this.router.url === '/');
    });

  this.isHomePage.set(this.router.url === '/');
  }
  isScrolled = signal(false);
  isHomePage = signal(false);

@HostListener('window:scroll')
onScroll() {
  this.isScrolled.set(window.scrollY > 50);
}
}