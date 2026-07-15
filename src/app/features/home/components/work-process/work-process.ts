import { Component, signal } from '@angular/core';
import { PROCESS_STEPS } from '../../../../core/data/process';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-work-process',
  standalone:true,
  imports:[SectionTitle],
  templateUrl:'./work-process.html',
  styleUrl:'./work-process.scss'
})
export class WorkProcess {

  steps = signal(PROCESS_STEPS);

}