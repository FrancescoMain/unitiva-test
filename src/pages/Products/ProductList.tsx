import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { selectProduct } from "./store/Product.selector";

export const ProductList = () => {
  const products = useSelector(selectProduct);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>Product List</h1>
        {/* map di tutti i prodotti */}
        {products.map((product) => (
          <div key={product.id}>
            <span>{product.title + product.Price}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
