import { useAppSelector } from "../../redux/store";
import { MyButton } from "../../style";
import { Box, Wrap, Back } from "./style";
import { useNavigate } from "react-router-dom";
interface Props {
  productsCounter?: string;
  link: string;
  text: string;
  backShow?: boolean;
}

const Footer = ({ productsCounter, link, text, backShow }: Props) => {
  const cart = useAppSelector((state) => state.cart);
  const checkout = useAppSelector((state) => state.checkout.counter);
  const navigate = useNavigate();

  return (
    <Box>
      <div>
        {backShow && (
          <Back
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </Back>
        )}
      </div>

      <Wrap>
        <div>
          {productsCounter && (
            <span>
              {cart.length} {productsCounter}
            </span>
          )}
        </div>
        <MyButton
          color={cart.length !== 0 || checkout !== 0 ? "primary" : "secondary"}
          disabled={cart.length !== 0 || checkout !== 0 ? false : true}
          size="large"
          onClick={() => {
            navigate(link);
          }}
        >
          {text}
        </MyButton>{" "}
      </Wrap>
    </Box>
  );
};

export default Footer;
