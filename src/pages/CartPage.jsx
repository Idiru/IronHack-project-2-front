import MainTitle from "../components/MainTitle";
import CartList from "../components/CartList";
import icono from "../assets/icono.svg";

export default function CartPage() {
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
        
      </div>
    </div>
  );
}
