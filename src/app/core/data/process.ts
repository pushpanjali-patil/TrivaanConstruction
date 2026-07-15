export interface ProcessStep {

  id:number;

  title:string;

  description:string;

  icon:string;

}

export const PROCESS_STEPS:ProcessStep[]=[

{
id:1,
title:'Planning',
description:'Understanding client requirements and site survey.',
icon:'📋'
},

{
id:2,
title:'Design & BOQ',
description:'Preparing drawings, estimates and execution plan.',
icon:'📐'
},

{
id:3,
title:'Execution',
description:'Construction using skilled manpower and machinery.',
icon:'🚜'
},

{
id:4,
title:'Quality Check',
description:'Ensuring every stage meets quality standards.',
icon:'✅'
},

{
id:5,
title:'Project Handover',
description:'Timely delivery with complete client satisfaction.',
icon:'🏁'
}

];