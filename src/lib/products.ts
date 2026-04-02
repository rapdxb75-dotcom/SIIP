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

export const products = [
  { 
    id: 1, 
    ref: 'SIIP-D1-T01',
    name: 'FLOWERBOMB TEE (WHITE)', 
    price: '$48', 
    originalPrice: null, 
    tag: '#NWPR', 
    image: p1_main, 
    hoverImage: p1_hover, 
    category: 'TEES',
    description: 'Full colour plane flowerbomb artwork on heavyweight organic cotton. Art as resistance, worn loud and unapologetic.',
    story: 'The Flowerbomb Tee takes the SIIP grenade-bouquet motif and reimagines it as a statement piece. Full colour artwork on the back features a military plane dropping flowers instead of bombs, while the front chest carries the hand-drawn "No War for Favour" mark. Crafted from 240 GSM organic cotton with a signature oversized fit, this tee is an intentional piece of archival craft designed for durability and soul. Born from friendship, creativity, and conviction—Say It In Print.',
    artworkCredit: 'Original SIIP artwork. Back: full colour plane dropping flowers. Front: hand-lettered logo + SIIP wordmark.',
    materials: ['240 GSM Heavyweight Cotton', '100% GOTS Organic Cotton', 'Environmentally friendly pigment dye'],
    careInstructions: ['Machine wash cold with like colors', 'Turn inside out before washing', 'Do not tumble dry', 'Iron on low heat if needed'],
    details: ['Signature Oversized Fit', 'Dropped shoulders', 'Reinforced neck ribbing', 'Hand-lettered #NWPR mark']
  },
  { 
    id: 2, 
    ref: 'SIIP-D1-T02',
    name: 'FLOWERBOMB TEE (BLACK)', 
    price: '$48', 
    originalPrice: null, 
    tag: '#NWPR', 
    image: p2_main, 
    hoverImage: p2_hover, 
    category: 'TEES',
    description: 'Monochrome plane flowerbomb on a premium black canvas. The same message of resistance, stripped back and raw.',
    story: 'Same iconic Flowerbomb artwork, stripped back to high-contrast white on black. The monochrome treatment gives the plane-bouquet illustration a woodcut edge, echoing the energy of underground art movements. Featuring the hand-drawn #NWPR wordmark, this 240 GSM organic cotton tee offers a bold, unapologetic silhouette. It’s an art-forward piece that lets the motif do the heavy lifting. Our medium is the print; our heart is the community. Born from friendship, creativity, and conviction—Say It In Print.',
    artworkCredit: 'Original SIIP artwork. Back: white/mono plane flowerbomb. Front: white hand-lettered logo + SIIP wordmark.',
    materials: ['240 GSM Heavyweight Cotton', '100% GOTS Organic Cotton', 'Pigment dyed black'],
    careInstructions: ['Machine wash cold with like colors', 'Turn inside out before washing', 'Do not tumble dry', 'Iron on low heat if needed'],
    details: ['Signature Oversized Fit', 'Graphic monochrome print', 'Hand-lettered #NWPR mark']
  },
  { 
    id: 3, 
    ref: 'SIIP-D1-T03',
    name: 'FLOWERBOMB TEE (WHITE V2)', 
    price: '$48', 
    originalPrice: null, 
    tag: '#NWPR', 
    image: p3_main, 
    hoverImage: p3_hover, 
    category: 'TEES',
    description: 'Strategic artwork placement meets premium construction. A variation on the Flowerbomb theme for the restricted collective.',
    story: 'A technical variation on the #NWPR theme, highlighting the intersection of street culture and intentional craft. This White v2 variant features the recurring grenade-bouquet motif with refined placement, emphasizing the hand-lettered "No War for Favour" mark. Made from 240 GSM heavyweight organic cotton with dropped shoulders and a generous fit, it’s a fragment of the SIIP archive designed for those who appreciate art with a voice. Born from friendship, creativity, and conviction—Say It In Print.',
    artworkCredit: 'Original SIIP artwork. Back: full colour plane flowerbomb (alternate crop). Front: hand-drawn #NWPR logo.',
    materials: ['240 GSM Heavyweight Cotton', '100% GOTS Organic Cotton', 'Premium screen print'],
    careInstructions: ['Machine wash cold with like colors', 'Turn inside out before washing', 'Do not tumble dry', 'Iron on low heat if needed'],
    details: ['Signature Oversized Fit', 'Dropped shoulders', 'Alternate artwork placement']
  },
  { 
    id: 4, 
    ref: 'SIIP-D1-TB01',
    name: 'GRENADE BOUQUET TOTE (NATURAL)', 
    price: '$25', 
    originalPrice: null, 
    tag: '#NWPR', 
    image: p4_main, 
    hoverImage: p4_hover, 
    category: 'ACCESSORIES',
    description: 'Sturdy 12oz natural canvas tote featuring the iconic grenade bouquet motif. Carry art, carry a movement.',
    story: 'The Grenade Bouquet Tote reimagines a symbol of destruction as a vessel for beauty. Printed on sturdy 12oz natural canvas, it features the recurring brand motif on one side and the hand-drawn #NWPR wordmark on the reverse. With a generous market size and reinforced handles, this accessory is more than a bag—it’s a portable fragment of the SIIP archival story. Creative, confident, and built to last. Born from friendship, creativity, and conviction—Say It In Print.',
    artworkCredit: 'Original SIIP artwork. Front: full colour grenade bouquet. Back: hand-lettered #NWPR text.',
    materials: ['12oz Sturdy Cotton Canvas', '100% Recycled Cotton', 'Reinforced handles'],
    careInstructions: ['Spot clean only', 'Do not machine wash', 'Air dry only'],
    details: ['Generous market size', 'Double-sided print', 'Hand-drawn #NWPR wordmark']
  },
  { 
    id: 5, 
    ref: 'SIIP-D1-TB02',
    name: 'GRENADE BOUQUET TOTE (BLACK)', 
    price: '$25', 
    originalPrice: null, 
    tag: '#NWPR', 
    image: img5, 
    hoverImage: img6, 
    category: 'ACCESSORIES',
    description: 'High-contrast mono grenade bouquet on heavy black canvas. A daily carry for the street elite world-wide.',
    story: 'Our signature grenade-bouquet motif rendered in striking white on heavy black canvas. This 12oz sturdy tote is designed for the daily grind, offering a generous market silhouette with double-sided print detailing. Featuring the hand-lettered #NWPR mark, it represents the brand’s conviction that even the simplest accessory should be a piece of intentional craft. A bold statement of beauty and resistance. Born from friendship, creativity, and conviction—Say It In Print.',
    artworkCredit: 'Original SIIP artwork. Front: mono grenade bouquet illustration. Back: white hand-lettered #NWPR text.',
    materials: ['12oz Sturdy Cotton Canvas', '100% Recycled Cotton', 'Reinforced handles'],
    careInstructions: ['Spot clean only', 'Do not machine wash', 'Air dry only'],
    details: ['Generous market size', 'High-contrast graphic print', 'Hand-lettered #NWPR text']
  },
];
