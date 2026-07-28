import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-sidebar',
  imports: [],
  templateUrl: './contact-sidebar.html',
  styleUrl: './contact-sidebar.scss',
})
export class ContactSidebar {
  private sanitizer = inject(DomSanitizer);

  mapUrl: SafeResourceUrl;

  constructor() {

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?q=Pune,Maharashtra&output=embed'
    );

  }
}
