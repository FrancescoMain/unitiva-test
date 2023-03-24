import styled from "styled-components";
import { CartProduct } from "../../redux/cart/cartSlice";
import { useAppSelector } from "../../redux/store";
import { MyButton } from "../../style";
import { Box } from "./style";
import { useNavigate } from "react-router-dom";

interface Props {
  productsCounter: string;
  link: string;
}

const Footer = ({ productsCounter, link }: Props) => {
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <Box>
      <div>
        <span>
          {cart.length} {productsCounter}
        </span>
      </div>
      <MyButton
        color={cart.length === 0 ? "secondary" : "primary"}
        disabled={cart.length === 0 ? true : false}
        size="large"
        onClick={() => {
          navigate("/cart");
        }}
      >
        {link}
      </MyButton>{" "}
    </Box>
  );
};

export default Footer;
