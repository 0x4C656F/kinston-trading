import catalogue from './catalogue.json';

export type ProductGroup = { id?: string; title: string; productName?: string; description: string; image?: string; imageAlt?: string };
export type Brand = {
  slug: string; sector: string; sourceName: string; name: string; label: string;
  headline: string; intro: string; image: string; imageAlt: string;
  imageFit?: 'contain' | 'cover'; imageCaption?: string;
  officialUrl?: string; sourceUrl: string;
  groups: ProductGroup[]; enquiryItems: string[];
};

const medical: Brand[] = [
  {slug:'geister', sector:'medical', sourceName:'Geister', name:'Geister', label:'GERMANY · SURGICAL INSTRUMENTS',
    headline:'Precision for the operating theatre.',
    intro:'Based in Tuttlingen, Germany, Geister develops surgical instruments for cardiac, vascular, neuro and microsurgery. The range spans retractors, specialist hand instruments and modular microsurgical systems.',
    image:'/images/medical.webp', imageAlt:'Geister microsurgical scissors', imageFit:'contain', imageCaption:'GEISTER · MICROSURGICAL INSTRUMENTS',
    officialUrl:'https://www.geister.com/', sourceUrl:'https://iminstrument.com/geister/',
    groups:[
      {title:'Cardiac surgery', description:'Speroni retractors and related instrumentation for cardiac surgical access. Enquiries can specify a complete system or individual catalogue references.',image:'/images/brands/geister-speroni.webp',imageAlt:'Geister Speroni surgical retractor components'},
      {title:'Neuro & spinal instruments', description:'K-Rex rongeurs and specialist instruments for neuro and spinal surgery, with configurations selected by the clinical team.',image:'/images/brands/geister-krex.webp',imageAlt:'Geister K-Rex surgical rongeurs'},
      {title:'Microsurgery', description:'Fine scissors, needle holders and modular Structurae instruments. Dimensions and working tips are confirmed against the manufacturer’s catalogue.',image:'/images/brands/geister-micro.webp',imageAlt:'Geister Structurae microsurgical instrument range'},
    ], enquiryItems:['Manufacturer catalogue numbers','Instrument dimensions and configuration','Quantities or a complete instrument list','Delivery destination and required documentation']},
  {slug:'hadeco', sector:'medical', sourceName:'Hadeco', name:'Hadeco', label:'JAPAN · DOPPLER EQUIPMENT',
    headline:'A specialist focus on blood flow.',
    intro:'Hadeco is a Japanese manufacturer of ultrasonic Doppler equipment. Its product families include intraoperative systems, vascular diagnostic devices and portable Dopplers, with probes matched to the selected instrument.',
    image:'/images/brands/hadeco-dvm.png', imageAlt:'Hadeco DVM-4500 Doppler system with display and probes',imageFit:'contain',imageCaption:'HADECO · DVM-4500',
    officialUrl:'https://www.hadeco.co.jp/',sourceUrl:'https://iminstrument.com/hadeco-ua/',
    groups:[
      {title:'Intraoperative systems',description:'The DVM family, including DVM-4500, supports intraoperative blood-flow assessment with dedicated probes and a display unit.',image:'/images/brands/hadeco-dvm.png',imageAlt:'Hadeco DVM-4500 system'},
      {title:'Vascular diagnostics',description:'Smartdop equipment, including Smartdop 30EX, combines Doppler measurement with configurations for vascular examinations.',image:'/images/brands/hadeco-smartdop.png',imageAlt:'Hadeco Smartdop 30EX with cuff and accessories'},
      {title:'Portable Dopplers',description:'Compact Minidop and Bidop instruments offer portable Doppler options. Model, probe type and accessories should be specified together.',image:'/images/brands/hadeco-minidop.png',imageAlt:'Hadeco Minidop ES-100VX portable Doppler'},
    ],enquiryItems:['Device model and intended department','Required probe types and sizes','Accessories and quantity','Delivery destination and documentation requirements']},
  {slug:'meril',sector:'medical',sourceName:'Meril',name:'Meril',label:'INDIA · CARDIOVASCULAR DEVICES',
    headline:'A connected cardiovascular portfolio.',
    intro:'Meril Life Sciences develops medical devices in India. Our sourcing focus includes its heart-valve, coronary-stent and balloon-catheter ranges, alongside surgical sutures and associated cardiovascular products.',
    image:'/images/brands/meril-myval.png',imageAlt:'Meril Myval transcatheter heart valve',imageFit:'contain',imageCaption:'MERIL · MYVAL HEART VALVE',
    officialUrl:'https://www.merillife.com/',sourceUrl:'https://iminstrument.com/meril/',
    groups:[
      {title:'Heart valves',description:'Myval transcatheter valves and Dafodil surgical bioprostheses are distinct product families. The treating team specifies the required model and size.',image:'/images/brands/meril-myval.png',imageAlt:'Meril Myval heart valve'},
      {title:'Coronary stents',description:'The BioMime range includes coronary stent configurations. Enquiries should identify the exact product reference and dimensions.',image:'/images/brands/meril-biomime.png',imageAlt:'Meril BioMime coronary stent'},
      {title:'Balloon catheters',description:'Mozec balloon-catheter ranges form part of the vascular intervention portfolio. Configuration and sizes are confirmed for each order.',image:'/images/brands/meril-mozec.png',imageAlt:'Meril Mozec balloon catheter'},
    ],enquiryItems:['Exact product reference and size','Quantity and required delivery date','Destination market','Required manufacturer and supply documents']},
  {slug:'sinapi',sector:'medical',sourceName:'SINAPI',name:'SINAPI',label:'SOUTH AFRICA · CHEST DRAINAGE',
    headline:'Dedicated to chest drainage.',
    intro:'SINAPI Biomedical is a South African medical-device company. The LEVO chest-drainage range includes several formats for different clinical requirements, with the model and accessories specified by the healthcare team.',
    image:'/images/brands/sinapi-xl2200.webp',imageAlt:'SINAPI LEVO XL2200S chest drainage system',imageFit:'contain',imageCaption:'SINAPI · LEVO XL2200S',
    officialUrl:'https://sinapibiomedical.com/',sourceUrl:'https://iminstrument.com/sinapi/',
    groups:[
      {title:'LEVO XL2200S',description:'A chest-drainage system in the LEVO portfolio. Confirm the complete reference and required configuration when requesting supply.',image:'/images/brands/sinapi-xl2200.webp',imageAlt:'SINAPI LEVO XL2200S drainage device'},
      {title:'LEVO XL1150SCI',description:'An alternative LEVO system format. Product selection and any associated accessories follow the clinical specification.',image:'/images/brands/sinapi-xl1150.webp',imageAlt:'SINAPI LEVO XL1150SCI drainage device'},
      {title:'LEVO XS100',description:'A compact drainage format within the SINAPI range. Availability and supporting documents are reviewed for the destination market.',image:'/images/brands/sinapi-xs100.webp',imageAlt:'SINAPI LEVO XS100 compact drainage device'},
    ],enquiryItems:['LEVO model and full product reference','Order quantity and accessories','Required delivery date and destination','Supporting documentation requirements']},
];

export const brands: Brand[] = [...(catalogue as Brand[]), ...medical];
export const getSectorBrands = (sector: string) => brands.filter(b => b.sector === sector);
export const brandPath = (brand: Brand) => `/categories/${brand.sector}/${brand.slug}`;
