import { Injectable } from "@angular/core";
import { SERVICES } from "../data/services";

@Injectable({ providedIn: 'root' })
export class ServiceDataService {

  getAll() {
    return SERVICES;
  }

  getBySlug(slug: string) {
    return SERVICES.find(x => x.slug === slug);
  }

}