import { Service } from '../models/service.model';

export const SERVICES: Service[] = [

{
id:1,
title:'Road Construction',
icon:'bi bi-sign-turn-right-fill',
description:'Concrete roads, asphalt roads, highways and internal layout roads.',
image:'images/services/road.jpg',
route:'/services/road-construction'
},

{
id:2,
title:'Building Construction',
icon:'bi bi-building-fill',
description:'Residential, commercial and industrial construction.',
image:'images/services/building.jpg',
route:'/services/building-construction'
},

{
id:3,
title:'Earthwork & Excavation',
icon:'bi bi-truck',
description:'Excavation, filling, grading and site development.',
image:'images/services/earthwork.jpg',
route:'/services/earthwork'
},

{
id:4,
title:'RCC Structures',
icon:'bi bi-columns-gap',
description:'Columns, beams, slabs and structural concrete.',
image:'images/services/rcc.jpg',
route:'/services/rcc'
},

{
id:5,
title:'Paver Block Works',
icon:'bi bi-grid-fill',
description:'Footpaths, parking and landscape paving.',
image:'images/services/paver.jpg',
route:'/services/paver'
},

{
id:6,
title:'Drainage Works',
icon:'bi bi-water',
description:'Storm water and underground drainage systems.',
image:'images/services/drainage.jpg',
route:'/services/drainage'
}

];