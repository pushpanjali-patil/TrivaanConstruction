import { Component } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ServicesGrid } from './components/services-grid/services-grid';
import { ServiceProcess } from './components/service-process/service-process';
import { Industries } from './components/industries/industries';
import { Faq } from './components/faq/faq';
import { ServicesCta } from './components/services-cta/services-cta';

@Component({
  selector: 'app-services',
  imports: [PageBanner,ServicesGrid,ServiceProcess,Industries,Faq,ServicesCta],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

}
