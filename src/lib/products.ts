// Product Images
import p1_main from '../assets/product_1 (2).png';
import p1_hover from '../assets/product_1_2.png';
import p2_main from '../assets/product_2.png';
import p2_hover from '../assets/product_2_2.png';
import p3_main from '../assets/product_3.png';
import p3_hover from '../assets/product_3_3.png';
import p4_main from '../assets/product_4.png';
import p4_hover from '../assets/product_4_4.png';
import img5 from '../assets/1.png';
import img6 from '../assets/2.png';
import img7 from '../assets/3.png';
import img8 from '../assets/4.png';

export const products = [
  { 
    id: 1, 
    name: 'SIIP CLASSIC TEE', 
    price: '$48', 
    originalPrice: '$65', 
    tag: 'NEW', 
    image: p1_main, 
    hoverImage: p1_hover, 
    category: 'TEES',
    description: 'A contemporary staple defined by its premium weight and signature silhouette. Crafted from custom-knit sustainably sourced materials for ultimate durability and comfort.',
    story: 'The Genesis of SIIP. Born from the intersection of arcade culture and modern street activism. This piece represents our core identity—simple, powerful, and built to last.',
    artworkCredit: 'Designed by the SIIP Archive Team in London.',
    materials: ['100% Organic Heavyweight Cotton', '240 GSM single jersey', 'Environmentally friendly pigment dye'],
    careInstructions: ['Machine wash cold with like colors', 'Turn inside out before washing', 'Do not tumble dry', 'Iron on low heat if needed'],
    details: ['Oversized standard fit', 'Dropped shoulders', 'Reinforced neck ribbing']
  },
  { 
    id: 2, 
    name: 'URBAN HOODIE', 
    price: '$89', 
    originalPrice: '$110', 
    tag: 'BEST', 
    image: p2_main, 
    hoverImage: p2_hover, 
    category: 'HOODIES',
    description: 'The ultimate urban layering piece. Engineered for warmth and a perfect oversized drape.',
    story: 'Designed for the late-night arcade sessions. This hoodie features a deep hood and heavy fleece that provides both comfort and a structured silhouette.',
    artworkCredit: 'Pattern engineered by SIIP Studio.',
    materials: ['450 GSM Heavy Fleece', '80% Organic Cotton, 20% Recycled Polyester', 'Brushed interior for softness'],
    careInstructions: ['Dry clean recommended', 'Or cold hand wash', 'Lay flat to dry'],
    details: ['Double-lined hood', 'Kangaroo pocket', 'Ribbed cuffs and hem']
  },
  { 
    id: 3, 
    name: 'HERITAGE CAP', 
    price: '$32', 
    originalPrice: '$45', 
    tag: null, 
    image: p3_main, 
    hoverImage: p3_hover, 
    category: 'ACCESSORIES',
    description: 'A classic 6-panel construction with our signature archive embroidery.',
    story: 'A nod to the early 90s arcade culture. Every stitch tells a story of the pixelated past and the digital future.',
    artworkCredit: 'Embroidery design by Genesis Archive.',
    materials: ['100% Cotton Twill', 'Antique brass buckle closure', 'One size fits all'],
    careInstructions: ['Spot clean only', 'Do not wash', 'Keep in a cool dry place'],
    details: ['Structured crown', 'Curved brim', 'High-density embroidery']
  },
  { 
    id: 4, 
    name: 'SIIP ARCHIVE JACKET', 
    price: '$120', 
    originalPrice: '$155', 
    tag: 'LTD', 
    image: p4_main, 
    hoverImage: p4_hover, 
    category: 'JACKETS',
    description: 'A statement technical piece featuring modular details and weather-resistant fabric.',
    story: 'The highlight of our Archive series. Inspired by industrial functionalism and high-stakes arcade competition.',
    artworkCredit: 'Functional detail design by SIIP Tech.',
    materials: ['Recycled Nylon Taslan', 'Water-repellent coating', 'Breathable mesh lining'],
    careInstructions: ['Specialist clean only', 'Do not bleach', 'Wipe clean with damp cloth'],
    details: ['Multiple utility pockets', 'Adjustable hem', 'Concealed zipper']
  },
  { id: 5, name: 'RETRO GAMER TEE', price: '$45', originalPrice: null, tag: 'NEW', image: img5, category: 'TEES', description: 'Classic fit with retro arcade screen print.' },
  { id: 6, name: 'ARCADE HOODIE', price: '$75', originalPrice: '$95', tag: null, image: img6, category: 'HOODIES', description: 'Midweight hoodie with pixel art branding.' },
  { id: 7, name: 'PIXEL BEANIE', price: '$28', originalPrice: null, tag: null, image: img7, category: 'ACCESSORIES', description: 'Soft-knit beanie for all-season wear.' },
  { id: 8, name: 'GAMER SOCKS', price: '$15', originalPrice: null, tag: null, image: img8, category: 'ACCESSORIES', description: 'Comfortable rib-knit socks with logo detail.' },
];
