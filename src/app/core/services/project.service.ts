import { Injectable } from "@angular/core";
import { environment } from "../../../assests/environment";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../models/api-response.model";
import { ProjectDto } from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private api = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<ProjectDto[]>>(this.api);
  }

  getBySlug(slug: string) {
    return this.http.get<ApiResponse<ProjectDto>>(
      `${this.api}/slug/${slug}`
    );
  }

  getFeatured() {
    return this.http.get<ApiResponse<ProjectDto[]>>(
      `${this.api}/featured`
    );
  }
}