import styled from "styled-components";
import { MyButton } from "../../style";
import { Box } from "./style";

interface Props {
  productsCounter: string;
  link: string;
}

const Footer = ({ productsCounter, link }: Props) => {
  return (
    <Box>
      <div>
        <span>{productsCounter}</span>
      </div>
      <MyButton size="large">{link}</MyButton>{" "}
    </Box>
  );
};

export default Footer;
