import MainTitle from "../components/MainTitle";
import CartList from "../components/CartList";
import icono from "../assets/icono.svg";
import { useCart } from "../components/CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function CartPage() {
  const { cart, total } = useCart();

  

  console.log(cart)

  return (
    <div>
      <MainTitle>
        <img
          src={icono}
          alt="Verde"
          style={{ width: "auto", height: "1em", verticalAlign: "bottom" }}
        />
        Cart
      </MainTitle>
      <div className="cart-container">
        <CartList />
        <hr className="cart-divider" />
       { total == 0 ? "": <div className="cart-container-total">
          <p>
            <span className="total">Total: </span>
            €{total}
          </p>
          <Link to="/checkout">
          <Button
            className="button"
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#3D6C00", width: "150px" }}
          >
            Checkout
          </Button>
          </Link>
        </div>}
      </div>
    </div>
  );
}
