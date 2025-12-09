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

// Single Template Image for ALL items as requested
const TEMPLATE_IMAGE = 'https://images.unsplash.com/photo-1589301760576-47f40569e6e3?auto=format&fit=crop&q=80&w=800';

// Helper for consistent images - ALL mapped to the template image
const IMAGES = {
  // South Indian
  idli: TEMPLATE_IMAGE,
  podiIdli: TEMPLATE_IMAGE,
  vada: TEMPLATE_IMAGE,
  rasamVada: TEMPLATE_IMAGE,
  sambarVada: TEMPLATE_IMAGE,
  dosa: TEMPLATE_IMAGE,
  pongal: TEMPLATE_IMAGE,
  upma: TEMPLATE_IMAGE,
  
  // Rice
  rice: TEMPLATE_IMAGE,
  biryani: TEMPLATE_IMAGE,
  curdRice: TEMPLATE_IMAGE,

  // Chaat
  paniPuri: TEMPLATE_IMAGE,
  chaat: TEMPLATE_IMAGE,
  bhel: TEMPLATE_IMAGE,
  samosa: TEMPLATE_IMAGE,
  pavBhaji: TEMPLATE_IMAGE,

  // Chinese
  chinese: TEMPLATE_IMAGE,
  friedRice: TEMPLATE_IMAGE,
  manchurian: TEMPLATE_IMAGE,
  paneer: TEMPLATE_IMAGE,
  soup: TEMPLATE_IMAGE,
  
  // North Indian
  northIndian: TEMPLATE_IMAGE,
  butterChicken: TEMPLATE_IMAGE,
  chole: TEMPLATE_IMAGE,
  
  // Rolls
  rolls: TEMPLATE_IMAGE,
  
  // Beverages
  beverage: TEMPLATE_IMAGE,
  roseMilk: TEMPLATE_IMAGE,
  badamMilk: TEMPLATE_IMAGE,
  coffee: TEMPLATE_IMAGE,
  tea: TEMPLATE_IMAGE,
  milkshake: TEMPLATE_IMAGE,
  
  // Desserts
  dessert: TEMPLATE_IMAGE,
  iceCream: TEMPLATE_IMAGE,
  
  // Combo
  combo: TEMPLATE_IMAGE,
};

