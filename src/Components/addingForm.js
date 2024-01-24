import { useState, useContext } from "react";
import CartContext from "../Store/cartContext";
const Form = (e) => {
  const contxt = useContext(CartContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityS, setQuantityS] = useState("");
  const [quantityM, setQuantityM] = useState("");
  const [quantityL, setQuantityL] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const quantityandlerS = (e) => {
    setQuantityS(e.target.value);
  };
  const quantityandlerM = (e) => {
    setQuantityM(e.target.value);
  };
  const quantityandlerL = (e) => {
    setQuantityL(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    contxt.AddItemsToStore({
      name,
      description,
      price: Number(price),
      S:quantityS,
      M:quantityM,
      L:quantityL
    });
    console.log(name, quantityS, quantityM,quantityL,price, description);
    setDescription('')
    setName('');
    setPrice('');
    setQuantityS('');
    setQuantityM('');
    setQuantityL('');

  };
  return (
    <form>
      <label htmlFor="name">Shoe</label>
      <input id="name" type="text" value={name} onChange={nameHandler} />
      <label htmlFor="Description">Description</label>
      <input
        id="Description"
        type="text"
        value={description}
        onChange={descriptionHandler}
      />
      <label htmlFor="price">Price</label>
      <input id="price" type="number" value={price} onChange={priceHandler} />
      <label htmlFor="qty"> (Qty)S</label>
      <input
        id="qty"
        type="number"
        value={quantityS}
        onChange={quantityandlerS}
        />
        <label>M</label>
      <input
        id="qty"
        type="number"
        value={quantityM}
        onChange={quantityandlerM}
      />
        <label>L</label>
      <input
        id="qty"
        type="number"
        value={quantityL}
        onChange={quantityandlerL}
      />
      <button onClick={addHandler}>Add Product</button>
      <hr></hr>
    </form>
  );
};
export default Form;
