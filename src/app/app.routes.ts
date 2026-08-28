import { Routes } from '@angular/router';

import { PublicLayout } from './layouts/public-layout/public-layout';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

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
    path: 'test',
    component: Home
},
      {
        path: 'about',
        component: About
      },
      {
    path: 'services',
    loadComponent: () =>
        import('./features/services/services')
            .then(m => m.Services)
},
{
    path: 'services/:slug',
    loadComponent: () =>
        import('./features/service-details/service-details')
            .then(m => m.ServiceDetails)
},
      {
        path: 'projects',
        component: Projects
      },
      {
    path: 'projects/:slug',
    loadComponent: () =>
        import('./features/project-details/project-details')
            .then(m => m.ProjectDetails)
},
      {
        path: 'contact',
        component: Contact
      },
      {
    path: '**',
    loadComponent: () =>
        import('./features/not-found/not-found/not-found')
            .then(m => m.NotFound)
}
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];