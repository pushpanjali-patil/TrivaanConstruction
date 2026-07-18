import { Component } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ContactInfoComponent } from './components/contact-info/contact-info';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { MapComponent } from './components/map/map/map';
import { ContactCta } from '../home/components/contact-cta/contact-cta';
import { FaqComponent } from './components/faq/faq/faq';
import { BusinessHoursComponent } from './components/business-hours/business-hours/business-hours';

@Component({
  selector: 'app-contact',
  imports: [PageBanner,ContactInfoComponent,ContactFormComponent,MapComponent,ContactCta,FaqComponent,BusinessHoursComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
