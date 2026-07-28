import { Component } from '@angular/core';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { ContactSidebar } from './components/contact-sidebar/contact-sidebar/contact-sidebar';
import { PageBanner } from '../../shared/components/page-banner/page-banner';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent,ContactSidebar,PageBanner],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
