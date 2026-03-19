export interface Vehicle {
  id: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  drivetrain: string;
  bodyType: string;
  exteriorColor: string;
  interiorColor: string;
  engine: string;
  horsepower: number;
  torque: string;
  fuelEconomy: string;
  doors: number;
  seats: number;
  image: string;
  tag?: string;
  sold?: boolean;
  soldDate?: string;
  soldLocation?: string;
  highlights: string[];
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    make: "Executive",
    model: "S-Class",
    trim: "AMG Line",
    year: 2023,
    price: 89500,
    mileage: 12400,
    fuelType: "Petrol",
    transmission: "Automatic",
    drivetrain: "AWD",
    bodyType: "Sedan",
    exteriorColor: "Obsidian Black",
    interiorColor: "Nappa Leather Black",
    engine: "3.0L Inline-6 Turbo",
    horsepower: 429,
    torque: "384 lb-ft",
    fuelEconomy: "24 MPG combined",
    doors: 4,
    seats: 5,
    image: "hero-car",
    tag: "Featured",
    highlights: ["One Owner", "Full Service History", "Premium Package", "Panoramic Roof", "Advanced Driver Assist"],
    description: "An immaculate executive sedan that combines commanding road presence with exceptional refinement. The AMG Line specification adds sporting intent to an already generous standard equipment list, while the low mileage confirms careful, considered use by a single owner."
  },
  {
    id: "2",
    make: "Premium",
    model: "X-Sport",
    trim: "R-Line",
    year: 2022,
    price: 67900,
    mileage: 28300,
    fuelType: "Diesel",
    transmission: "Automatic",
    drivetrain: "AWD",
    bodyType: "SUV",
    exteriorColor: "Glacier Silver",
    interiorColor: "Dark Brown Leather",
    engine: "3.0L V6 TDI",
    horsepower: 286,
    torque: "443 lb-ft",
    fuelEconomy: "28 MPG combined",
    doors: 5,
    seats: 7,
    image: "vehicle-suv",
    tag: "Low Mileage",
    highlights: ["7-Seat Configuration", "Air Suspension", "360° Camera", "Matrix LED Headlights", "Tow Package"],
    description: "A commanding luxury SUV that effortlessly bridges the gap between family versatility and executive refinement. The R-Line aesthetic sharpens the exterior, while the seven-seat interior ensures no compromise on space or comfort."
  },
  {
    id: "3",
    make: "Performance",
    model: "GT Coupé",
    trim: "Sport Plus",
    year: 2023,
    price: 112000,
    mileage: 8900,
    fuelType: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    bodyType: "Coupé",
    exteriorColor: "Alpine White",
    interiorColor: "Red/Black Leather",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 523,
    torque: "502 lb-ft",
    fuelEconomy: "18 MPG combined",
    doors: 2,
    seats: 4,
    image: "vehicle-coupe",
    tag: "Performance",
    highlights: ["Carbon Ceramic Brakes", "Sport Exhaust", "Launch Control", "Carbon Fibre Interior", "Adaptive Suspension"],
    description: "A thoroughbred performance coupé that delivers genuine supercar capability within a refined grand touring package. With fewer than 9,000 miles, this example presents in virtually new condition with the most desirable Sport Plus specification."
  },
  {
    id: "4",
    make: "Executive",
    model: "7 Series",
    trim: "Luxury Line",
    year: 2022,
    price: 74500,
    mileage: 31200,
    fuelType: "Hybrid",
    transmission: "Automatic",
    drivetrain: "AWD",
    bodyType: "Sedan",
    exteriorColor: "Carbon Blue",
    interiorColor: "Ivory White Leather",
    engine: "3.0L Plug-in Hybrid",
    horsepower: 389,
    torque: "443 lb-ft",
    fuelEconomy: "56 MPGe combined",
    doors: 4,
    seats: 5,
    image: "vehicle-sedan",
    tag: "Executive",
    highlights: ["Rear Executive Lounge", "Plug-in Hybrid", "Massage Seats", "Bowers & Wilkins Audio", "Night Vision"],
    description: "The pinnacle of executive motoring, combining traditional luxury appointments with forward-thinking hybrid technology. The Luxury Line specification includes every conceivable comfort feature, making this the ideal choice for those who value both presence and responsibility."
  },
  {
    id: "5",
    make: "Performance",
    model: "RS Sportback",
    trim: "Carbon Edition",
    year: 2023,
    price: 95800,
    mileage: 5600,
    fuelType: "Petrol",
    transmission: "Automatic",
    drivetrain: "AWD",
    bodyType: "Sportback",
    exteriorColor: "Nardo Grey",
    interiorColor: "Black Alcantara",
    engine: "2.5L Inline-5 Turbo",
    horsepower: 401,
    torque: "369 lb-ft",
    fuelEconomy: "22 MPG combined",
    doors: 5,
    seats: 5,
    image: "vehicle-sport-red",
    tag: "New Arrival",
    highlights: ["Carbon Edition Package", "Sport Exhaust", "Dynamic Steering", "Carbon Bucket Seats", "Virtual Cockpit"],
    description: "A rare Carbon Edition that represents the pinnacle of the RS range. The legendary five-cylinder engine delivers an unmistakable soundtrack, while the exclusive Carbon Edition appointments ensure this example stands apart from the standard specification."
  },
  {
    id: "6",
    make: "Premium",
    model: "V60 Cross Country",
    trim: "Ultimate",
    year: 2022,
    price: 48900,
    mileage: 22100,
    fuelType: "Diesel",
    transmission: "Automatic",
    drivetrain: "AWD",
    bodyType: "Estate",
    exteriorColor: "Thunder Grey",
    interiorColor: "Maroon Leather",
    engine: "2.0L D5 PowerPulse",
    horsepower: 235,
    torque: "354 lb-ft",
    fuelEconomy: "38 MPG combined",
    doors: 5,
    seats: 5,
    image: "vehicle-estate",
    tag: "Best Value",
    highlights: ["Pilot Assist", "Harman Kardon Audio", "Air Suspension", "Heated Everything", "Panoramic Glass Roof"],
    description: "A supremely practical premium estate that combines rugged capability with Scandinavian elegance. The Ultimate specification leaves nothing to the options list, while the Cross Country raised ride height ensures confidence in all conditions."
  },
];

