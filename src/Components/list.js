import { useContext } from "react";
import CartContext from "../Store/cartContext";
const List = () => {
  const cartCtx = useContext(CartContext);
  const addItemCart = (item, size) => {
    cartCtx.AddItems(item, size);
  };
  return (
    <div>
      <h3>List Of Items</h3>

      <pre>Name        description             price                Quantity</pre>
      <ul>
        {cartCtx.StoreItems.map((item) => (
          <li key={Math.random()}>
            Name:{item.name} | Description:{item.description}|  Price:{item.price}
            <button
              onClick={() => addItemCart(item, "s")}
              disabled={item.S === "out of stock"}
            >
              Buy Small({item.S})
            </button>
            <button
              onClick={() => addItemCart(item, "m")}
              disabled={item.M === "out of stock"}
            >
              Buy Medium({item.M})
            </button>
            <button
              onClick={() => addItemCart(item, "l")}
              disabled={item.L === "out of stock"}
            >
              Buy Large({item.L})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