export const MENU_ITEMS: MenuItem[] = [
  // --- SOUTH INDIAN TIFFIN (16 Items) ---
  { id: 'si-1', name: 'Medhu Vada (1 Pc)', price: 25, description: 'Crunchy on the outside, soft on the inside.', category: 'south-indian', image: IMAGES.vada, veg: true },
  { id: 'si-2', name: 'Idli (2 Pcs)', price: 30, description: 'Classic steamed rice cakes served with chutney.', category: 'south-indian', image: IMAGES.idli, veg: true },
  { id: 'si-3', name: 'Podi Idli', price: 45, description: 'Steaming idlis tossed in spicy gun powder and ghee.', category: 'south-indian', image: IMAGES.podiIdli, isBestseller: true, veg: true },
  { id: 'si-4', name: 'Rasam Vada', price: 40, description: 'Crispy vada soaked in spicy rasam.', category: 'south-indian', image: IMAGES.rasamVada, isSpicy: true, veg: true },
  { id: 'si-5', name: 'Sambar Vada', price: 40, description: 'Golden vada immersed in rich sambar.', category: 'south-indian', image: IMAGES.sambarVada, veg: true },
  { id: 'si-6', name: 'Curd Vada', price: 40, description: 'Vada soaked in seasoned yogurt.', category: 'south-indian', image: IMAGES.vada, veg: true },
  { id: 'si-7', name: 'Dosa', price: 50, description: 'Classic crispy crepe.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-8', name: 'Onion Dosa', price: 65, description: 'Topped with finely chopped onions.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-9', name: 'Masala Dosa', price: 70, description: 'Filled with spiced potato masala.', category: 'south-indian', image: IMAGES.dosa, isBestseller: true, veg: true },
  { id: 'si-10', name: 'Butter Dosa', price: 70, description: 'Roasted with generous butter.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-11', name: 'Rava Dosa', price: 75, description: 'Semolina based crispy dosa.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-12', name: 'Paper Dosa', price: 75, description: 'Paper thin and extra crispy.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-13', name: 'Set Dosa (2 Pcs)', price: 80, description: 'Soft and spongy dosas.', category: 'south-indian', image: IMAGES.dosa, veg: true },
  { id: 'si-14', name: 'Upma', price: 40, description: 'Savory semolina porridge.', category: 'south-indian', image: IMAGES.upma, veg: true },
  { id: 'si-15', name: 'Pongal', price: 50, description: 'Comforting lentil and rice dish.', category: 'south-indian', image: IMAGES.pongal, veg: true },
  { id: 'si-16', name: 'Special Pongal', price: 60, description: 'Loaded with cashews and ghee.', category: 'south-indian', image: IMAGES.pongal, veg: true },

  // --- RICE VARIETIES (6 Items) ---
  { id: 'rv-1', name: 'Lemon Rice', price: 60, description: 'Zesty lemon flavored rice.', category: 'rice', image: IMAGES.rice, veg: true },
  { id: 'rv-2', name: 'Tamarind Rice', price: 60, description: 'Tangy tamarind paste mix.', category: 'rice', image: IMAGES.rice, veg: true },
  { id: 'rv-3', name: 'Sambar Rice', price: 60, description: 'Rice mixed with flavorful sambar.', category: 'rice', image: IMAGES.rice, veg: true },
  { id: 'rv-4', name: 'Curd Rice', price: 60, description: 'Cooling yogurt rice with tempering.', category: 'rice', image: IMAGES.curdRice, veg: true },
  { id: 'rv-5', name: 'Bisi Bele Bath', price: 70, description: 'Spicy rice and lentil mash.', category: 'rice', image: IMAGES.rice, isSpicy: true, veg: true },
  { id: 'rv-6', name: 'Khara Pongal', price: 70, description: 'Spicy version of pongal.', category: 'rice', image: IMAGES.pongal, veg: true },

  // --- CHAAT CORNER (9 Items) ---
  { id: 'ch-1', name: 'Pani Puri (8 Pcs)', price: 40, description: 'Crispy puris with tangy water.', category: 'chaat', image: IMAGES.paniPuri, isBestseller: true, veg: true },
  { id: 'ch-2', name: 'Bhel Puri', price: 50, description: 'Puffed rice tossed with chutneys.', category: 'chaat', image: IMAGES.bhel, veg: true },
  { id: 'ch-3', name: 'Sev Puri', price: 50, description: 'Flat puris topped with potatoes and sev.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-4', name: 'Dahi Puri', price: 60, description: 'Stuffed puris with sweet yogurt.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-5', name: 'Samosa Chaat', price: 60, description: 'Crushed samosa with chole and curd.', category: 'chaat', image: IMAGES.samosa, veg: true },
  { id: 'ch-6', name: 'Masala Puri', price: 50, description: 'Crushed puris in hot peas masala.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-7', name: 'Aloo Tikki', price: 50, description: 'Spiced potato patties.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-8', name: 'Ragda Pattice', price: 60, description: 'Potato patties in white pea curry.', category: 'chaat', image: IMAGES.chaat, veg: true },
  { id: 'ch-9', name: 'Chaat Mix Plate', price: 80, description: 'Assortment of chaat items.', category: 'chaat', image: IMAGES.chaat, veg: true },

  // --- CHINESE (12 Items) ---
  { id: 'cn-1', name: 'Gobi Manchurian Dry', price: 110, description: 'Crispy cauliflower in tangy sauce.', category: 'chinese', image: IMAGES.manchurian, isBestseller: true, veg: true },
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

  // --- NORTH INDIAN (8 Items) ---
  { id: 'ni-1', name: 'Butter Naan', price: 40, description: 'Soft tandoor baked bread.', category: 'north-indian', image: IMAGES.northIndian, veg: true },
  { id: 'ni-2', name: 'Tandoori Roti', price: 30, description: 'Whole wheat tandoor bread.', category: 'north-indian', image: IMAGES.northIndian, veg: true },
  { id: 'ni-3', name: 'Chole Bhature', price: 120, description: 'Spicy chickpea curry with fried bread.', category: 'north-indian', image: IMAGES.chole, veg: true },
  { id: 'ni-4', name: 'Palak Paneer', price: 140, description: 'Paneer in spinach gravy.', category: 'north-indian', image: IMAGES.paneer, veg: true },
  { id: 'ni-5', name: 'Dal Makhani', price: 130, description: 'Creamy black lentils.', category: 'north-indian', image: IMAGES.northIndian, veg: true },
  { id: 'ni-6', name: 'Veg Biryani', price: 120, description: 'Aromatic rice with vegetables.', category: 'north-indian', image: IMAGES.biryani, veg: true },
  { id: 'ni-7', name: 'Raita', price: 30, description: 'Spiced yogurt side.', category: 'north-indian', image: IMAGES.curdRice, veg: true },
  { id: 'ni-8', name: 'Butter Chicken', price: 180, description: 'Rich tomato gravy chicken.', category: 'north-indian', image: IMAGES.butterChicken, veg: false },

  // --- ROLLS & WRAPS (6 Items) ---
  { id: 'rl-1', name: 'Veg Roll', price: 80, description: 'Mixed veg filling wrap.', category: 'rolls', image: IMAGES.rolls, veg: true },
  { id: 'rl-2', name: 'Paneer Roll', price: 100, description: 'Spiced paneer wrap.', category: 'rolls', image: IMAGES.rolls, veg: true },
  { id: 'rl-3', name: 'Egg Roll', price: 90, description: 'Egg filled wrap.', category: 'rolls', image: IMAGES.rolls, veg: false },
  { id: 'rl-4', name: 'Chicken Roll', price: 110, description: 'Chicken filled wrap.', category: 'rolls', image: IMAGES.rolls, veg: false },
  { id: 'rl-5', name: 'Special Veg Roll', price: 100, description: 'Loaded veg roll.', category: 'rolls', image: IMAGES.rolls, veg: true },
  { id: 'rl-6', name: 'Special Paneer Roll', price: 120, description: 'Loaded paneer roll.', category: 'rolls', image: IMAGES.rolls, veg: true },

  // --- BEVERAGES (6 Items) ---
  { id: 'bv-1', name: 'Badam Milk', price: 50, description: 'Saffron almond milk.', category: 'beverages', image: IMAGES.badamMilk, veg: true },
  { id: 'bv-2', name: 'Rose Milk', price: 40, description: 'Chilled rose flavored milk.', category: 'beverages', image: IMAGES.roseMilk, isBestseller: true, veg: true },
  { id: 'bv-3', name: 'Lassi Sweet', price: 50, description: 'Sweet yogurt drink.', category: 'beverages', image: IMAGES.beverage, veg: true },
  { id: 'bv-4', name: 'Lassi Salted', price: 50, description: 'Salted yogurt drink.', category: 'beverages', image: IMAGES.beverage, veg: true },
  { id: 'bv-5', name: 'Masala Chai', price: 20, description: 'Spiced Indian tea.', category: 'beverages', image: IMAGES.tea, veg: true },
  { id: 'bv-6', name: 'Filter Coffee', price: 25, description: 'Traditional South Indian coffee.', category: 'beverages', image: IMAGES.coffee, veg: true },

  // --- MILKSHAKES (3 Items) ---
  { id: 'ms-1', name: 'Vanilla Milkshake', price: 80, description: 'Classic vanilla shake.', category: 'milkshakes', image: IMAGES.milkshake, veg: true },
  { id: 'ms-2', name: 'Strawberry Milkshake', price: 90, description: 'Fruity strawberry shake.', category: 'milkshakes', image: IMAGES.milkshake, veg: true },
  { id: 'ms-3', name: 'Mango Milkshake', price: 100, description: 'Seasonal mango shake.', category: 'milkshakes', image: IMAGES.milkshake, veg: true },

  // --- DESSERTS (3 Items) ---
  { id: 'ds-1', name: 'Gulab Jamun (2 Pcs)', price: 40, description: 'Sweet dumplings in syrup.', category: 'desserts', image: IMAGES.dessert, veg: true },
  { id: 'ds-2', name: 'Ice Cream Scoop', price: 40, description: 'Choice of flavors.', category: 'desserts', image: IMAGES.iceCream, veg: true },
  { id: 'ds-3', name: 'Carrot Halwa', price: 50, description: 'Sweet carrot pudding.', category: 'desserts', image: IMAGES.dessert, veg: true },

  // --- COMBOS (3 Items) ---
  { id: 'cb-1', name: 'Mini Combo', price: 80, description: 'Idli, Vada, Sweet.', category: 'combos', image: IMAGES.combo, veg: true },
  { id: 'cb-2', name: 'Family Pack Rice', price: 250, description: 'Assorted rice for family.', category: 'combos', image: IMAGES.combo, veg: true },
  { id: 'cb-3', name: 'Chaat Combo', price: 120, description: 'Pani Puri + Bhel Puri.', category: 'combos', image: IMAGES.combo, veg: true },
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