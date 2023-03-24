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
  Danger,
} from "./style";
import { Products } from "../../lib/Products";
import Footer from "../../Components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Product } from "../../lib/type";
import { addToCart } from "../../redux/cart/cartSlice";
import { useEffect, useState } from "react";
import {
  addToProducts,
  removeToProducts,
} from "../../redux/product/productSlice";

export const ProductList = () => {
  //dispatch generale
  const dispatch = useAppDispatch();
  // richiama lo stato del cart
  const cart = useAppSelector((state) => state.cart);
  //inserisce i porodotti in redux
  useEffect(() => {
    dispatch(addToProducts(Products));
  }, [Products, dispatch]);
  //richiama lo stato dei prodotti
  const products = useAppSelector((state) => state.product);

  //aggiunge al carrello & rimuove dai prodotti
  const addToCartHandler = (product: Product) => {
    const productWithSize = { ...product, sizeSelected: selectedSize };
    dispatch(addToCart(productWithSize));
    dispatch(removeToProducts(product));
  };

  //seleziona la taglia
  const [selectedSize, setSelectedSize] = useState<number>();

  return (
    <>
      <Wrap>
        <Page>
          {/* HEADER */}
          <Header
            title="LAST PRODUCT AVAILABLE"
            info={`${products.length} product available`}
          />

          <Box>
            {/* map di tutti i prodotti */}
            {products.map((product) => (
              <Card key={product.id}>
                <ImgContainer>
                  <Image src={product.image} alt="" />
                </ImgContainer>
                <Info>
                  <Title>{product.title}</Title>
                  <Code>{product.code}</Code>
                  <Qty>
                    Qty:
                    {product.qty === 1 ? (
                      <Danger>{product.qty}</Danger>
                    ) : (
                      product.qty
                    )}{" "}
                    {product.qty < 4 ? (
                      <Danger>Last pieces aviable</Danger>
                    ) : (
                      ""
                    )}
                  </Qty>
                  <Price>
                    Price: €{" "}
                    {product.price.toLocaleString("it-IT", {
                      minimumFractionDigits: 2,
                    })}
                  </Price>
                  <form>
                    <SelectSize required defaultValue={"DEFAULT"} name="" id="">
                      <option value="DEFAULT" disabled>
                        Select size
                      </option>
                      {product.sizes.map((size) => (
                        <option
                          onClick={() => setSelectedSize(size)}
                          key={size}
                          value={size}
                        >
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
        productsCounter={` product added`}
        text="Go To Cart"
        link="/cart"
      ></Footer>
    </>
  );
};

export default ProductList;
