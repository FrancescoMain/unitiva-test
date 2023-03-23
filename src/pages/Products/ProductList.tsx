import Header from "../../Components/Header/Header";
import { useAppSelector } from "../../store/store";
import { Page } from "../../style";
import { ImgContainer, Wrap, Image } from "./style";

export const ProductList = () => {
  const products = useAppSelector((state) => state.product);

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
                <ImgContainer>
                  <Image src={product.image} alt="" />
                </ImgContainer>
                <h3>{product.title}</h3>
                <span>{product.code}</span>
                <span>Qty:{product.qty}</span>
                <span>Price:{product.price}</span>
              </div>
            ))}
          </div>
        </Page>
      </Wrap>
    </>
  );
};

export default ProductList;
