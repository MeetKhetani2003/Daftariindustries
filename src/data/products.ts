export interface Product {
  id: string;
  title: string;
  slug: string;
  shortDesc?: string;
  desc: string;
  mainImg: string;
  category: string;
  details: string[];
  gallery?: string[];
}

export const products: Product[] = [
  {
    "id": "cryogenic-storage-tank",
    "slug": "cryogenic-storage-tank",
    "title": "Cryogenic Storage Tank",
    "desc": "LIN, LOX, LAR, LNG, LH2, LCO2 & LN2O Dual Vessel Vacuum + Perlite & Vacuum + Multilayer Insulated Storage Tank Designed for Storing Cryogenic Liquid @ -196° C EN13458-2, ASME, PED and Other International Codes CE Marking & U Stamp offered on request",
    "category": "Cryogenics",
    "mainImg": "/images/products/cryogenic-storage-tank/image_1.jpg",
    "gallery": [
      "/images/products/cryogenic-storage-tank/image_2.png",
      "/images/products/cryogenic-storage-tank/image_3.png",
      "/images/products/cryogenic-storage-tank/image_4.png",
      "/images/products/cryogenic-storage-tank/image_5.png",
      "/images/products/cryogenic-storage-tank/image_6.jpg"
    ],
    "details": [
      "We Offer Cryogenic storage tanks for industrial gas/air gas application in vertical/horizontal orientation  in cold convertor as well as thermo siphon tank",
      "Ergonomic designed piping layout for ease of access, operation and maintenance.",
      "Vacuum + perlite insulated or vacuum + multilayer insulated cryogenic storage tank are dual vessel designed for efficient storage and handling of cryogenic liquid",
      "Austenitic stainless steel inner vessel and piping with carbon steel outer vessel.",
      "Long – lasting high quality surface finish and paint.",
      "Common configuration foundation from 6 kl to 21kl storage tank."
    ]
  },
  {
    "id": "cryogenic-microbulk-storage-tank",
    "slug": "cryogenic-microbulk-storage-tank",
    "title": "Cryogenic Microbulk Storage Tank",
    "desc": "Kryo One, Kryo Three & Kryo Five EN13458-2, ASME Sec VIII Div I Vertical & Horizontal",
    "category": "Equipment",
    "mainImg": "/images/products/cryogenic-microbulk-storage-tank/image_1.jpg",
    "gallery": [
      "/images/products/cryogenic-microbulk-storage-tank/image_2.jpg",
      "/images/products/cryogenic-microbulk-storage-tank/image_3.png",
      "/images/products/cryogenic-microbulk-storage-tank/image_4.jpg"
    ],
    "details": [
      "Our 1KL (“KRYO ONE”), 3KL (“KRYO THREE”) & 5KL (“KRYO FIVE”) are Quick Responsive Product and Easy to Handle.",
      "They comes with Inbuilt Vaporizer of 50NM3/Hr & 100 Nm3/Hr Capacity for Easy Operation. This Comes with Full Frame Work to Protect the Vessel."
    ]
  },
  {
    "id": "cryogenic-transport-tank",
    "slug": "cryogenic-transport-tank",
    "title": "Cryogenic Transport Tank",
    "desc": "Dual Vessel Vacuum + Multilayer Insulated Cryogenic Transport Tank Designed for transportation of Cryogenic Liquid @ -196° C 4.7KL to 36KL (Also Customer Specific Design) EN13458-2, ASME, PED and Other International Codes CE Marking & U Stamp offered on request",
    "category": "Cryogenics",
    "mainImg": "/images/products/cryogenic-transport-tank/image_1.jpg",
    "gallery": [
      "/images/products/cryogenic-transport-tank/image_2.jpg",
      "/images/products/cryogenic-transport-tank/image_3.jpg",
      "/images/products/cryogenic-transport-tank/image_4.jpg",
      "/images/products/cryogenic-transport-tank/image_5.jpg",
      "/images/products/cryogenic-transport-tank/image_6.jpg"
    ],
    "details": [
      "Cryogenic transport tanks (fix chassis)/ cryogenic semi trailers for industrial gas/air gas.",
      "Multi-layer vacuum insulated cryogenic transport tankers designed for safe, efficient & economical transportation over short to long distances.",
      "Such cryogenic tankers are optimized for mounting on fixed chassis/ semi trailers trucks which helps in higher payload optimization as per vehicle model available.",
      "Light weight and strong design for higher stability as well as high vacuum for better pressure holding",
      "Rugged and ergonomic rear operational valve cabinet.",
      "High vacuum for better pressure holding.",
      "Ss valve cabinet and storage box for hose."
    ]
  },
  {
    "id": "pressure-reducing-station-skids",
    "slug": "pressure-reducing-station-skids",
    "title": "Pressure Reducing Station Skids",
    "desc": "PRS/Gas trains consists of, Ball valves: this isolates the system from main supply or isolates the either side of PRS & is also used and Drain Valves to release the pressure as and when required. Slam shut off Valve: Slam shut off valves is installed before pressure regulator. Slam shut off valve close the supply of gas when a downstream pressure exceeds a pre-determined limit.",
    "category": "Equipment",
    "mainImg": "/images/products/pressure-reducing-station-skids/image_1.jpg",
    "gallery": [],
    "details": [
      "Creep relief Valve: A slight weeping of pressure regulator/ increase in downstream due to rise in downstream surrounding temperature result in increasing the downstream pressure to dangerous level, such creep pressure is blown off through creep relief valve.",
      "Safety Relief Valve: The safety relief valve set at higher pressure than slam shut off valve so that the safety relief valve will operate when slam shut off valve fails to operate."
    ]
  },
  {
    "id": "puff-insulated-lco2-storage-transport-tank",
    "slug": "puff-insulated-lco2-storage-transport-tank",
    "title": "LCO2 Storage Tank",
    "desc": "Range: From 7KL to 30KL We are the pioneers in the field of fabrication of liquid Carbon di-oxide mobile tankers.Our Tankers stand as the epitome of quality, service and stability. Our rugged design & high payload gives maximum efficiency to our customer.Today, we stand as the market leader in making the best quality mobile tanks for Liquid Carbon di-oxide in the country",
    "category": "Industrial Gas",
    "mainImg": "/images/products/puff-insulated-lco2-storage-transport-tank/image_1.png",
    "gallery": [
      "/images/products/puff-insulated-lco2-storage-transport-tank/image_2.png",
      "/images/products/puff-insulated-lco2-storage-transport-tank/image_3.jpg",
      "/images/products/puff-insulated-lco2-storage-transport-tank/image_4.jpg",
      "/images/products/puff-insulated-lco2-storage-transport-tank/image_5.jpg"
    ],
    "details": []
  },
  {
    "id": "anhydrous-ammonia-tank",
    "slug": "anhydrous-ammonia-tank",
    "title": "Anhydrous Ammonia Tank",
    "desc": "Design Code: ASME Sec VIII Div. I, IS2825MAWP: 22.913 Kg/cm2MOC: Carbon Steel (SA516 GR. 70) Inspection by Bureau Veritas Design Code:  ASME Sec VIII Div. I /II, IS 2825,ENMAWP: 22.913 Kg/cm2MOC: Carbon Steel (SA516 GR. 70) Our Ammonia Semi trailer tankers are suitable for various countries. We have models with inbuilt pump for loading and unloading facility.",
    "category": "Equipment",
    "mainImg": "/images/products/anhydrous-ammonia-tank/image_1.jpg",
    "gallery": [
      "/images/products/anhydrous-ammonia-tank/image_2.jpg"
    ],
    "details": []
  },
  {
    "id": "ambient-air-heated-vaporizer",
    "slug": "ambient-air-heated-vaporizer",
    "title": "Ambient Air Heated Vaporizer",
    "desc": "Aluminium Extruded Fin Star Type Ambient Air Heated Vaporizer are used to Vaporizer the Cryogenic & Non-Cryogenic Liquid in to gaseous form without giving any External Energy. Cryogenic liquid are produced at liquefaction plants and transported to end customers. This liquid are then vaporizer/Re-gased for different industrial and commercial application. In Warmer countries ambient heat is available 24 X 365 Days. This Free Energy is used for Vaporization therefore it is also called as Natural Draft Cryogenic Vaporizer. The Design Temperature is -196°C to +50°C. As aluminium is good conductor to heat and temperature so we used it for vaporization. Aluminium 6061 T6 and 6063 T5 are used for material of construction to manufacture a vaporizer. Moreover this comes with no external energy on it works with ambient temperature and in Vertical & Horizontal orientation with and without frame. This Vaporizers are easy to use and Ambient Air Heated Vaporizers ae of Two Types as below.",
    "category": "Equipment",
    "mainImg": "/images/products/ambient-air-heated-vaporizer/image_1.jpg",
    "gallery": [
      "/images/products/ambient-air-heated-vaporizer/image_2.jpg",
      "/images/products/ambient-air-heated-vaporizer/image_3.jpg",
      "/images/products/ambient-air-heated-vaporizer/image_4.png"
    ],
    "details": [
      "Low Pressure Vaporizer Range up to 90 Kg/Cm2 with aluminium bends welded with the aluminium star fins to provide the out pressure.",
      "Capacity of the Vaporizer is 50 Nm3/hr to 5000 Nm3/Hr. and above that we can used by putting bank of Vaporizer.",
      "Operating Fluids LIN, LOX, LAR, LCO2, LH2, LHe & LNG and many more cryogenic and non-cryogenic liquids.",
      "Design Codes ASME, USTAMP",
      "FIN modulation 8 fin and 12 fin are precisely placed in different heated zones for maximised modular Vaporization.",
      "Frame Construction for Big Vaporizer above 800 Nm3/Hr will be aluminium alloy 6061 T6, SS 304, SS316 and CS on Request.",
      "Bank of Vaporizer are kept to use in series or parallel for higher flow and more duty cycle.",
      "High Pressure Vaporizer Range from 150 Kg/Cm2 up to 400 Kg/Cm2 with SS/CU bends expanded with aluminium star fins to provide the output also known as SS/CU Lined Vaporizer.",
      "Capacity of the Vaporizer is 100 Nm3/Hr. to 1000 Nm3/Hr. and above on request.",
      "Operating Fluids LIN, LOX, LAR, LCO2, LH2, LHe & LNG and many more cryogenic liquids."
    ]
  },
  {
    "id": "lmo-medical-installation",
    "slug": "lmo-medical-installation",
    "title": "Lmo Medical Installation",
    "desc": "We also offer PESO Consultancy for medical installation and MGPS in INDIA. We are well known name for installation, erection and commissioning for medical oxygen equipment and pipeline.",
    "category": "Equipment",
    "mainImg": "/images/products/lmo-medical-installation/image_1.png",
    "gallery": [
      "/images/products/lmo-medical-installation/image_2.jpg"
    ],
    "details": [
      "LMO installation for Medical oxygen tank with vaporizer and pressure reducing station for icu beds and normal beds.",
      "This installation includes a (A) cryogenic storage tank for medical oxygen this tank is connected with (B) ambient air heated vaporizer low pressure for liquid to gas evaporation also known as cryogenic natural draft evaporator.",
      "The cryogenic medical oxygen liquid is evaporated by vaporizer then connected to a (C) pressure reducing station for low pressure the oxygen gas which is supplied to the ICU beds/normal beds through (D) medical gas pipeline system (MGPS)."
    ]
  },
  {
    "id": "lpg-propane-eo-storage-transport-tank",
    "slug": "lpg-propane-eo-storage-transport-tank",
    "title": "Lpg Propane Eo Storage Transport Tank",
    "desc": "Capacity: 10KL to 250 KL Design Pressure: 14.5/17 Bar Code: ASME Sec. VIII Div. I/II, Pd5500, SMPV(U) 1981 + OISD 150",
    "category": "Industrial Gas",
    "mainImg": "/images/products/lpg-propane-eo-storage-transport-tank/image_1.png",
    "gallery": [
      "/images/products/lpg-propane-eo-storage-transport-tank/image_2.png",
      "/images/products/lpg-propane-eo-storage-transport-tank/image_3.png",
      "/images/products/lpg-propane-eo-storage-transport-tank/image_4.png",
      "/images/products/lpg-propane-eo-storage-transport-tank/image_5.png",
      "/images/products/lpg-propane-eo-storage-transport-tank/image_6.png",
      "/images/products/lpg-propane-eo-storage-transport-tank/image_7.jpg"
    ],
    "details": []
  },
  {
    "id": "cryogenic-cylinder-filling-station",
    "slug": "cryogenic-cylinder-filling-station",
    "title": "Cryogenic Cylinder Filling Station",
    "desc": "We specialize in complete set up of air gas cylinder filling station and it’s inter connecting pipeline. We provide turnkey project of cylinder filling station from engineering, manufacturing, supply, installation and commissioning of the equipment with the whole process of PESO (PETROLEUM & EXPLOSIVE SAFETY ORGANIZATION).",
    "category": "Cryogenics",
    "mainImg": "/images/products/cryogenic-cylinder-filling-station/image_1.jpg",
    "gallery": [
      "/images/products/cryogenic-cylinder-filling-station/image_2.jpg"
    ],
    "details": [
      "This complete set up requires a (A) cryogenic storage tank with thermosiphon port. This thermosiphon port connects to a (B) reciprocating high pressure cryogenic pump which delivers the liquid at high pressure with high flow.",
      "The cryogenic pump is connected to (C) ss lined ambient air heated vaporizer also known as high pressure natural draft evaporator for high pressure liquid to gas evaporation. After converting the cryogenic liquid to gas through vaporizer it is connected to (D) manifold system for cylinder filling with control panel."
    ]
  },
  {
    "id": "cryogenic-semi-trailers",
    "slug": "cryogenic-semi-trailers",
    "title": "Cryogenic Semi Trailers",
    "desc": "2.Construction: They are constructed with highly insulated materials to maintain the extremely low temperatures required for the liquids they carry. This typically involves multi-layered insulation systems, often using materials like perlite or vacuum-insulated panels. 3.Tank Design: The trailers feature double-walled tanks with an inner vessel (Stainless Steel) for holding the cryogenic liquid and an outer vessel (Carbon Steel) for insulation and protection with operation box. 4.Safety Features: Cryogenic semi-trailers are equipped with safety features such as pressure relief valves, emergency shut-off valves, and overfill protection systems to ensure safe transport and handling of the volatile liquids.",
    "category": "Cryogenics",
    "mainImg": "/images/products/cryogenic-semi-trailers/image_1.jpg",
    "gallery": [],
    "details": []
  },
  {
    "id": "ff952b07-25df-486f-820a-8f84b4a56320",
    "title": "Speciality Gases",
    "slug": "speciality-gases",
    "shortDesc": "RK Group’s Speciality Gas range consists of uLa-high-purity gases used  for metal testing, instrumen...",
    "desc": "RK Group’s Speciality Gas range consists of uLa-high-purity gases used  for metal testing, instrument calibration, process control etc. We supply  to analytical, pharmaceutical, gas detection, chemical, metal and  petrochemical to name but a few. This combined with our applications  engineering experience means that we are a supplier of choice for large multinationals to independent organisations.",
    "mainImg": "/images/products/speciality-gases/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/speciality-gases/main.png"
    ]
  },
  {
    "id": "2a4b43e6-6ac2-43c8-b795-9be6067971cf",
    "title": "Refrigerant Gases",
    "slug": "refrigerant-gases",
    "shortDesc": "Refrigerant gases are chemical com-pounds used in cooling systems to absorb heat from one area and r...",
    "desc": "Refrigerant gases are chemical com-pounds used in cooling systems to absorb heat from one area and release it in another, making them essential for refrigerators, air conditioners, and indus-trial cooling. We deal in the following refrigerant gases:",
    "mainImg": "/images/products/refrigerant-gases/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/refrigerant-gases/main.png"
    ]
  },
  {
    "id": "a865d8fb-1e72-4e53-a2d0-01c7fda4248b",
    "title": "Anhydrous Ammonia",
    "slug": "anhydrous-ammonia",
    "shortDesc": "Many industries use versatile gas ammonia (NH3), including agriculture, refrigeration, and chemical ...",
    "desc": "Many industries use versatile gas ammonia (NH3), including agriculture, refrigeration, and chemical manufacturing, because of its unique properties. Ammonia is also commonly used in metal processing for heat treatment processeslike nitriding and bright annealing, as a reducing agent in green steel production by breaking down into hydrogen, and in selective metal extraction (leaching) of metals like nickel and cobalt. It also serves as a protective atmosphere for brazing, sintering, and glass-to-metal seals.",
    "mainImg": "/images/products/anhydrous-ammonia/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/anhydrous-ammonia/main.png"
    ]
  },
  {
    "id": "d8a8fd15-1419-43f2-9c45-c6d53578ca4b",
    "title": "Green Hydrogen",
    "slug": "green-hydrogen",
    "shortDesc": "We are delighted to ofer reliable, industrial-grade green hydrogen, a clean, future-ready energy sol...",
    "desc": "We are delighted to ofer reliable, industrial-grade green hydrogen, a clean, future-ready energy solution \nthat supports your decarbonization goals. Our hydrogen is produced by electrolysis powered exclusively \nby renewable electricity, ensuring there are no CO2 emissions across the production chain. As a truly \ncarbon-neutral fuel, it opens the door to a major reduction of greenhouse-gas output for industries that \ntoday rely heavily on fossil-derived hydrogen or fossil fuels.",
    "mainImg": "/images/products/green-hydrogen/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/green-hydrogen/main.png"
    ]
  },
  {
    "id": "568eeae4-8027-4171-a45e-bc2dd0a4eab1",
    "title": "SCBA",
    "slug": "scba",
    "shortDesc": "The Self-Contained Breathing Apparatus (SCBA) is an independent respiratory protection device that s...",
    "desc": "The Self-Contained Breathing Apparatus (SCBA) is an independent respiratory protection device that supplies breathable air in an environment with deficient oxygen contents, smoke, dangerous gases, and other atmospheric pollutants that would otherwise pose a severe threat.",
    "mainImg": "/images/products/scba/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/scba/main.png"
    ]
  },
  {
    "id": "aaebb72c-5405-43a8-8844-e8eb844e346b",
    "title": "Carbon Dioxide",
    "slug": "carbon-dioxide",
    "shortDesc": "Carbon Dioxide (CO2) is a versatile fire suppressant that displaces oxygen to smother flames, making...",
    "desc": "Carbon Dioxide (CO2) is a versatile fire suppressant that displaces oxygen to smother flames, making it ideal for protecting high-value equipment without leaving residues. It is available in both liquid and gaseous forms, with various supply options to meet different volume needs.",
    "mainImg": "/images/products/carbon-dioxide/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/carbon-dioxide/main.png"
    ]
  },
  {
    "id": "f3a64d9c-988f-4d81-adef-f424d0d13327",
    "title": "Dissolved Acetylene Gas",
    "slug": "dissolved-acetylene-gas",
    "shortDesc": "Dissolved Acetylene Gas is used for welding and cutting in many industries. It is also used in the p...",
    "desc": "Dissolved Acetylene Gas is used for welding and cutting in many industries. It is also used in the production of synthetic materials and for the production of certain chemicals.",
    "mainImg": "/images/products/dissolved-acetylene-gas/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/dissolved-acetylene-gas/main.png"
    ]
  },
  {
    "id": "f26f3bd6-7e97-4287-ac78-0315413e8103",
    "title": "Nitrogen Gas",
    "slug": "nitrogen-gas",
    "shortDesc": "Nitrogen Gas @ 200 BAR pressure is used in a variety of applications such as food processing, packag...",
    "desc": "Nitrogen Gas @ 200 BAR pressure is used in a variety of applications such as food processing, packaging and preservation, and in industrial processes.",
    "mainImg": "/images/products/nitrogen-gas/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/nitrogen-gas/main.png"
    ]
  },
  {
    "id": "7e82d509-96fb-4608-945c-3fe0d12e38c3",
    "title": "Argon",
    "slug": "argon",
    "shortDesc": "Argon is a noble gas and is used in a variety of industrial and scientific applications. It is also ...",
    "desc": "Argon is a noble gas and is used in a variety of industrial and scientific applications. It is also used in welding and lighting.",
    "mainImg": "/images/products/argon/main.jpeg",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/argon/main.jpeg"
    ]
  },
  {
    "id": "e4254883-91ad-4494-b446-4e641e79533a",
    "title": "Medical Oxygen Gas",
    "slug": "medical-oxygen-gas",
    "shortDesc": "Our Medical Oxygen Gas is of the utmost quality, produced to exacting standards. As a medical grade ...",
    "desc": "Our Medical Oxygen Gas is of the utmost quality, produced to exacting standards. As a medical grade gas, it is used in medical and healthcare settings to provide oxygen to patients.",
    "mainImg": "/images/products/medical-oxygen-gas/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/medical-oxygen-gas/main.png"
    ]
  },
  {
    "id": "a1fafa92-1c0c-4ad8-a4b4-a0637f11da52",
    "title": "Hydrogen Gas",
    "slug": "hydrogen-gas",
    "shortDesc": "Our Hydrogen Gas is made from an electrolysis process and is used in many industrial applications. I...",
    "desc": "Our Hydrogen Gas is made from an electrolysis process and is used in many industrial applications. It can also be used for fuel cells, rocket fuel and other specialty applications.",
    "mainImg": "/images/products/hydrogen-gas/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/hydrogen-gas/main.png"
    ]
  },
  {
    "id": "2cb79434-6c0c-4697-971d-c2ca15097f32",
    "title": "Dry Ice",
    "slug": "dry-ice",
    "shortDesc": "Dry Ice is produced from liquid carbon dioxide, and is used for cooling, freezing and preserving foo...",
    "desc": "Dry Ice is produced from liquid carbon dioxide, and is used for cooling, freezing and preserving food, among other applications.",
    "mainImg": "/images/products/dry-ice/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/dry-ice/main.png"
    ]
  },
  {
    "id": "6102eb9c-0976-4cc6-b2bd-ef934ccf306d",
    "title": "Inert Gases",
    "slug": "inert-gases",
    "shortDesc": "Inert Gases @ 300 BAR used in Fire Suppression Systems are ideal for providing fire protection in ha...",
    "desc": "Inert Gases @ 300 BAR used in Fire Suppression Systems are ideal for providing fire protection in hazardous or sensitive areas. The inert gases are non-flammable and non-toxic, making them safe for use in these kinds of environments.",
    "mainImg": "/images/products/inert-gases/main.png",
    "category": "Industrial",
    "details": [],
    "gallery": [
      "/images/products/inert-gases/main.png"
    ]
  }
];
