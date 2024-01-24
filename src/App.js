import Form from "./Components/addingForm";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import List from "./Components/list";
import CartContext from "./Store/contextProvider";
import Header from "./Components/Cart/Header";
function App() {
  const [showCart, setShowCart] = useState(false);

  const closeCart = () => {
    setShowCart(false);
  };
  const openCart = () => {
    setShowCart(true);
  };
  return (
    <CartContext>
      {showCart && <Cart onClosebtn={closeCart} />}
      <Header open={openCart} />
      <Form />
      <List />
    </CartContext>
  );
}

export default App;
