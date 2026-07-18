import { Service } from '../models/service.model';

export const SERVICES: Service[] = [

//{
//   id: 1,

//   slug: 'road-construction',

//   title: 'Road Construction',

//   shortDescription: 'Professional road construction services.',

//   description: 'We build durable and high-quality roads...',

//   image: 'assets/images/services/road.jpg',

//   bannerImage: 'assets/images/banners/road.jpg',

//   icon: 'fa-solid fa-road',

//   features: [
//     'Concrete Roads',
//     'Bituminous Roads',
//     'Industrial Roads',
//     'Internal Layout Roads'
//   ],

//   benefits: [
//     'Experienced Team',
//     'Modern Equipment',
//     'Quality Materials',
//     'On-Time Delivery'
//   ],

//   process: [
//     'Survey',
//     'Planning',
//     'Excavation',
//     'GSB',
//     'Paving',
//     'Quality Inspection'
//   ]
// }
  {
    id: 1,
    title: 'Road Construction',
    slug: 'road-construction',
    shortDescription: 'Construction of roads and highways.',
    description: 'Concrete roads, asphalt roads, highways and internal layout roads.',
    image: 'images/services/road.jpg',
    icon: 'bi bi-sign-turn-right-fill',
    features: [
      'Concrete Roads',
      'Asphalt Roads',
      'Internal Roads',
      'Road Maintenance'
    ]
  },

  {
    id: 2,
    title: 'Building Construction',
    slug: 'building-construction',
    shortDescription: 'Residential, commercial and industrial construction.',
    description: 'Residential, commercial and industrial construction.',
    image: 'images/services/building.jpg',
    icon: 'bi bi-building-fill',
    features: [
      'Residential',
      'Commercial',
      'Industrial'
    ]
  },

  {
    id: 3,
    title: 'Earthwork & Excavation',
    slug: 'earthwork',
    shortDescription: 'Excavation and site development.',
    description: 'Excavation, filling, grading and site development.',
    image: 'images/services/earthwork.jpg',
    icon: 'bi bi-truck',
    features: [
      'Excavation',
      'Filling',
      'Grading',
      'Site Development'
    ]
  },

  {
    id: 4,
    title: 'RCC Structures',
    slug: 'rcc-structures',
    shortDescription: 'Reinforced concrete construction.',
    description: 'Columns, beams, slabs and structural concrete.',
    image: 'images/services/rcc.jpg',
    icon: 'bi bi-columns-gap',
    features: [
      'Columns',
      'Beams',
      'Slabs',
      'Foundations'
    ]
  },

  {
    id: 5,
    title: 'Paver Block Works',
    slug: 'paver-block-works',
    shortDescription: 'Footpaths and parking paving.',
    description: 'Footpaths, parking and landscape paving.',
    image: 'images/services/paver.jpg',
    icon: 'bi bi-grid-fill',
    features: [
      'Parking',
      'Footpaths',
      'Landscape',
      'Walkways'
    ]
  },

  {
    id: 6,
    title: 'Drainage Works',
    slug: 'drainage-works',
    shortDescription: 'Storm water drainage systems.',
    description: 'Storm water and underground drainage systems.',
    image: 'images/services/drainage.jpg',
    icon: 'bi bi-water',
    features: [
      'Storm Water',
      'Underground Drainage',
      'RCC Drains',
      'Pipe Laying'
    ]
  }

];