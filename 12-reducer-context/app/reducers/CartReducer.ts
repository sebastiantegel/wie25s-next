/// Denna fils syfte är att förändra ett state med hjälp av en
/// reducerfunktion (CartReducer)

import type { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

/// Definiera en action med hjälp av type och payload
export interface ICartAction {
  type: ActionType;
  payload: string;
}

// Definiera vilka förändringar som skall kunna göras
export enum ActionType {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

// Vår reducer som innehåller all logik för förändra ett state
// Denna funktion får det nuvarande statet i form av cartItems
// och förändringen i form av action
export const CartReducer = (
  cartItems: CartItem[],
  action: ICartAction,
): CartItem[] => {
  //   if (action.type === ActionType.ADDED) {
  //     const productToAdd: Product = JSON.parse(action.payload);

  //     const foundItem = cartItems.find((ci) => ci.product.id === productToAdd.id);

  //     if (foundItem) {
  //       return cartItems.map((ci) => {
  //         if (ci.product.id === productToAdd.id)
  //           return { ...ci, amount: ci.amount + 1 };
  //         else return ci;
  //       });
  //     } else {
  //       return [...cartItems, { product: productToAdd, amount: 1 }];
  //     }
  //   }

  //   if (action.type === ActionType.REMOVED) {
  //     return cartItems.filter((ci) => ci.product.id !== +action.payload);
  //   }

  //   if (action.type === ActionType.INCREASED) {
  //     return cartItems.map((ci) => {
  //       if (ci.product.id === +action.payload)
  //         return { ...ci, amount: ci.amount + 1 };
  //       else return ci;
  //     });
  //   }

  //   if (action.type === ActionType.DECREASED) {
  //     return cartItems.map((ci) => {
  //       if (ci.product.id === +action.payload) {
  //         if (ci.amount > 1) {
  //           return { ...ci, amount: ci.amount - 1 };
  //         } else return ci;
  //       } else return ci;
  //     });
  //   }

  switch (action.type) {
    // Om action.type === ADDED
    case ActionType.ADDED: {
      // Gör om payload till en produkt genom JSON.parse.
      // Detta betyder att om vi använder ADDED måste payload innehålla
      // produkten som skall läggas till i varukorgen
      const productToAdd: Product = JSON.parse(action.payload);

      // Försök att hitta en produkt i varukorgen
      const foundItem = cartItems.find(
        (ci) => ci.product.id === productToAdd.id,
      );

      // Om den hittades
      if (foundItem) {
        // Förändra ett objekt i listan
        return cartItems.map((ci) => {
          if (ci.product.id === productToAdd.id)
            // Genom att ändra dess amount med + 1
            return { ...ci, amount: ci.amount + 1 };
          else return ci;
        });
      } else {
        // Om produkten inte fanns i listan, lägg till den med amount 1
        return [...cartItems, { product: productToAdd, amount: 1 }];
      }
    }

    // Om action.type === REMOVED
    case ActionType.REMOVED: {
      // Ta bort ett objekt ur listan genom att använda filter
      // + omvandlar en string till ett number
      return cartItems.filter((ci) => ci.product.id !== +action.payload);
    }

    // Om action.type === INCREASED
    case ActionType.INCREASED: {
      // Ändra ett objekt i lsitan
      return cartItems.map((ci) => {
        if (ci.product.id === +action.payload)
          // Med amount + 1
          return { ...ci, amount: ci.amount + 1 };
        else return ci;
      });
    }

    // om action.type === DECREASED
    case ActionType.DECREASED: {
      // Ändra ett objekt i listan, kanske...
      return cartItems.map((ci) => {
        if (ci.product.id === +action.payload) {
          // Om objektet har amount större än 1 (alltså 2 eller större)
          if (ci.amount > 1) {
            // Ändra amount med -1
            return { ...ci, amount: ci.amount - 1 };
          } else {
            // annars gör ingenting
            return ci;
          }
        } else return ci;
      });
    }

    default:
      return cartItems;
  }

  //   return cartItems;
};
