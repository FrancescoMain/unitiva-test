import {
  Box,
  HeadCol,
  ModelCol,
  Table,
  TD,
  TRow,
  ShopBox,
  Tot,
  Num,
  UnderLine,
} from "./style";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Page } from "../../style";
import { Wrap } from "../Products/style";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect, useState } from "react";
import { Product } from "../../lib/type";
import { addToCart, removeToCart } from "../../redux/cart/cartSlice";
import { incrementProduct } from "../../redux/product/productSlice";

export const Cart = () => {
  const dispatch = useAppDispatch();

  const addToCartHandler = (product: Product) => {
    dispatch(removeToCart(product));
    dispatch(incrementProduct(product));
  };

  const cart = useAppSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, cur) => acc + cur.price * cur.amount,
      0
    );
    setTotalPrice(totalPrice);
  }, [cart]);
  return (
    <>
      <Wrap>
        <Page>
          <Header title="CART" info={` product added`}></Header>
          <Box>
            <h2>Your Cart Contains:</h2>
            <Table>
              <thead>
                <TRow>
                  <ModelCol>Model</ModelCol>
                  <HeadCol>SKU</HeadCol>
                  <HeadCol>Size</HeadCol>
                  <HeadCol>Qty</HeadCol>
                  <HeadCol>Price</HeadCol>
                </TRow>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <TRow>
                    <TD bordo={true}>
                      {product.title}{" "}
                      <button
                        onClick={() => {
                          {
                            addToCartHandler(product);
                          }
                        }}
                      >
                        Remove
                      </button>
                    </TD>
                    <TD>{product.code}</TD>
                    <TD>{product.sizeSelected?.size}</TD>
                    <TD>{product.amount}</TD>
                    <TD>
                      €{" "}
                      {product.price.toLocaleString("it-IT", {
                        minimumFractionDigits: 2,
                      })}
                    </TD>
                  </TRow>
                ))}
              </tbody>
            </Table>
            <ShopBox>
              <Tot>
                Total pieces:<Num>{cart.length}</Num>
              </Tot>
              <UnderLine></UnderLine>
              <Tot>
                Total Price:
                <Num>
                  €{" "}
                  {totalPrice.toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                  })}
                </Num>
              </Tot>
              <UnderLine></UnderLine>
            </ShopBox>
          </Box>
        </Page>
      </Wrap>
      <Footer
        productsCounter={`product added`}
        text="checkout"
        link="/checkout"
        backShow
      ></Footer>
    </>
  );
};
