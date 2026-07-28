import { Injectable } from "@angular/core";
import { environment } from "../../../assests/environment";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../models/api-response.model";
import { ServiceDto } from "../models/service.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private api = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<ServiceDto[]>>(this.api);
  }

  getBySlug(slug: string) {
    return this.http.get<ApiResponse<ServiceDto>>(
      `${this.api}/slug/${slug}`
    );
  }
}