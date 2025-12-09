import { MenuItem, Category, Review } from './types';
import { Star, Users, Utensils, Clock } from 'lucide-react';

// Updated Categories based on full menu
export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'south-indian', name: 'South Indian', icon: '🥞' },
  { id: 'rice', name: 'Rice Varieties', icon: '🍚' },
  { id: 'chaat', name: 'Chaat', icon: '🌮' },
  { id: 'chinese', name: 'Chinese', icon: '🍜' },
  { id: 'north-indian', name: 'North Indian', icon: '🍛' },
  { id: 'rolls', name: 'Rolls & Wraps', icon: '🌯' },
  { id: 'beverages', name: 'Beverages', icon: '☕' },
  { id: 'milkshakes', name: 'Milkshakes', icon: '🥤' },
  { id: 'desserts', name: 'Desserts', icon: '🍨' },
  { id: 'combos', name: 'Combos', icon: '🍱' },
];

// Distinct Images for Categories (Pure Vegetarian Vibe)
const IMG_SOUTH = 'https://images.unsplash.com/photo-1589301760576-47f44a53f3bb?auto=format&fit=crop&q=80&w=800'; // Generic South Indian (Vada/Sambar)
const IMG_IDLI_NEW = 'https://thumbs.dreamstime.com/b/south-indian-traditional-tasty-nutritional-vegetarian-healthy-breakfast-idli-white-square-plate-coconut-tomato-sauce-271531179.jpg'; // Specific Idli Image
const IMG_CHAAT = 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800'; // Pani Puri
const IMG_CHINESE = 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800'; // Noodles/Manchurian
const IMG_NORTH = 'https://images.unsplash.com/photo-1631451457509-454a498df1c0?auto=format&fit=crop&q=80&w=800'; // Paneer/Gravy
const IMG_ROLLS = 'https://images.unsplash.com/photo-1695297515601-1536991ae14e?auto=format&fit=crop&q=80&w=800'; // Veg Roll
const IMG_DRINKS = 'https://images.unsplash.com/photo-1577805947697-b9843892555d?auto=format&fit=crop&q=80&w=800'; // Rose Milk
const IMG_DESSERT = 'https://images.unsplash.com/photo-1593701478446-43e02686e32c?auto=format&fit=crop&q=80&w=800'; // Gulab Jamun
const IMG_COMBO = 'https://images.unsplash.com/photo-1626500125627-7e335504a98b?auto=format&fit=crop&q=80&w=800'; // Veg Thali

// Specific Item Images
const IMG_VADA_SPECIFIC = 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/vada-recipe-1.jpg';
const IMG_PODI_IDLI_SPECIFIC = 'https://i.pinimg.com/736x/d7/8b/d3/d78bd30ea45da2492a2e03866b055f1a.jpg';
const IMG_RASAM_VADA_SPECIFIC = 'https://hebbarskitchen.com/wp-content/uploads/2021/01/rasam-vada-recipe-rasam-vadai-recipe-rasa-vadai-recipe-1-1024x683.jpeg';

// Helper for consistent images mapped to categories
const IMAGES = {
  // South Indian
  idli: IMG_IDLI_NEW,
  podiIdli: IMG_PODI_IDLI_SPECIFIC,
  vada: IMG_VADA_SPECIFIC,
  rasamVada: IMG_RASAM_VADA_SPECIFIC,
  sambarVada: IMG_SOUTH,
  dosa: 'https://images.unsplash.com/photo-1630384060421-a4323ce5663e?auto=format&fit=crop&q=80&w=800',
  pongal: IMG_SOUTH,
  upma: IMG_SOUTH,
  
  // Rice
  rice: IMG_SOUTH,
  biryani: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800', // Veg Biryani
  curdRice: IMG_SOUTH,

  // Chaat
  paniPuri: IMG_CHAAT,
  chaat: IMG_CHAAT,
  bhel: IMG_CHAAT,
  samosa: IMG_CHAAT,
  pavBhaji: 'https://images.unsplash.com/photo-1606491956689-2ea28c674675?auto=format&fit=crop&q=80&w=800',

  // Chinese
  chinese: IMG_CHINESE,
  friedRice: IMG_CHINESE,
  manchurian: IMG_CHINESE,
  paneer: IMG_CHINESE,
  soup: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
  
  // North Indian
  northIndian: IMG_NORTH,
  chole: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800',
  
  // Rolls
  rolls: IMG_ROLLS,
  
  // Beverages
  beverage: IMG_DRINKS,
  roseMilk: IMG_DRINKS,
  badamMilk: IMG_DRINKS,
  coffee: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=800',
  tea: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=800',
  milkshake: IMG_DRINKS,
  
  // Desserts
  dessert: IMG_DESSERT,
  iceCream: IMG_DESSERT,
  
  // Combo
  combo: IMG_COMBO,
};

