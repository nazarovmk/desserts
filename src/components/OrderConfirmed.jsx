function OrderConfirmed({ items, totalPrice, onClose }) {
  return (
    <div className="order-confirmed">
      <div className="order-confirmed-modal">
        <img
          className="order-confirmed-icon"
          src="./images/icon-order-confirmed.svg"
          alt="Order Confirmed"
        />
        <h1 className="order-confirmed-title">Order Confirmed!</h1>
        <p className="order-confirmed-subtitle">We hope you enjoy your food!</p>

        <div className="order-details">
          {items.map((item) => (
            <div key={item.id} className="order-item">
              <div className="order-smol-wrap">
                <img
                  className="orders-images"
                  src={item.image.thumbnail}
                  alt=""
                />
                <span>
                  <p>{item.name}</p>
                  <p>
                    {item.amount}x @${item.price.toFixed(2)}
                  </p>
                </span>
              </div>
              <p>${(item.price * item.amount).toFixed(2)}</p>
            </div>
          ))}
          <div className="order-total-row">
            <h3>Order Total</h3>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
        </div>

        <button className="order-btn btn" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmed;
