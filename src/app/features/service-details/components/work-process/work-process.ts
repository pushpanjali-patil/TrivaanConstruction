import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Service } from '../../../../core/models/service.model';


@Component({
  selector: 'app-work-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-process.html',
  styleUrl: './work-process.scss'
})
export class WorkProcess {

  service = input.required<Service>();

}