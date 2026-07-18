import { Service } from '../models/service.model';

export const SERVICES: Service[] = [

  {
    id: 1,
    title: 'Road Construction',
    slug: 'road-construction',
    shortDescription: 'Construction of high-quality roads and highways.',
    description:
      'We specialize in durable road construction using modern equipment and engineering standards.',
    image: 'assets/images/services/road-construction.jpg',
    icon: 'bi bi-sign-turn-right-fill',
benefits: [
    'Experienced Engineers',
    'Modern Machinery',
    'Quality Materials',
    'On-Time Delivery',
    'Safety Compliance',
    'Competitive Pricing'
],
      features: [
    'Concrete Roads',
    'Bituminous Roads',
    'Industrial Roads',
    'Internal Layout Roads'
  ],
  process: [
    'Site Survey',
    'Road Design & Planning',
    'Earthwork & Excavation',
    'GSB / WMM Preparation',
    'Concrete / Asphalt Laying',
    'Quality Inspection & Handover'
],
  },

  {
    id: 2,
    title: 'Building Construction',
    slug: 'building-construction',
    shortDescription: 'Residential and commercial construction services.',
    description:
      'Complete building construction from foundation to finishing.',
    image: 'assets/images/services/building.jpg',
    icon: 'bi bi-building-fill',
 benefits: [
    'High Structural Strength',
    'Premium Concrete',
    'Skilled Workforce',
    'Quality Reinforcement',
    'Durability',
    'Timely Completion'
],
      features: [
    'Concrete Roads',
    'Bituminous Roads',
    'Industrial Roads',
    'Internal Layout Roads'
  ],
  process: [
    'Layout Marking',
    'Excavation',
    'Foundation',
    'Reinforcement & Shuttering',
    'Concrete Pouring',
    'Quality Check'
],
  },

  {
    id: 3,
    title: 'Earthwork',
    slug: 'earthwork',
    shortDescription: 'Excavation, cutting and filling.',
    description:
      'Professional excavation and site development using modern machinery.',
    image: 'assets/images/services/earthwork.jpg',
    icon: 'bi bi-truck-front-fill',
    benefits: [
    'Fast Excavation',
    'GPS Machine Control',
    'Accurate Leveling',
    'Skilled Operators',
    'Minimal Material Waste',
    'Reliable Equipment'
],
    features: [
      'Excavation',
      'Filling',
      'Compaction',
      'Site Development'
    ],
    process: [
    'Site Inspection',
    'Excavation',
    'Loading & Transportation',
    'Filling & Compaction',
    'Final Leveling',
    'Project Completion'
],
  }

];