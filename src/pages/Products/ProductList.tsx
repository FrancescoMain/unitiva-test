import Header from "../../Components/Header/Header";
// import { useAppSelector } from "../../redux/store";
import { Page } from "../../style";
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
  MyButton,
} from "./style";
import { Products } from "../../lib/Products";
import {
  Button,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export const ProductList = () => {
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
                  <form action="">
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
                    <MyButton type="submit" variant="contained">
                      Add
                    </MyButton>
                  </form>
                </Info>
              </Card>
            ))}
          </Box>
        </Page>
      </Wrap>
    </>
  );
};

export default ProductList;
