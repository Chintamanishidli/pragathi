const fs = require('fs');

const file = 'd:/Downloads/pragathi/project-detail.html';
let content = fs.readFileSync(file, 'utf8');

const replacement = `// ── Project Data ──────────────────────────────────────────────────────────────
    const BASE = 'assets/interior-design/images/';
    const projects = {
      smallapartments: {
        title: 'Small Apartment Kitchens',
        tag: 'Compact · Efficient',
        hero: BASE + 'small_kitchens.png',
        location: 'Bengaluru, Karnataka',
        area: 'Variable',
        year: '2024 Design',
        lead: 'Pragathi Design Team',
        duration: '2-4 Weeks',
        style: 'Parallel & L-Shape',
        overviewH: 'Maximizing Small Spaces Efficiently',
        overviewText: '<p>Perfect for flats and compact homes near your area, our small apartment kitchens are designed to guarantee exceptional utility without occupying unnecessary floor space.</p><p>We highly recommend layout types like a <strong>Parallel Kitchen (2-side layout)</strong> or a compact <strong>L-shape kitchen</strong>. By incorporating steel cabinets with a modern matte finish, space-saving wall-mounted storage, specialized pull-out drawers for spices, and light colors (such as beige, white, or light grey), we create a spacious and deeply organized cooking environment.</p>',
        gallery: [BASE+'small_kitchens.png', BASE+'small_kichen_2.webp', BASE+'small_kichen_3.jpg', BASE+'small_kichen_4.jpg', BASE+'small_kichen_5.jpg', BASE+'parallel_kichen_1.webp'],
        challenges: [
          { title: 'Space Limitations', body: 'Used pull-out organizers, under-cabinet lighting, and tall vertical storage to efficiently utilize every available square inch.' },
          { title: 'Workflow Management', body: 'Implemented a tight but functional work triangle to make cooking smooth and unobstructed.' },
          { title: 'Aesthetic Lightness', body: 'Leveraged light color palettes and specialized matte finishes to reflect light and make the space feel twice as large.' }
        ],
        results: [
          { num: '50%', label: 'More Storage' },
          { num: '2-4', label: 'Weeks Installation' },
          { num: 'Trending', label: 'Layout Strategy' },
          { num: 'Light', label: 'Color Schemes' }
        ],
        testimonial: \`Using these recommended layouts completely transformed my compact flat. The steel cabinets are incredibly sleek and the pull-outs save me so much hassle!\`,
        testimonialAuthor: 'Happy Client',
        testimonialRole: 'Homeowner, Shared Apartment',
        related: ['mediumhomes', 'steelspecial', 'colortrends']
      },
      mediumhomes: {
        title: 'Medium Homes (2BHK / 3BHK Houses)',
        tag: 'Residential · Spacious',
        hero: BASE + '2bhk-kitchen.png',
        location: 'Bengaluru, Karnataka',
        area: 'Flexible',
        year: '2024 Design',
        lead: 'Pragathi Design Team',
        duration: '3-5 Weeks',
        style: 'L-Shaped & Semi-Open',
        overviewH: 'Better Workflow & Separate Zones',
        overviewText: '<p>For 2BHK and 3BHK homes, achieving the perfect balance of aesthetic appeal and functional separation is key.</p><p>We recommend an <strong>L-shaped kitchen with a breakfast counter</strong> or a <strong>semi-open kitchen</strong>. To enrich the space, we blend a highly trending <strong>Steel + Wood combination</strong>, incorporating tall storage units and cleverly hidden appliances to offer a deeply clean, modern look. The L-shape is incredibly popular because it allows for an uninterrupted workflow and distinct separated zones for cleaning, prep, and cooking.</p>',
        gallery: [BASE+'2bhk-kitchen.png', BASE+'2bhk_2.avif', BASE+'l_shape_kichen_1.jpg', BASE+'center_kichen_3.jpg', BASE+'center_kichen_4.jpg', BASE+'centerl_kichen1.jpg'],
        challenges: [
          { title: 'Zone Separation', body: 'Designed an optimal layout segmenting the kitchen into preparation, cooking, and dining zones naturally without physical barriers.' },
          { title: 'Appliance Integration', body: 'Built custom steel and wood enclosures to hide heavy appliances, creating uniform modern lines.' },
          { title: 'Family Interaction', body: 'Added a stylish breakfast counter ensuring the kitchen remains a social space connecting with the living area.' }
        ],
        results: [
          { num: 'L-Shape', label: 'Prime Layout' },
          { num: '100%', label: 'Termite Proof' },
          { num: '2-3', label: 'Dedicated Zones' },
          { num: 'Trending', label: 'Steel + Wood' }
        ],
        testimonial: \`The L-shaped layout with the breakfast counter completely altered how my family interacts. Combining the durability of steel with the warmth of wood is pure perfection.\`,
        testimonialAuthor: 'Satisfied Customer',
        testimonialRole: 'Owner, 3BHK Residence',
        related: ['luxuryvillas', 'smartkitchen', 'smallapartments']
      },
      luxuryvillas: {
        title: 'Luxury Villas / Farmhouses',
        tag: 'Premium · Bespoke',
        hero: BASE + 'studios/7.jpg',
        location: 'Karnataka, India',
        area: 'Extensive',
        year: '2024 Masterpiece',
        lead: 'Luxury Design Team',
        duration: '4-8 Weeks',
        style: 'U-Shaped & Island',
        overviewH: 'Maximum Storage & Organized Elegance',
        overviewText: '<p>Designed for high-budget clients to match the grandeur of luxury villas and farmhouses, we deploy massive, intricately planned <strong>U-shaped kitchens</strong> and stunning <strong>Island kitchens</strong> acting as the bold centerpieces of the home.</p><p>Our luxury kitchens feature a full stainless steel premium finish, fully integrated smart lighting, modern chimney stacks, built-in ovens, and concealed refrigeration. We favor matte black, dark grey, and sophisticated olive colors. The U-shape gives unparalleled maximum storage and clearly organized luxurious cooking zones.</p>',
        gallery: [BASE+'studios/7.jpg', BASE+'studios/5.jpg', BASE+'studios/9.jpg', BASE+'new-story-3.avif', BASE+'studios/4.jpg', BASE+'studios/11.jpg'],
        challenges: [
          { title: 'Expansive Layouts', body: 'Managed the large floor area successfully to avoid the kitchen feeling empty, anchoring it with a bold central island.' },
          { title: 'Complex Appliances', body: 'Seamlessly integrated multiple heavy-duty built-in appliances (ovens, wine coolers) behind sleek cabinet facades.' },
          { title: 'Premium Ambiance', body: 'Executed full stainless steel finishes balanced with matte dark colors and smart lighting to deliver distinct luxury.' }
        ],
        results: [
          { num: 'U-Shape', label: 'High Storage' },
          { num: 'Premium', label: 'Steel Finishes' },
          { num: 'Smart', label: 'Lighting Config' },
          { num: 'Bespoke', label: 'Hidden Appliances' }
        ],
        testimonial: \`The dark matte aesthetic paired with the premium stainless steel finish has made my kitchen the most talked-about room in my villa. It\\'s an absolute masterpiece of luxury and utility.\`,
        testimonialAuthor: 'Luxury Villa Owner',
        testimonialRole: 'Exclusive Client',
        related: ['mediumhomes', 'smartkitchen', 'colortrends']
      },
      steelspecial: {
        title: 'Steel Kitchen Special',
        tag: 'Durability · Focus',
        hero: BASE + 'new-hero.jpg',
        location: 'Available Region-Wide',
        area: 'Custom',
        year: 'Flagship Service',
        lead: 'Pragathi Specialists',
        duration: 'Ongoing',
        style: 'Steel + Wood Matte',
        overviewH: 'The Ultimate Choice for Indian Cooking',
        overviewText: '<p>Our core business focus and best-selling concept: <strong>Steel + Wood + Matte Finish</strong>. A steel kitchen is the ultimate long-term investment for a modern household.</p><p>When we present to clients, we guarantee a <strong>100% termite-proof kitchen</strong> that is both waterproof and remarkably long-lasting. Steel kitchens are undoubtedly the best choice for Indian cooking environments due to their resilience to heat and oil. They are the preferred standard for unwavering durability, unmatched hygiene, and sustainable lifelong use.</p>',
        gallery: [BASE+'new-hero.jpg', BASE+'new-story-2.jpg', BASE+'new-story-1.webp', BASE+'studios/3.jpg', BASE+'new-story-4.webp', BASE+'studios/8.jpg'],
        challenges: [
          { title: 'Durability Demand', body: 'Solved long-term wear and tear associated with heavy Indian cooking by implementing premium-grade stainless steel surfaces.' },
          { title: 'Termite Threats', body: 'Replaced traditional completely wooden structures with 100% termite-proof and waterproof steel framework.' },
          { title: 'Maintenance Ease', body: 'Applied specialized matte finishes to ensure the cabinets are effortlessly easy to wipe down after heavy-duty cooking.' }
        ],
        results: [
          { num: '100%', label: 'Termite Proof' },
          { num: 'Zero', label: 'Moisture Damage' },
          { num: 'Matte', label: 'Fingerprint Resist' },
          { num: 'Best', label: 'For Heavy Cooking' }
        ],
        testimonial: \`Switching to a steel kitchen was the best decision. No more worrying about termites, water damage, or oil stains—and the wood combination makes it look beautiful instead of industrial.\`,
        testimonialAuthor: 'Home Chef',
        testimonialRole: 'Satisfied Client',
        related: ['smallapartments', 'luxuryvillas', 'colortrends']
      },
      smartkitchen: {
        title: 'Smart Kitchen',
        tag: 'Technology · Automated',
        hero: BASE + 'new-story-3.avif',
        location: 'Modern Estates',
        area: 'Custom',
        year: '2024 Tech',
        lead: 'Innovation Team',
        duration: 'Variable',
        style: 'High-Tech Integration',
        overviewH: 'The Standard for the Modern Home',
        overviewText: '<p>Elevate your lifestyle with our meticulously integrated <strong>Smart Kitchens</strong> built precisely for premium customers. As luxury transitions into smart-living, tech-forward kitchens are rapidly becoming the expected standard.</p><p>Our smart kitchens boast hands-free motion sensor lights, app-controlled and voice-activated appliances, and premium soft-close mechanical drawers. Every element of the kitchen is engineered not only for culinary art but for an exceptionally smooth, automated, and frictionless user experience.</p>',
        gallery: [BASE+'new-story-3.avif', BASE+'studios/4.jpg', BASE+'studios/10.jpg', BASE+'studios/11.jpg', BASE+'studios/1.jpg', BASE+'studios/5.jpg'],
        challenges: [
          { title: 'Tech Integration', body: 'Successfully wired and embedded motion sensors, under-cabinet dynamic LEDs, and app-controlled hubs without exposing ugly cables.' },
          { title: 'Automated Mechanics', body: 'Installed high-end servodrive mechanisms for touch-to-open and soft-close functionality across all heavy drawers.' },
          { title: 'Future-Proofing', body: 'Ensured all smart appliance bays and power distributions could manage future device upgrades predictably.' }
        ],
        results: [
          { num: 'Sensor', label: 'Automated Lighting' },
          { num: 'App', label: 'Controlled Devices' },
          { num: 'Soft', label: 'Close Hardware' },
          { num: 'Modern', label: 'Standardization' }
        ],
        testimonial: \`Walking into my kitchen and having the lights seamlessly illuminate my path, paired with one-touch automated cabinets, brings an entirely new joy to cooking. Absolutely state-of-the-art.\`,
        testimonialAuthor: 'Tech-Savvy Client',
        testimonialRole: 'Premium Resident',
        related: ['luxuryvillas', 'steelspecial', 'mediumhomes']
      },
      colortrends: {
        title: 'Color Trends',
        tag: 'Esthetics · Visuals',
        hero: BASE + 'new-section.webp',
        location: 'Global / Regional',
        area: 'All Sizes',
        year: 'Current Palette',
        lead: 'Color Consulting Team',
        duration: 'Palette Setting',
        style: 'Modern Colorways',
        overviewH: 'The Shades Defining the Year',
        overviewText: '<p>A kitchen’s aesthetic lives and breathes through its color selections. Our team is dedicated to bringing you the most sophisticated, high-conversion visual palettes dominating the industry right now.</p><p>We highly suggest these top trends to all our customers depending on the lighting and size of their space: <strong>Sage green + wood</strong> for nature-inspired warmth, <strong>Beige + white</strong> for expansive openness, <strong>Matte black + steel</strong> for striking minimalist luxury, and <strong>Warm grey + stone</strong> for timeless grounded elegance.</p>',
        gallery: [BASE+'new-section.webp', BASE+'studios/5.jpg', BASE+'studios/9.jpg', BASE+'new-story-2.jpg', BASE+'studios/7.jpg', BASE+'studios/3.jpg'],
        challenges: [
          { title: 'Lighting Nuances', body: 'Navigating how colors like sage green or matte black shift in tone throughout the day under artificial and natural natural lighting.' },
          { title: 'Material Harmonies', body: 'Pairing the cold, sleek nature of stainless steel with the warm, textured feelings of wood and natural stone.' },
          { title: 'Personal Stylings', body: 'Helping customers bridge the gap between trending luxury finishes and personal, long-lasting preferences.' }
        ],
        results: [
          { num: 'Sage', label: 'Green + Wood' },
          { num: 'Beige', label: '+ Pure White' },
          { num: 'Matte', label: 'Black + Steel' },
          { num: 'Warm', label: 'Grey + Stone' }
        ],
        testimonial: \`Following the recommended color palette of Matte Black and Steel gave my home a hotel-like lavishness. The designers truly understand how color shapes a space.\`,
        testimonialAuthor: 'Design-Conscious Client',
        testimonialRole: 'Homeowner',
        related: ['steelspecial', 'mediumhomes', 'smallapartments']
      }
    };

    // Fallback for unknown project IDs
    const defaultProject = projects.smallapartments;

    // ── Process Steps (same across all projects) ────────────────────────────────
    const processSteps = [
      { n:1, title:'Discovery Call', desc:'Understanding client vision, lifestyle & aspirations' },
      { n:2, title:'Concept Design', desc:'Mood boards, material palettes, style direction' },
      { n:3, title:'3D Renders', desc:'Photorealistic visualizations for approval' },
      { n:4, title:'Procurement', desc:'Sourcing furniture, materials & custom pieces' },
      { n:5, title:'Execution', desc:'On-site installation & quality supervision' },
      { n:6, title:'Handover', desc:'Styled photography & final walkthrough' },
    ];

    // ── Related project data ────────────────────────────────────────────────────
    const relatedData = {
      smallapartments: { title:'Small Apartment Kitchens', img: BASE+'small_kitchens.png' },
      mediumhomes: { title:'Medium Homes (2BHK / 3BHK Houses)', img: BASE+'2bhk-kitchen.png' },
      luxuryvillas: { title:'Luxury Villas / Farmhouses', img: BASE+'studios/7.jpg' },
      steelspecial: { title:'Steel Kitchen Special', img: BASE+'new-hero.jpg' },
      smartkitchen: { title:'Smart Kitchen', img: BASE+'new-story-3.avif' },
      colortrends: { title:'Color Trends', img: BASE+'new-section.webp' },
    };

    // ── Render page ─────────────────────────────────────────────────────────────
    const params = new URLSearchParams(window.location.search);
    const key = params.get('project') || 'smallapartments';`;

const regex = /\/\/ ── Project Data(?:.*?)\/\/ ── Render page[\s]*──+[\r\n]+(?:\s*)const params = new URLSearchParams\(window\.location\.search\);(?:\s*)const key = params\.get\('project'\) \|\| 'minskbelarus';/s;
content = content.replace(regex, replacement);
fs.writeFileSync(file, content);
console.log("Done");
