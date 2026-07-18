import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../shared/components/navbar/navbar';
import { WhatsappFloat } from '../../shared/components/whatsapp-float/whatsapp-float';
import { ScrollTop } from '../../shared/components/scroll-top/scroll-top';
import { Footer} from '../../shared/components/footer/footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    ScrollTop,
    WhatsappFloat,
    Footer
  ],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {}