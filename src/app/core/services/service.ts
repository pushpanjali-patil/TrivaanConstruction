import { Injectable } from '@angular/core';
import { SERVICES } from '../data/services';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getAll() {

    return SERVICES;

  }

  getBySlug(slug: string) {

    return SERVICES.find(x => x.slug === slug);

  }

}