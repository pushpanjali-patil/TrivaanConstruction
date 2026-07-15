import { Routes } from '@angular/router';

import { PublicLayout } from './layouts/public-layout/public-layout';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Services } from './features/services/services';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Careers } from './features/careers/careers';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'services',
        component: Services
      },
      {
        path: 'projects',
        component: Projects
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'careers',
        component: Careers
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];