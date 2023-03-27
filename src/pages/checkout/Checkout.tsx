import { wrap } from "module";
import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { MyButton, Page } from "../../style";
import { Card, Wrap } from "../Products/style";
import { Box, TY, Title } from "./style";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import {
  addToCheckout,
  resetCheckout,
} from "../../redux/checkout/checkoutSlice";
import { resetCart } from "../../redux/cart/cartSlice";
import { resetProduct } from "../../redux/product/productSlice";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart);
  const chekout = useAppSelector((state) => state.checkout);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addToCheckout(cart));
  }, [cart, dispatch]);
  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);
  useEffect(() => {
    dispatch(resetProduct());
  }, [dispatch]);

  return (
    <>
      <Wrap>
        <Page>
          <Header></Header>
          <Box>
            <TY>Thank You</TY>
            <Title>Your {chekout.counter} products will be shipped soon</Title>
            <MyButton
              onClick={() => {
                navigate("/");
              }}
            >
              BuyMore
            </MyButton>
          </Box>
        </Page>
      </Wrap>
      <Footer text="Buy More" link="/"></Footer>
    </>
  );
};

export default Checkout;
