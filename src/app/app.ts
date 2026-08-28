import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private router: Router) {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {

        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            const loader =
              document.getElementById('initial-loader');

            if (loader) {

              loader.classList.add('loader-hidden');

              setTimeout(() => {
                loader.remove();
              }, 1000);

            }

          });

        });

      });

  }

}