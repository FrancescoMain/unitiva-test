import styled from "styled-components";
import { MyButton } from "../../style";
import { Box } from "./style";

const Footer = () => {
  return (
    <Box>
      <div>
        <span>0 product Added</span>
      </div>
      <MyButton size="large">Go To Cart</MyButton>{" "}
    </Box>
  );
};

export default Footer;
