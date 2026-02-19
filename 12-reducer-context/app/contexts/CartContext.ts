import { createContext, Dispatch } from "react";
import { CartItem } from "../models/CartItem";
import { ICartAction } from "../reducers/CartReducer";

type CartContextType = {
  cart: CartItem[];
  dispatch: Dispatch<ICartAction>;
};

// Skapa ett context som gör att vi kan använda vår varukorg överallt
export const CartContext = createContext<CartContextType>({
  cart: [],
  dispatch: () => {},
});
