import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { AboutPreview } from './components/about-preview/about-preview';
import { ServicesPreview } from './components/services-preview/services-preview';
import { ProjectsPreview } from './components/projects-preview/projects-preview';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';
import { Statistics } from './components/statistics/statistics';
import { ContactCta } from './components/contact-cta/contact-cta';
import { WorkProcess } from './components/work-process/work-process';

@Component({
  selector: 'app-home',
  imports: [Hero,
     AboutPreview,
  ServicesPreview,
  ProjectsPreview,
  WhyChooseUs,
  Statistics,
  WorkProcess,
  ContactCta
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
