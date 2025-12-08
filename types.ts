export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isBestseller?: boolean;
  isSpicy?: boolean;
  veg: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  source: 'Google' | 'Zomato' | 'Direct';
}

export interface Stats {
  label: string;
  value: string;
  icon: any;
}