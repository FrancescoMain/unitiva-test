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
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Product } from "../../lib/type";
import { addToCart } from "../../redux/cart/cartSlice";
import { useState } from "react";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [currentProducts, setCurrentProducts] = useState(Products);
  const addToCartHandler = (product: Product) => {
    //rimuove un elemento dai current product
    setCurrentProducts(
      currentProducts.map((currentProduct) =>
        currentProduct.id === product.id && currentProduct.qty > 0
          ? { ...currentProduct, qty: currentProduct.qty - 1 }
          : currentProduct
      )
    );
    //aggiunge al carrello
    dispatch(addToCart(product));
  };

  return (
    <>
      <Wrap>
        <Page>
          <Header
            title="LAST PRODUCT AVAILABLE"
            info={`${currentProducts.length} product available`}
          ></Header>
          <Box>
            {/* map di tutti i prodotti */}
            {currentProducts.map((product) => (
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
                      disabled={product.qty === 0 ? true : false}
                      onClick={() => {
                        {
                          addToCartHandler(product);
                        }
                      }}
                      variant="contained"
                      color={product.qty !== 0 ? "primary" : "secondary"}
                    >
                      {product.qty === 0 ? "Added all" : "Add"}
                    </MyButton>
                  </form>
                </Info>
              </Card>
            ))}
          </Box>
        </Page>
      </Wrap>
      <Footer
        productsCounter={`${cart.length} product added`}
        link="Go To Cart"
      ></Footer>
    </>
  );
};

export default ProductList;
