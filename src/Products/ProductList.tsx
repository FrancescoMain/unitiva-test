import { useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../store/type";
import { selectProduct } from "./store/Product.selector";

export const ProductList = () => {
  const products = useSelector(selectProduct);

  return (
    <div>
      <h1>Product List</h1>
      {/* map di tutti i prodotti */}
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.title + product.Price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
