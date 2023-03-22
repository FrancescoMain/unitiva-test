import React from "react";
import { Box, Line, Logo, Title } from "../../pages/Products/style";
import { Page } from "../../style";

interface Props {
  title: string;
  info: string;
}

const Navbar = ({ title, info }: Props) => {
  return (
    <Page>
      <header>
        <Logo>STORE LOGO</Logo>
        <Box>
          <Title>{title}</Title>
          <span>{info}</span>
        </Box>
        <Line />
      </header>
    </Page>
  );
};

export default Navbar;
