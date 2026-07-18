import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceOverview } from './components/service-overview/service-overview';
import { ServiceBenefits } from './components/service-benefits/service-benefits';
import { WorkProcess } from './components/work-process/work-process';
import { RelatedProjects } from './components/related-projects/related-projects';
import { ServiceFaq } from './components/service-faq/service-faq';
import { ServiceCta } from './components/service-cta/service-cta';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { SERVICES } from '../../core/data/services';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    ServiceOverview,
    ServiceBenefits,
    WorkProcess,
    RelatedProjects,
    // ServiceFaq,
    // ServiceCta,
    PageBanner
  ],
  templateUrl: './service-details.html',
  styleUrl: './service-details.scss'
})
export class ServiceDetails {

  private route = inject(ActivatedRoute);

  service = SERVICES.find(
    x => x.slug === this.route.snapshot.paramMap.get('slug')
  );

}