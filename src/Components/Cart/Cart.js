import Modal from "../Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cartContext";
import { useContext } from "react";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);

console.log(cartcntx.CartItems)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.CartItems.map((item) => (
        // <li>{item.name} {item.price} quantity:{item.eachQty}</li>
        <li key={`${Math.random()}`}>
          <div>
            <h3>{item.item.name}</h3>
            <h4>{item.item.description}</h4>
            <div className={classes.values}>
              <div className={classes.amount}>
                <h4>${item.item.price}</h4>
                <h3> S X{item.Small}</h3>
                <h3>M X{item.Medium}</h3>
                <h3>L X{item.Large}</h3>
                {/* <h3>{item.size}</h3> */}
              </div>
             
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );

  // console.log(cartItems)
  return (
    <Modal onClosebtn={props.onClosebtn}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{cartcntx.TotalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClosebtn}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
