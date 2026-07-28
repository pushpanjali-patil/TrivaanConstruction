export interface ProjectDto {
  id: number;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  location: string;
  client: string;
  duration: string;
  completedOn?: string;
  coverImage: string;
  isFeatured: boolean;
  displayOrder: number;
  serviceId: number;
}