import { Component } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { CompanyStory } from './components/company-story/company-story';
import { MissionVision } from './components/mission-vision/mission-vision';
import { CoreValues } from './components/core-values/core-values';
import { WhyChoose } from './components/why-choose/why-choose';
import { CompanyStatistics } from './components/company-statistics/company-statistics';
import { AboutCta } from './components/about-cta/about-cta';

@Component({
  selector: 'app-about',
  imports: [PageBanner,CompanyStory,MissionVision,CoreValues,WhyChoose,CompanyStatistics,AboutCta],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
