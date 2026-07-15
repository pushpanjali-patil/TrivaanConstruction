export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Industrial Building',
    location: 'Chakan MIDC',
    image: '/images/projects/project1.jpg'
  },
  {
    id: 2,
    title: 'Road Construction',
    location: 'Pune',
    image: '/images/projects/project2.jpg'
  },
  {
    id: 3,
    title: 'Site Development',
    location: 'Talegaon',
    image: '/images/projects/project3.jpg'
  }
];