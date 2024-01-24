import CartContext from "../../Store/cartContext";
import { useContext } from "react";
const Header = (props) => {
  const contxt = useContext(CartContext);
  return (
    <button onClick={props.open}>
      Open Shopping Cart({contxt.TotalQuantity})
    </button>
  );
};
export default Header;
