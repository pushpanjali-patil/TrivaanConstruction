export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Road Construction',
    description: 'Construction of highways, internal roads and infrastructure.',
    image: '/images/services/road.jpg'
  },
  {
    id: 2,
    title: 'RCC Structures',
    description: 'Residential, commercial and industrial RCC construction.',
    image: '/images/services/rcc.jpg'
  },
  {
    id: 3,
    title: 'Earthwork & Excavation',
    description: 'Excavation, filling, grading and site development.',
    image: '/images/services/earthwork.jpg'
  }
];