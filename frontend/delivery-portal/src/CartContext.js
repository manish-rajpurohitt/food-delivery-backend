import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){

    const [items, setItems] = React.useState([]);
    const addToCart = (product) =>{
        setItems((prev) => [...prev, product])
    }
    return (
        <CartContext.Provider value={{items, addToCart}}>{children}</CartContext.Provider>
    );
}
export default CartContext;