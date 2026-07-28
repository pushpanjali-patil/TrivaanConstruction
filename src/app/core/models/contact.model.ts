export interface CreateContactDto {

  name: string;

  email: string;

  phone: string;

  companyName: string;

  serviceRequired: string;

  estimatedBudget: string;

  message: string;

}

export interface ContactDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdOn: string;
}