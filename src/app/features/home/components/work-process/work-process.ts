import { Component, signal } from '@angular/core';
import { PROCESS_STEPS } from '../../../../core/data/process';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-work-process',
  standalone:true,
  imports:[SectionTitle,RevealOnScrollDirective],
  templateUrl:'./work-process.html',
  styleUrl:'./work-process.scss'
})
export class WorkProcess {

  steps = signal(PROCESS_STEPS);

}