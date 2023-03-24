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
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Page } from "../../style";
import { Wrap } from "../Products/style";

export const Cart = () => {
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
                <TRow>
                  <TD bordo={true}>Rayban</TD>
                  <TD>Rayban</TD>
                  <TD>Rayban</TD>
                  <TD>Rayban</TD>
                  <TD>Rayban</TD>
                </TRow>
              </tbody>
            </Table>
            <ShopBox>
              <Tot>
                Total pieces:<Num>7</Num>
              </Tot>
              <UnderLine></UnderLine>
              <Tot>
                Total Price:<Num>1200</Num>
              </Tot>
              <UnderLine></UnderLine>
            </ShopBox>
          </Box>
        </Page>
      </Wrap>
      <Footer productsCounter={`product added`} link="Go To Cart"></Footer>
    </>
  );
};
