import { Component } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ContactInfoComponent } from './components/contact-info/contact-info';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { MapComponent } from './components/map/map/map';

@Component({
  selector: 'app-contact',
  imports: [PageBanner,ContactInfoComponent,ContactFormComponent,MapComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
