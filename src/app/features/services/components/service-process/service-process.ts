import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROCESS_STEPS } from '../../../../core/data/process';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector:'app-service-process',
  standalone:true,
  imports:[
    CommonModule,
    SectionTitle
  ],
  templateUrl:'./service-process.html',
  styleUrl:'./service-process.scss'
})
export class ServiceProcess{

  process = PROCESS_STEPS;

}