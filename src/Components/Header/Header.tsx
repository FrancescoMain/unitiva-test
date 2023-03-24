import { useAppSelector } from "../../redux/store";
import { Box, Line, Logo, Title } from "./style";
import { Props } from "./types";

const Navbar = ({ title, info }: Props) => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <header>
      <Logo>STORE LOGO</Logo>
      <Box>
        <Title>{title}</Title>
        <span>
          {cart.length}

          {info}
        </span>
      </Box>
      <Line />
    </header>
  );
};

export default Navbar;
