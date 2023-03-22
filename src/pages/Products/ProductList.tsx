import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { Page } from "../../style";
import { selectProduct } from "./store/Product.selector";
import { Wrap } from "./style";

export const ProductList = () => {
  const products = useSelector(selectProduct);

  return (
    <>
      <Wrap>
        <Page>
          <Header
            title="LAST PRODUCT AVAILABLE"
            info="5 product available"
          ></Header>
          <div>
            {/* map di tutti i prodotti */}
            {products.map((product) => (
              <div key={product.id}>
                <div>
                  <img src="" alt="" />
                </div>
                <h3>{product.title}</h3>
                <span>{product.code}</span>
                <span>Qty:{product.Qty}</span>
                <span>Price:{product.Price}</span>
              </div>
            ))}
          </div>
        </Page>
      </Wrap>
    </>
  );
};

export default ProductList;
