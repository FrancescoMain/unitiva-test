import { Box, Line, Logo, Title } from "./style";
import { Props } from "./types";

const Navbar = ({ title, info }: Props) => {
  return (
    <header>
      <Logo>STORE LOGO</Logo>
      <Box>
        <Title>{title}</Title>
        <span>{info}</span>
      </Box>
      <Line />
    </header>
  );
};

export default Navbar;
