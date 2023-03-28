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
  RemoveButton,
  AddButton,
} from "./style";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Page } from "../../style";
import { Wrap } from "../Products/style";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect, useState } from "react";
import { Product } from "../../lib/type";
import { addToCart, removeToCart } from "../../redux/cart/cartSlice";
import {
  incrementProduct,
  removeToProducts,
} from "../../redux/product/productSlice";

export const Cart = () => {
  //dispatch generale
  const dispatch = useAppDispatch();

  //rimuove dal carrello e lo rimette nella lista prodotti
  const removeToCartHandler = (product: Product) => {
    const productSize = {
      size: product.sizeSelected || { size: 0, qty: 0 },
      product: product,
    };
    dispatch(removeToCart(product));
    dispatch(incrementProduct(productSize));
  };

  //aggiunge al carrello e rimuove dalla lista prodotti
  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
    dispatch(removeToProducts(product));
  };

  //stato del carrello
  const cart = useAppSelector((state) => state.cart);

  // hook di gestione prezzo totale
  const [totalPrice, setTotalPrice] = useState(0);

  //total price
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
          <Header title="CART" info={`${cart.length} product added`}></Header>
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
                {cart.map((product, index) => (
                  <TRow key={index}>
                    <TD bordo={true}>
                      {product.title}{" "}
                      <RemoveButton
                        onClick={() => {
                          removeToCartHandler(product);
                        }}
                      >
                        Remove
                      </RemoveButton>
                    </TD>
                    <TD>{product.code}</TD>
                    <TD>{product.sizeSelected?.size}</TD>
                    <TD>
                      {product.amount}
                      {product?.sizeSelected?.qty! > product.amount && (
                        <AddButton
                          onClick={() => {
                            addToCartHandler(product);
                          }}
                        >
                          Add
                        </AddButton>
                      )}
                    </TD>
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
