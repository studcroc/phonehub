export interface ProductData {
  id: number;
  brand: string;
  model: string;
  image: string;
  description: string;
  price: number;
}

export interface CartItem extends ProductData {
  qty: number;
}
