import { useDispatch, useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} from "../app/features/cartSlice";
import { useState } from "react";

function Dessert({ d }) {
  const [isAdded, setIsAdded] = useState(false);
  const handleClick = () => {
    setIsAdded(!isAdded);
    addDesserts();
  };

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.selectedDesserts);

  const dessertInCart = cartItems.find((item) => item.id === d.id);

  const addDesserts = () => {
    dispatch(
      addToCart({
        id: d.id,
        name: d.name,
        price: d.price,
        image: d.image,
        amount: 1,
      })
    );
  };

  return (
    <div className="dessert-container">
      <div>
        <picture>
          <source media="(min-width: 350px)" srcSet={d.image.mobile} />
          <source media="(min-width: 768px)" srcSet={d.image.tablet} />
          <source media="(min-width: 1025px)" srcSet={d.image.desktop} />
          <img
            className={`card-image ${
              dessertInCart && dessertInCart.amount > 0 ? "active" : ""
            }`}
            src={d.image.thumbnail}
            alt={d.name}
          />
        </picture>
      </div>

      <div>
        {!dessertInCart || dessertInCart.amount === 0 ? (
          <button className="card" onClick={handleClick}>
            <MdOutlineShoppingCart className="cart-icon" />
            Add to Cart
          </button>
        ) : (
          <div className="card-dec-inc">
            <IoRemoveCircleOutline
              className="Add"
              onClick={() => dispatch(decreaseQuantity(d.id))}
            />
            <span className="amount">{dessertInCart.amount}</span>
            <IoMdAddCircleOutline
              className="Add"
              onClick={() => dispatch(increaseQuantity(d.id))}
            />
          </div>
        )}
      </div>
      <div>
        <h4 className="category">{d.category}</h4>
        <h3 className="name">{d.name}</h3>
        <h3 className="price">${d.price}</h3>
      </div>
    </div>
  );
}

export default Dessert;
