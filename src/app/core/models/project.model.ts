export interface Project {

  id: number;

  slug: string;

  title: string;

  category: string;        // Matches service.slug

  shortDescription: string;

  description: string;

  location: string;

  client: string;

  duration: string;

  completedOn: string;

  image: string;

  gallery: string[];

  serviceSlug: string;     // Related service

}