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

export interface ProductState {
  productsList: Array<ProductData>;
  displayed: Array<ProductData>;
  arrived: boolean;
}

export interface HomeState {
  filterModalOpen: boolean;
}

export interface CartState {
  items: Array<CartItem>;
}

export interface AppState {
  product: ProductState,
  home: HomeState,
  cart: CartState,
}
