import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CreateContactDto } from '../../../../core/models/contact.model';
import { ContactService } from '../../../../core/services/contact.service';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactFormComponent {

  constructor(private contactService:ContactService)
  {

  }
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

  const dto: CreateContactDto = {

    name: this.contactForm.value.fullName!,

    email: this.contactForm.value.email!,

    phone: this.contactForm.value.phone!,

    companyName: this.contactForm.value.company!,

    serviceRequired: this.contactForm.value.service!,

    estimatedBudget: this.contactForm.value.budget!,

    message: this.contactForm.value.message!

  };

  this.contactService.submit(dto).subscribe({

    next: () => {

      alert('Thank you! Your enquiry has been submitted.');

      this.contactForm.reset();

    },

    error: (err) => {

      console.error(err);

      alert('Unable to submit enquiry.');

    }

  });

}

}