export const soldVehicles: Vehicle[] = [
  {
    ...vehicles[0],
    id: "s1",
    sold: true,
    soldDate: "February 2026",
    soldLocation: "London",
    make: "Executive",
    model: "E-Class",
    trim: "AMG Sport",
    year: 2021,
    price: 52900,
    mileage: 34500,
  },
  {
    ...vehicles[2],
    id: "s2",
    sold: true,
    soldDate: "January 2026",
    soldLocation: "Manchester",
    make: "Performance",
    model: "M4 Competition",
    trim: "xDrive",
    year: 2022,
    price: 78500,
    mileage: 11200,
  },
  {
    ...vehicles[1],
    id: "s3",
    sold: true,
    soldDate: "January 2026",
    soldLocation: "Edinburgh",
    make: "Premium",
    model: "GLE 450",
    trim: "AMG Line",
    year: 2022,
    price: 62400,
    mileage: 19800,
  },
  {
    ...vehicles[3],
    id: "s4",
    sold: true,
    soldDate: "December 2025",
    soldLocation: "Birmingham",
    make: "Executive",
    model: "A8 L",
    trim: "Vorsprung",
    year: 2021,
    price: 68900,
    mileage: 27600,
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "How to Choose the Right Used Car with Confidence",
    excerpt: "Making a premium used car purchase requires careful consideration. We outline the essential factors that separate a good investment from a costly mistake.",
    category: "Buying Guide",
    date: "March 12, 2026",
    readTime: "6 min read",
    image: "quality-detail",
  },
  {
    id: "2",
    title: "Why Service History Matters More Than Most Buyers Realize",
    excerpt: "A complete service history tells a story of care and attention. Discover why this document should be your first priority when evaluating any premium vehicle.",
    category: "Expert Insight",
    date: "March 5, 2026",
    readTime: "5 min read",
    image: "showroom",
  },
  {
    id: "3",
    title: "SUV vs Sedan: Which Fits Your Lifestyle Better?",
    excerpt: "The choice between an SUV and sedan goes beyond personal preference. We examine the practical, financial, and experiential factors that should guide your decision.",
    category: "Comparison",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "vehicle-suv",
  },
  {
    id: "4",
    title: "How Financing Can Make Premium Vehicles More Accessible",
    excerpt: "Structured financing transforms the premium car market. Learn how intelligent finance planning can align your aspirations with your budget.",
    category: "Financing",
    date: "February 20, 2026",
    readTime: "4 min read",
    image: "vehicle-sedan",
  },
  {
    id: "5",
    title: "What a Proper Vehicle Inspection Process Should Include",
    excerpt: "Not all inspections are equal. We detail the 150-point evaluation process that ensures every vehicle in our showroom meets the highest standards.",
    category: "Quality",
    date: "February 14, 2026",
    readTime: "8 min read",
    image: "hero-car",
  },
];

