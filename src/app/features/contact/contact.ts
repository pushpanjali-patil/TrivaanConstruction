import { Component } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ContactInfoComponent } from './components/contact-info/contact-info';
import { ContactFormComponent } from './components/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [PageBanner,ContactInfoComponent,ContactFormComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
