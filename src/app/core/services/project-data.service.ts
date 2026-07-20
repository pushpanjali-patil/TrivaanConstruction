import { Injectable } from "@angular/core";
import { PROJECTS } from "../data/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  getAll() {
    return PROJECTS;
  }

  getBySlug(slug: string) {
    return PROJECTS.find(x => x.slug === slug);
  }

}