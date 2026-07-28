import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../assests/environment";
import { ContactDto, CreateContactDto } from "../models/contact.model";
import { ApiResponse } from "../models/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);

  private api = `${environment.apiUrl}/contact`;

  submit(dto: CreateContactDto) {

    return this.http.post<ApiResponse<ContactDto>>(
      this.api,
      dto
    );

  }

}