export const MENU_ITEMS: MenuItem[] = [
  // --- SOUTH INDIAN TIFFIN ---
  { 
    id: 'si-1', 
    name: 'Medhu Vada (1 Pc)', 
    price: 25, 
    description: 'Crunchy on the outside, soft on the inside.', 
    category: 'south-indian', 
    image: IMAGES.vada, 
    veg: true,
    ingredients: ['Urad Dal', 'Green Chillies', 'Curry Leaves', 'Ginger', 'Onion'] 
  },
  { 
    id: 'si-2', 
    name: 'Idli (2 Pcs)', 
    price: 30, 
    description: 'Classic steamed rice cakes served with chutney.', 
    category: 'south-indian', 
    image: IMAGES.idli, 
    veg: true,
    ingredients: ['Rice Batter', 'Urad Dal'] 
  },
  { 
    id: 'si-3', 
    name: 'Podi Idli', 
    price: 45, 
    description: 'Steaming idlis tossed in spicy gun powder and ghee.', 
    category: 'south-indian', 
    image: IMAGES.podiIdli, 
    isBestseller: true, 
    veg: true,
    ingredients: ['Steamed Idlis', 'Homemade Podi', 'Pure Ghee', 'Curry Leaves'] 
  },
  { id: 'si-4', name: 'Rasam Vada', price: 40, description: 'Crispy vada soaked in spicy rasam.', category: 'south-indian', image: IMAGES.rasamVada, isSpicy: true, veg: true },
  { id: 'si-5', name: 'Sambar Vada', price: 40, description: 'Golden vada immersed in rich sambar.', category: 'south-indian', image: IMAGES.sambarVada, veg: true },
  { id: 'si-6', name: 'Curd Vada', price: 40, description: 'Vada soaked in seasoned yogurt.', category: 'south-indian', image: IMAGES.vada, veg: true },
  { id: 'si-7', name: 'Dosa', price: 50, description: 'Classic crispy crepe.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-8', name: 'Onion Dosa', price: 65, description: 'Topped with finely chopped onions.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { 
    id: 'si-9', 
    name: 'Masala Dosa', 
    price: 70, 
    description: 'Filled with spiced potato masala.', 
    category: 'south-indian', 
    image: IMAGES.dosa, 
    isBestseller: true, 
    veg: true,
    ingredients: ['Fermented Batter', 'Potato Masala', 'Onion', 'Cashews', 'Mustard Seeds'] 
  },
  { id: 'si-10', name: 'Butter Dosa', price: 70, description: 'Roasted with generous butter.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-11', name: 'Rava Dosa', price: 75, description: 'Semolina based crispy dosa.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-12', name: 'Paper Dosa', price: 75, description: 'Paper thin and extra crispy.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-13', name: 'Set Dosa (2 Pcs)', price: 80, description: 'Soft and spongy dosas.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-14', name: 'Upma', price: 40, description: 'Savory semolina porridge.', category: 'south-indian', image: IMAGES.upma, veg: true },
  { id: 'si-15', name: 'Pongal', price: 50, description: 'Comforting lentil and rice dish.', category: 'south-indian', image: IMAGES.pongal, veg: true },
  { id: 'si-16', name: 'Special Pongal', price: 60, description: 'Loaded with cashews and ghee.', category: 'south-indian', image: IMAGES.pongal, veg: true },

  // --- RICE VARIETIES ---
  { id: 'rv-1', name: 'Lemon Rice', price: 60, description: 'Zesty lemon flavored rice.', category: 'rice', image: IMAGES.rice, veg: true },
  { id: 'rv-2', name: 'Tamarind Rice', price: 60, description: 'Tangy tamarind paste mix.', category: 'rice', image: IMAGES.rice, veg: true },
  { id: 'rv-3', name: 'Sambar Rice', price: 60, description: 'Rice mixed with flavorful sambar.', category: 'rice', image: IMAGES.rice, veg: true },
  { id: 'rv-4', name: 'Curd Rice', price: 60, description: 'Cooling yogurt rice with tempering.', category: 'rice', image: IMAGES.curdRice, veg: true },
  { id: 'rv-5', name: 'Bisi Bele Bath', price: 70, description: 'Spicy rice and lentil mash.', category: 'rice', image: IMAGES.rice, isSpicy: true, veg: true },
  { id: 'rv-6', name: 'Khara Pongal', price: 70, description: 'Spicy version of pongal.', category: 'rice', image: IMAGES.pongal, veg: true },

  // --- CHAAT CORNER ---
  { 
    id: 'ch-1', 
    name: 'Pani Puri (8 Pcs)', 
    price: 40, 
    description: 'Crispy puris with tangy water.', 
    category: 'chaat', 
    image: IMAGES.paniPuri, 
    isBestseller: true, 
    veg: true,
    ingredients: ['Semolina Puris', 'Mint Water', 'Tamarind Chutney', 'Spiced Potato Mash', 'Boondi'] 
  },
  { id: 'ch-2', name: 'Bhel Puri', price: 50, description: 'Puffed rice tossed with chutneys.', category: 'chaat', image: IMAGES.bhel, veg: true },
  { id: 'ch-3', name: 'Sev Puri', price: 50, description: 'Flat puris topped with potatoes and sev.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-4', name: 'Dahi Puri', price: 60, description: 'Stuffed puris with sweet yogurt.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-5', name: 'Samosa Chaat', price: 60, description: 'Crushed samosa with chole and curd.', category: 'chaat', image: IMAGES.samosa, veg: true },
  { id: 'ch-6', name: 'Masala Puri', price: 50, description: 'Crushed puris in hot peas masala.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-7', name: 'Aloo Tikki', price: 50, description: 'Spiced potato patties.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-8', name: 'Ragda Pattice', price: 60, description: 'Potato patties in white pea curry.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-9', name: 'Chaat Mix Plate', price: 80, description: 'Assortment of chaat items.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-10', name: 'Raj Kachori Meal', price: 90, description: 'King of chaats! Jumbo crispy shell stuffed with bhalla, potato, yogurt & chutneys.', category: 'chaat', image: IMAGES.chaat, isBestseller: true, veg: true },

  // --- CHINESE ---
  { 
    id: 'cn-1', 
    name: 'Gobi Manchurian Dry', 
    price: 110, 
    description: 'Crispy cauliflower in tangy sauce.', 
    category: 'chinese', 
    image: IMAGES.manchurian, 
    isBestseller: true, 
    veg: true,
    ingredients: ['Cauliflower Florets', 'Corn Flour', 'Soy Sauce', 'Ginger', 'Garlic', 'Spring Onions'] 
  },
  { id: 'cn-2', name: 'Gobi Manchurian Gravy', price: 120, description: 'Cauliflower in saucy gravy.', category: 'chinese', image: IMAGES.manchurian, veg: true },
  { id: 'cn-3', name: 'Paneer Manchurian Dry', price: 130, description: 'Paneer cubes in spicy sauce.', category: 'chinese', image: IMAGES.paneer, veg: true },
  { id: 'cn-4', name: 'Paneer Manchurian Gravy', price: 140, description: 'Saucy paneer manchurian.', category: 'chinese', image: IMAGES.paneer, veg: true },
  { id: 'cn-5', name: 'Veg Fried Rice', price: 100, description: 'Wok-tossed rice with veggies.', category: 'chinese', image: IMAGES.friedRice, veg: true },
  { id: 'cn-6', name: 'Veg Noodles', price: 100, description: 'Stir-fried noodles.', category: 'chinese', image: IMAGES.chinese, veg: true },
  { id: 'cn-7', name: 'Chilli Paneer Dry', price: 130, description: 'Spicy paneer with peppers.', category: 'chinese', image: IMAGES.paneer, isSpicy: true, veg: true },
  { id: 'cn-8', name: 'Chilli Paneer Gravy', price: 140, description: 'Paneer in spicy chilli gravy.', category: 'chinese', image: IMAGES.paneer, veg: true },
  { id: 'cn-9', name: 'Paneer Butter Masala', price: 150, description: 'Rich creamy tomato gravy.', category: 'chinese', image: IMAGES.paneer, veg: true },
  { id: 'cn-10', name: 'Manchow Soup', price: 80, description: 'Spicy soup with fried noodles.', category: 'chinese', image: IMAGES.soup, veg: true },
  { id: 'cn-11', name: 'Hot Garlic Soup', price: 80, description: 'Spicy garlic flavored soup.', category: 'chinese', image: IMAGES.soup, veg: true },
  { id: 'cn-12', name: 'Fried Pav Bhaji', price: 90, description: 'Tava fried bhaji with pav.', category: 'chinese', image: IMAGES.pavBhaji, veg: true },

  // --- NORTH INDIAN ---
  { id: 'ni-1', name: 'Butter Naan', price: 40, description: 'Soft tandoor baked bread.', category: 'north-indian', image: IMAGES.northIndian, veg: true },
  { id: 'ni-2', name: 'Tandoori Roti', price: 30, description: 'Whole wheat tandoor bread.', category: 'north-indian', image: IMAGES.northIndian, veg: true },
  { id: 'ni-3', name: 'Chole Bhature', price: 120, description: 'Spicy chickpea curry with fried bread.', category: 'north-indian', image: IMAGES.chole, veg: true },
  { id: 'ni-4', name: 'Palak Paneer', price: 140, description: 'Paneer in spinach gravy.', category: 'north-indian', image: IMAGES.northIndian, veg: true },
  { id: 'ni-5', name: 'Dal Makhani', price: 130, description: 'Creamy black lentils.', category: 'north-indian', image: IMAGES.northIndian, veg: true },
  { 
    id: 'ni-6', 
    name: 'Veg Biryani', 
    price: 120, 
    description: 'Aromatic rice with vegetables.', 
    category: 'north-indian', 
    image: IMAGES.biryani, 
    veg: true,
    ingredients: ['Basmati Rice', 'Carrots', 'Beans', 'Green Peas', 'Biryani Spices', 'Saffron']
  },
  { id: 'ni-7', name: 'Raita', price: 30, description: 'Spiced yogurt side.', category: 'north-indian', image: IMAGES.curdRice, veg: true },

  // --- ROLLS & WRAPS ---
  { id: 'rl-1', name: 'Veg Roll', price: 80, description: 'Mixed veg filling wrap.', category: 'rolls', image: IMAGES.rolls, veg: true },
  { id: 'rl-2', name: 'Paneer Roll', price: 100, description: 'Spiced paneer wrap.', category: 'rolls', image: IMAGES.rolls, veg: true },
  { id: 'rl-5', name: 'Special Veg Roll', price: 100, description: 'Loaded veg roll.', category: 'rolls', image: IMAGES.rolls, veg: true },
  { id: 'rl-6', name: 'Special Paneer Roll', price: 120, description: 'Loaded paneer roll.', category: 'rolls', image: IMAGES.rolls, veg: true },

  // --- BEVERAGES ---
  { id: 'bv-1', name: 'Badam Milk', price: 50, description: 'Saffron almond milk.', category: 'beverages', image: IMAGES.badamMilk, veg: true },
  { 
    id: 'bv-2', 
    name: 'Rose Milk', 
    price: 40, 
    description: 'Chilled rose flavored milk.', 
    category: 'beverages', 
    image: IMAGES.roseMilk, 
    isBestseller: true, 
    veg: true,
    ingredients: ['Fresh Milk', 'Rose Syrup', 'Basil Seeds (Sabja)', 'Ice Cubes'] 
  },
  { id: 'bv-3', name: 'Lassi Sweet', price: 50, description: 'Sweet yogurt drink.', category: 'beverages', image: IMAGES.beverage, veg: true },
  { id: 'bv-4', name: 'Lassi Salted', price: 50, description: 'Salted yogurt drink.', category: 'beverages', image: IMAGES.beverage, veg: true },
  { id: 'bv-5', name: 'Masala Chai', price: 20, description: 'Spiced Indian tea.', category: 'beverages', image: IMAGES.tea, veg: true },
  { id: 'bv-6', name: 'Filter Coffee', price: 25, description: 'Traditional South Indian coffee.', category: 'beverages', image: IMAGES.coffee, veg: true },

  // --- MILKSHAKES ---
  { id: 'ms-1', name: 'Vanilla Milkshake', price: 80, description: 'Classic vanilla shake.', category: 'milkshakes', image: IMAGES.milkshake, veg: true },
  { id: 'ms-2', name: 'Strawberry Milkshake', price: 90, description: 'Fruity strawberry shake.', category: 'milkshakes', image: IMAGES.milkshake, veg: true },
  { id: 'ms-3', name: 'Mango Milkshake', price: 100, description: 'Seasonal mango shake.', category: 'milkshakes', image: IMAGES.milkshake, veg: true },

  // --- DESSERTS ---
  { id: 'ds-1', name: 'Gulab Jamun (2 Pcs)', price: 40, description: 'Sweet dumplings in syrup.', category: 'desserts', image: IMAGES.dessert, veg: true },
  { id: 'ds-2', name: 'Ice Cream Scoop', price: 40, description: 'Choice of flavors.', category: 'desserts', image: IMAGES.iceCream, veg: true },
  { id: 'ds-3', name: 'Carrot Halwa', price: 50, description: 'Sweet carrot pudding.', category: 'desserts', image: IMAGES.dessert, veg: true },

  // --- COMBOS ---
  { id: 'cb-1', name: 'Mini Combo', price: 80, description: 'Idli, Vada, Sweet.', category: 'combos', image: IMAGES.combo, veg: true },
  { id: 'cb-2', name: 'Family Pack Rice', price: 250, description: 'Assorted rice for family.', category: 'combos', image: IMAGES.combo, veg: true },
  { id: 'cb-3', name: 'Chaat Combo', price: 120, description: 'Pani Puri + Bhel Puri.', category: 'combos', image: IMAGES.combo, veg: true },
  { id: 'cb-4', name: 'Special Chaat Meal', price: 160, description: 'Ultimate chaat experience with Pani Puri, Sev Puri & Dahi Papdi.', category: 'combos', image: IMAGES.chaat, veg: true },
];

