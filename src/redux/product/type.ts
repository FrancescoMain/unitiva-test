import { Product, Sizes } from "../../lib/type";

export interface SizeProductPayload {
    size: Sizes;
    product: Product;
  }