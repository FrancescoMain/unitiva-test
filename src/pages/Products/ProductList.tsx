import Header from "../../Components/Header/Header";
import { MyButton, Page } from "../../style";
import {
  ImgContainer,
  Wrap,
  Image,
  Box,
  Card,
  Title,
  Info,
  Code,
  Qty,
  Price,
  SelectSize,
} from "./style";
import { Products } from "../../lib/Products";
import Footer from "../../Components/Footer/Footer";
import { useAppDispatch } from "../../redux/store";
import { Product } from "../../lib/type";
import { addToCart } from "../../redux/cart/cartSlice";

export const ProductList = () => {
  const dispatch = useAppDispatch();

  const addToCartHandler = (product: Product) => dispatch(addToCart(product));

  return (
    <>
      <Wrap>
        <Page>
          <Header
            title="LAST PRODUCT AVAILABLE"
            info="5 product available"
          ></Header>
          <Box>
            {/* map di tutti i prodotti */}
            {Products.map((product) => (
              <Card key={product.id}>
                <ImgContainer>
                  <Image src={product.image} alt="" />
                </ImgContainer>
                <Info>
                  <Title>{product.title}</Title>
                  <Code>{product.code}</Code>
                  <Qty>Qty:{product.qty}</Qty>
                  <Price>
                    Price: €{" "}
                    {product.price.toLocaleString("it-IT", {
                      minimumFractionDigits: 2,
                    })}
                  </Price>
                  <form>
                    <SelectSize defaultValue={"DEFAULT"} name="" id="">
                      <option value="DEFAULT" disabled>
                        Select size
                      </option>
                      {product.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </SelectSize>
                    <MyButton
                      onClick={() => {
                        addToCartHandler(product);
                      }}
                      variant="contained"
                    >
                      Add
                    </MyButton>
                  </form>
                </Info>
              </Card>
            ))}
          </Box>
        </Page>
      </Wrap>
      <Footer productsCounter="0 product Added" link="Go To Cart"></Footer>
    </>
  );
};

export default ProductList;
