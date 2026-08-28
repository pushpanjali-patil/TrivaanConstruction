import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-loader',
  standalone: true,
  imports: [],
  templateUrl: './app-loader.html',
  styleUrl: './app-loader.scss'
})
export class AppLoader implements OnInit {

  loading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}