import { Product, Sizes } from "../../lib/type";

export interface SizeProductPayload {
    size: string;
    product: Product;
  }

  export interface SizeObjProductPayload {
    size: Sizes;
    product: Product;
  }