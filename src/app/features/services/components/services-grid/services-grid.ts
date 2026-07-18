import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../../../core/data/services';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector:'app-services-grid',
  standalone:true,
  imports:[
    CommonModule,
    RouterLink,
    SectionTitle
  ],
  templateUrl:'./services-grid.html',
  styleUrl:'./services-grid.scss'
})
export class ServicesGrid{

  services = SERVICES;

}