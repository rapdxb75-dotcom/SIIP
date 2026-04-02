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
    description: 'Full colour plane flowerbomb artwork. Art as resistance, worn loud.',
    story: 'The Flowerbomb Tee takes the **Grenade Bouquet**—a recurring motif in the SIIP archive representing the intersection of art, fashion, and conscience—and reimagines it as a statement of defiance. Full-colour artwork on the back features a military plane dropping flowers instead of bombs, while the front carries the hand-lettered "No War for Favour" mark. This wordmark is an intentional craft, born of ink and conviction, not standard typography. Oversized fit, heavyweight 240 GSM organic cotton. Born from friendship, creativity, and conviction—Say It In Print.',
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
    description: 'Mono plane flowerbomb on black. The same message, darker canvas.',
    story: 'The Monochrome Flowerbomb. Same recurring **Grenade Bouquet** energy, stripped back to high-contrast white on black. The monochrome treatment gives the plane artwork a raw, woodcut quality that echoes the energy of underground art movements. The hand-drawn wordmark on the chest represents a craft-first approach to streetwear—no preachy slogans, just intentional craft. Oversized fit, heavyweight 240 GSM organic cotton. Born from friendship, creativity, and conviction—Say It In Print.',
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
    description: 'Full colour plane flowerbomb, alternate placement. Art you carry with you.',
    story: 'A variation on the Flowerbomb theme, highlighting art that moves with you. This piece features the recurring **Grenade Bouquet** motif with an alternate print treatment, emphasizing the hand-drawn "No War for Favour" wordmark as a piece of intentional craft rather than standard typography. Designed for those who appreciate the weight of the garment as much as the weight of the message. Oversized fit, heavyweight 240 GSM organic cotton. Born from friendship, creativity, and conviction—Say It In Print.',
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
    description: 'Carry art. Carry a message. The Grenade Bouquet on natural cotton.',
    story: 'The SIIP **Grenade Bouquet** tote: a grenade reimagined as a vase, overflowing with wildflowers. This motif is the heartbeat of our brand, representing beauty as resistance. Rendered in full-colour on a natural canvas backdrop, the reverse carries the hand-lettered "No War for Favour" mark—a reminder of intentional craft. Sturdy 12oz canvas, generous market size. Born from friendship, creativity, and conviction—Say It In Print.',
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
    description: 'The Grenade Bouquet in white on black. Statement piece, daily carry.',
    story: 'The **Grenade Bouquet** in high-contrast mono. This statement piece takes our recurring brand icon and renders it in striking white on black canvas, making the graphic edge even more pronounced. The hand-drawn #NWPR wordmark on the reverse represents our commitment to intentional craft over corporate typography. Sturdy 12oz canvas, generous market size. Born from friendship, creativity, and conviction—Say It In Print.',
    artworkCredit: 'Original SIIP artwork. Front: mono grenade bouquet illustration. Back: white hand-lettered #NWPR text.',
    materials: ['12oz Sturdy Cotton Canvas', '100% Recycled Cotton', 'Reinforced handles'],
    careInstructions: ['Spot clean only', 'Do not machine wash', 'Air dry only'],
    details: ['Generous market size', 'High-contrast graphic print', 'Hand-lettered #NWPR text']
  },
];
