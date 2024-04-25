import MainTitle from "../components/MainTitle";
import CartList from "../components/CartList";
import icono from "../assets/icono.svg";
import { useCart } from "../components/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(
      item.item_price.replace("€", "").replace(",", ".")
    ); //We should update the json to use only numbers
    return acc + price;
  }, 0);

  console.log(total);

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
        <div className="cart-container-total">
          <p>
            <span className="total">Total: </span>
            €{total}
          </p>
        </div>
      </div>
    </div>
  );
}
