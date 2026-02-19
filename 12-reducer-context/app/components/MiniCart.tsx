"use client";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const MiniCart = () => {
  // "Räck upp handen" och ta tag i värdet från contextet med varukorgen
  const { cart } = useContext(CartContext);

  const numberOfItemsInCart = cart.reduce((agg, curr) => agg + curr.amount, 0);

  return <>Items in cart: {numberOfItemsInCart}</>;
};
