import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfo } from '../../../../core/models/contact-info.model';
import { CONTACT_INFO } from '../../../../core/data/contact-info';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';


@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitle
  ],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss'
})
export class ContactInfoComponent {

  contactInfo: ContactInfo[] = CONTACT_INFO;

}