export const REVIEWS: Review[] = [
  { id: '1', name: 'Arun K.', rating: 5, comment: 'The rasam vada at 2AM after a late shift is pure comfort food! Best spot in West Mambalam.', date: '2023-10-15', source: 'Google' },
  { id: '2', name: 'Priya S.', rating: 5, comment: 'Amazing Ghee Podi Idli. The sambar is authentic Madras style. Very crowded but worth the wait.', date: '2023-11-02', source: 'Zomato' },
  { id: '3', name: 'Karthik R.', rating: 4, comment: 'Great late night snack option. Open till 3 AM is a lifesaver.', date: '2023-09-20', source: 'Google' },
  { id: '4', name: 'Sneha M.', rating: 5, comment: 'Pani puri is hygienic and tasty. Must try their rose milk to finish.', date: '2023-12-05', source: 'Direct' },
];

export const CONTACT_INFO = {
  phone: '9876543210', // For tel: links
  displayPhone: '+91 98765 43210',
  address: 'Opp. SRM Hospital, Arya Gowda Road, West Mambalam, Chennai - 600033',
  // Coordinates for Opposite SRM Hospital, West Mambalam: 13.0365° N, 80.2245° E
  googleMapsUrl: "https://maps.google.com/maps?q=13.0365,80.2245&z=17&output=embed",
  googleMapsLink: 'https://maps.app.goo.gl/iS5bRmdkWdujwfmf8',
};

export const QUICK_STATS = [
  { label: 'Rating', value: '4.5/5', icon: Star },
  { label: 'Reviews', value: '1.6k+', icon: Users },
  { label: 'Cost for Two', value: 'Pocket Friendly', icon: Utensils },
  { label: 'Timings', value: 'Till 3 AM', icon: Clock },
];