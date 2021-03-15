export interface Product {
  id: number;
  name: string;
  qty: number;
  price: number;
  productDetails: ProductDetails;
}

export interface ProductDetails {
  id?: number;
  dimension?: string;
  partNumber: string;
  weight?: number;
  manufacturer?: string;
  origin?: string;
}
export interface UpdateProduct {
  name?: string;
  qty?: number;
  price?: number;
  dimension?: string;
  partNumber?: string;
  weight?: number;
  manufacturer?: string;
  origin?: string;
}
