export interface Service {

  id:number;

  slug:string;

  title:string;

  shortDescription:string;

  description:string;

  image:string;

  bannerImage?:string;

  icon:string;
  features: string[];
  benefits?:string[];

  process?:string[];

}