export const faqItems = [
  {
    question: "Are your vehicles inspected before listing?",
    answer: "Every vehicle undergoes our comprehensive 150-point inspection process before being presented in our showroom. This covers mechanical, electrical, aesthetic, and safety systems to ensure every car meets our exacting standards. We will not list a vehicle that does not pass our evaluation."
  },
  {
    question: "Can I reserve a car before visiting?",
    answer: "Yes, we offer a reservation service for serious buyers. A fully refundable deposit secures your chosen vehicle for up to 72 hours, giving you time to arrange a viewing or finalize your decision. Contact our team to discuss the reservation process."
  },
  {
    question: "Do you offer financing support?",
    answer: "We work with a carefully selected panel of finance partners to offer competitive rates across hire purchase, personal contract purchase, and lease agreements. Our finance advisors will help you find the structure that best suits your circumstances and budget."
  },
  {
    question: "Can I trade in my current vehicle?",
    answer: "Absolutely. We offer fair, market-reflective valuations on trade-in vehicles. Our team will assess your current car and provide a transparent offer that can be applied directly against your purchase, simplifying the entire process."
  },
  {
    question: "Do your vehicles come with service history?",
    answer: "We prioritize vehicles with documented service histories. Where available, full service records are provided with every purchase. Any gaps in history are clearly communicated upfront — transparency is fundamental to our approach."
  },
  {
    question: "Can I request additional photos or details?",
    answer: "Of course. We understand that photography cannot capture every detail. Request additional images, specific angles, or detailed information about any vehicle in our inventory, and we will provide them promptly."
  },
  {
    question: "Do you offer test drives?",
    answer: "Test drives are available by appointment for all vehicles in our showroom. We recommend booking in advance to ensure the vehicle is prepared and our team can give you their full attention during your visit."
  },
  {
    question: "What documents are required for purchase?",
    answer: "For a straightforward purchase, you will need valid photo identification, proof of address, and proof of funds or finance pre-approval. Our team will guide you through the documentation process to ensure a smooth transaction."
  },
  {
    question: "Are your prices negotiable?",
    answer: "Our vehicles are priced to reflect their condition, specification, and market value. While we aim to price competitively from the outset, we are always open to a respectful conversation. We believe in fair pricing, not artificial inflation followed by negotiation."
  },
  {
    question: "How quickly can the purchase process be completed?",
    answer: "For cash purchases, we can typically complete the process within 24-48 hours. Financed purchases may require an additional 2-3 working days for approval and documentation. We aim to make the process as efficient as possible without compromising thoroughness."
  },
];
