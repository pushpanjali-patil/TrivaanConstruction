import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_DATA } from '../../../core/data/footer';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  footer = signal(FOOTER_DATA);

}