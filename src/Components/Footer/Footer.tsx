import styled from "styled-components";
import { CartProduct } from "../../redux/cart/cartSlice";
import { useAppSelector } from "../../redux/store";
import { MyButton } from "../../style";
import { Box } from "./style";

interface Props {
  productsCounter: string;
  link: string;
}

const Footer = ({ productsCounter, link }: Props) => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Box>
      <div>
        <span>
          {cart.length}
          {productsCounter}
        </span>
      </div>
      <MyButton
        color={cart.length === 0 ? "secondary" : "primary"}
        disabled={cart.length === 0 ? true : false}
        size="large"
      >
        {link}
      </MyButton>{" "}
    </Box>
  );
};

export default Footer;
