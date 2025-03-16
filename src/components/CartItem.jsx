import { removeFromCart } from "../app/features/cartSlice";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item" key={item.id}>
      <div className="item-details">
        <p className="item-name">{item.name}</p>
        <div className="item-info">
          <p>{item.amount}x</p>
          <p>@${item.price}</p>
          <p>${(item.price * item.amount).toFixed(2)}</p>
        </div>
      </div>
      <img
        src="./images/icon-remove-item.svg"
        alt=""
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      />
    </div>
  );
}

export default CartItem;
