export type Product = {
  name: string;
  slug: string;
  desc: string;
  fullDesc: string;
  items: string[];
  img: string;
};

export const products: Product[] = [
  {
    name: 'Industrial Gases',
    slug: 'industrial-gases',
    desc: 'High-purity industrial gases for manufacturing, welding, cutting, and processing applications.',
    fullDesc: 'Daftari Industries is a leading supplier of high-purity industrial gases. Our industrial gas solutions are essential for a variety of applications including metal fabrication, chemical processing, electronics manufacturing, and food packaging. We ensure a consistent and reliable supply chain tailored to your operational needs.',
    items: ['Oxygen (O₂)', 'Nitrogen (N₂)', 'Argon (Ar)', 'Carbon Dioxide (CO₂)', 'Acetylene', 'Helium', 'Hydrogen'],
    img: '/images/hero_industrial_plant.png',
  },
  {
    name: 'Medical Gases',
    slug: 'medical-gases',
    desc: 'Pharmacopoeia-grade medical gases supplied in cylinders and bulk systems for healthcare facilities.',
    fullDesc: 'We provide life-saving pharmacopoeia-grade medical gases designed to meet the strict quality standards of the healthcare sector. From hospitals and clinics to research laboratories, our medical gases are manufactured and distributed with the highest levels of safety and traceability.',
    items: ['Medical Oxygen', 'Medical Air', 'Nitrous Oxide', 'Calibration Gases', 'Anesthesia Gases'],
    img: '/images/medical_oxygen.png',
  },
  {
    name: 'Cryogenic Liquids',
    slug: 'cryogenic-liquids',
    desc: 'Bulk cryogenic liquids supplied via ISO tanks, cryogenic tankers, and cylinder refill services.',
    fullDesc: 'Our cryogenic liquid solutions cater to industries requiring ultra-low temperatures and high-volume gas supply. Supplied via specialized cryogenic tankers and ISO tanks, our liquids guarantee maximum purity, enabling efficient cooling, freezing, and specialized chemical processes.',
    items: ['Liquid Nitrogen (LIN)', 'Liquid Oxygen (LOX)', 'Liquid Argon (LAR)', 'Liquid CO₂ (LCO₂)', 'LN₂ Dewars'],
    img: '/images/gas_cylinders.png',
  },
  {
    name: 'Hydrogen & Green Hydrogen',
    slug: 'hydrogen',
    desc: 'Industrial hydrogen for refining and petrochemical applications, and green hydrogen for clean energy.',
    fullDesc: 'As the world transitions to clean energy, Daftari Industries is at the forefront of hydrogen technology. We supply industrial-grade hydrogen for refining and petrochemicals, as well as green hydrogen solutions designed to fuel the zero-emission economy of the future.',
    items: ['Industrial Hydrogen', 'Green Hydrogen', 'Hydrogen Cylinders', 'Bulk Hydrogen Supply', 'H₂ for Fuel Cells'],
    img: '/images/pipeline_infrastructure.png',
  },
  {
    name: 'LPG & LNG',
    slug: 'lpg-lng',
    desc: 'Liquefied Petroleum Gas and Liquefied Natural Gas systems for industrial and commercial use.',
    fullDesc: 'Our LPG and LNG offerings provide efficient, high-energy fuel solutions for industrial heating, commercial kitchens, and large-scale manufacturing plants. We design and install comprehensive storage and dispensing infrastructure to guarantee a steady, safe fuel supply.',
    items: ['LPG Storage Tanks', 'LPG Dispensing', 'LNG Systems', 'Propane', 'Butane'],
    img: '/images/pipeline_infrastructure.png',
  },
  {
    name: 'Fire Fighting Gases',
    slug: 'fire-fighting-gases',
    desc: 'Clean agent fire suppression gases for data centers, electrical rooms, and industrial facilities.',
    fullDesc: 'Protect your critical infrastructure with our advanced clean agent fire suppression gases. Designed to extinguish fires quickly without damaging sensitive electronic equipment or leaving harmful residue, our solutions are ideal for data centers, server rooms, and control centers.',
    items: ['FM-200 (HFC-227ea)', 'Novec 1230', 'CO₂ Fire Systems', 'Inergen', 'Dry Chemical Systems'],
    img: '/images/pipeline_infrastructure.png',
  },
  {
    name: 'Specialty & Calibration Gases',
    slug: 'specialty-gases',
    desc: 'Ultra-high purity gases for analytical, semiconductor, and calibration applications.',
    fullDesc: 'Precision is key in analytical and laboratory environments. Our specialty and calibration gases are manufactured to exact tolerances, ensuring reliable baseline measurements for environmental monitoring, petrochemical analysis, and semiconductor fabrication.',
    items: ['Calibration Gases', 'Semiconductor Gases', 'Carrier Gases', 'Detector Gases', 'Custom Blends'],
    img: '/images/hero_industrial_plant.png',
  },
  {
    name: 'Gas Mixtures',
    slug: 'gas-mixtures',
    desc: 'Custom-blended gas mixtures designed for specific industrial and analytical applications.',
    fullDesc: 'We offer custom-engineered gas mixtures formulated precisely to your unique specifications. Whether you require specific atmospheric blends for food packaging or highly accurate mixtures for complex welding operations, our expert engineers can deliver exactly what you need.',
    items: ['Analytical Gas Mixtures', 'Process Gas Mixtures', 'Calibration Blends', 'Custom Ratios'],
    img: '/images/cryogenic_tank.png',
  },
];
