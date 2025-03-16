import { useSelector } from "react-redux";
import { YourCart, DessertList } from "./components";

function App() {
  const { desserts, sellectedDsserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );
  console.log(sellectedDsserts, totalAmount, totalPrice);
  return (
    <main>
      <div className="App-wrapper">
        <DessertList desserts={desserts} />
        <YourCart />
      </div>
    </main>
  );
}

export default App;
