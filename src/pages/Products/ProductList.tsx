import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { Page } from "../../style";
import { selectProduct } from "./store/Product.selector";

export const ProductList = () => {
  const products = useSelector(selectProduct);

  return (
    <>
      <Page>
        <Header
          title="LAST PRODUCT AVAILABLE"
          info="5 product available"
        ></Header>
        <div>
          <h1>Product List</h1>
          {/* map di tutti i prodotti */}
          {products.map((product) => (
            <div key={product.id}>
              <span>{product.title + product.Price}</span>
            </div>
          ))}
        </div>
      </Page>
    </>
  );
};

export default ProductList;
