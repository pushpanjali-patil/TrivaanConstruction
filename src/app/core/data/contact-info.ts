import { ContactInfo } from '../models/contact-info.model';

export const CONTACT_INFO: ContactInfo[] = [
  {
    id: 1,
    icon: 'bi bi-geo-alt-fill',
    title: 'Office Address',
    value: 'Pune, Maharashtra',
    description: 'Visit our office for project discussions.'
  },
  {
    id: 2,
    icon: 'bi bi-telephone-fill',
    title: 'Call Us',
    value: '+91 98765 43210',
    description: 'Mon - Sat : 9:00 AM to 6:00 PM'
  },
  {
    id: 3,
    icon: 'bi bi-envelope-fill',
    title: 'Email',
    value: 'info@trivaanconstructions.com',
    description: 'We usually reply within 24 hours.'
  },
  {
    id: 4,
    icon: 'bi bi-clock-fill',
    title: 'Working Hours',
    value: 'Monday - Saturday',
    description: '09:00 AM - 06:00 PM'
  }
];