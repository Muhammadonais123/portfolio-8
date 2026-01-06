
export interface BurgerItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends BurgerItem {
  quantity: number;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}
