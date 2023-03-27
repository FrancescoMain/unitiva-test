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
import { Product, Sizes } from "../../lib/type";
import { addToCart } from "../../redux/cart/cartSlice";
import { useEffect, useState } from "react";
import {
  addToProducts,
  removeToProducts,
  selectSize,
} from "../../redux/product/productSlice";
import { SizeProductPayload } from "../../redux/product/type";
import { resetCheckout } from "../../redux/checkout/checkoutSlice";

export const ProductList = () => {
  //dispatch generale
  const dispatch = useAppDispatch();
  // richiama lo stato del cart
  const cart = useAppSelector((state) => state.cart);
  //inserisce i porodotti in redux
  useEffect(() => {
    dispatch(addToProducts(Products));
  }, [Products, dispatch]);

  useEffect(() => {
    dispatch(resetCheckout());
  }, [dispatch]);
  //richiama lo stato dei prodotti
  const products = useAppSelector((state) => state.product);

  //aggiunge al carrello & rimuove dai prodotti
  const addToCartHandler = (product: Product) => {
    if (product.sizeSelected?.qty === 0 || !product.sizeSelected) {
      alert("Errore: seleziona una taglia disponibile");
      return;
    }
    dispatch(addToCart(product));
    dispatch(removeToProducts(product));
  };

  const handleSetSize = (size: Sizes, product: Product) => {
    const sizeProduct: SizeProductPayload = {
      size: size,
      product: product,
    };
    dispatch(selectSize(sizeProduct));
  };

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
                      {product.sizes.map((size, index) => (
                        <option
                          onClick={() => handleSetSize(size, product)}
                          key={index}
                          value={size.size}
                          disabled={size.qty === 0}
                        >
                          {size.size} ({size.qty} pz)
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
