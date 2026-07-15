import { Component, signal } from '@angular/core';
import { STATISTICS } from '../../../../core/data/statistics';

@Component({
  selector: 'app-statistics',
  standalone: true,
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss'
})
export class Statistics {

  statistics = signal(STATISTICS);

}