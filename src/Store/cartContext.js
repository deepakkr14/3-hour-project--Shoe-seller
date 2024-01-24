import React from "react"
const CartContext= React.createContext({
    CartItems:[],
    TotalPrice:0,
    AddItems:(name)=>{},
    StoreItems:[],
    AddItemsToStore:(name)=>{},
    TotalQuantity:0
})


// const StoreComtext=React.createContext({
//     StoreItems:[],
//     AddItemsToStore:(name)=>{},
  
    
// })
export default CartContext;