import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionTitle
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactFormComponent {

  private fb = inject(FormBuilder);

  services = [
    'Road Construction',
    'Building Construction',
    'RCC Structures',
    'Earthwork',
    'Infrastructure Development',
    'Drainage Works',
    'Paver Block Works',
    'Other'
  ];

  budgets = [
    'Below ₹5 Lakhs',
    '₹5 - ₹20 Lakhs',
    '₹20 - ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    'Above ₹1 Crore'
  ];

  contactForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    company: [''],
    service: ['', Validators.required],
    budget: [''],
    message: ['', Validators.required]
  });

  onSubmit(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);

    alert('Thank you! Your message has been submitted.');

    this.contactForm.reset();

  }

}