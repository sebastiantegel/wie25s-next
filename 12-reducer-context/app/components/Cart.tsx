"use client";

import { useMemo, useReducer } from "react";
import { Product } from "../models/Product";
import { ActionType, CartReducer } from "../reducers/CartReducer";

const products: Product[] = [
  { id: 1, name: "Fotboll", price: 100 },
  { id: 2, name: "Golfboll", price: 50 },
  { id: 3, name: "Basketboll", price: 200 },
];

export const Cart = () => {
  // Använd vår reducer istället för state
  const [cart, dispatch] = useReducer(CartReducer, []);

  // Funktion för att räkna ut totalen
  const calcTotal = useMemo(() => {
    let sum = 0;

    cart.forEach((ci) => {
      sum += ci.amount * ci.product.price;
    });

    return sum;
  }, [cart]);

  return (
    <>
      <div>
        <ul>
          {cart.map((ci) => (
            <li key={ci.product.id} className="flex gap-4 items-center">
              <button
                className="border border-pink-500 rounded p-2"
                onClick={() => {
                  dispatch({
                    type: ActionType.DECREASED,
                    payload: ci.product.id.toString(),
                  });
                }}
              >
                -
              </button>
              <span>
                {ci.product.name} - {ci.amount} st -{" "}
                <span>{ci.product.price * ci.amount} kr</span>
              </span>
              <button
                className="border border-green-500 rounded p-2"
                onClick={() => {
                  dispatch({
                    type: ActionType.INCREASED,
                    payload: ci.product.id.toString(),
                  });
                }}
              >
                +
              </button>
              <button
                className="border border-red-500 rounded p-2"
                onClick={() => {
                  dispatch({
                    type: ActionType.REMOVED,
                    payload: ci.product.id.toString(),
                  });
                }}
              >
                Ta bort
              </button>
            </li>
          ))}
        </ul>
        <section>
          <span>Totalt:</span>
          <span className="text-blue-500 text-4xl">{calcTotal}</span>
        </section>
      </div>
      <div>
        {products.map((p) => (
          <div key={p.id} className="flex gap-4 items-center">
            <h3>{p.name}</h3>
            <span>{p.price} kr</span>
            <button
              className="border border-amber-300 p-2 rounded"
              onClick={() => {
                dispatch({
                  type: ActionType.ADDED,
                  payload: JSON.stringify(p),
                });
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
