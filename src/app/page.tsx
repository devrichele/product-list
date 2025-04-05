"use client";

import Card from "../components/Card";
import ModalCarrinho from "../components/ModalCarrinho";
import { useState } from "react";
import { desserts, Dessert } from "../mocks/mocks";

export default function Home() {
  // estado para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState<Dessert[]>([]);
  // função para adicionar itens ao carrinho

  // prevent representa a lista de itens que já estão no carrinho
  // ... os itens já estão no carrinho
  // item adiciona um novo item ao cattinho
  const handleAddToCart = (item: Dessert) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.title === item.title);
      if (exists) {
        return prev.map((i) =>
          i.title === item.title ? { ...i, quantity: (i.quantity || 0) + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (item: Dessert) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.title === item.title ? { ...i, quantity: (i.quantity || 1) - 1 } : i
        )
        .filter((i) => (i.quantity || 0) > 0)
    );
  };


  return (
    <div className="bg-orange-50 min-h-screen p-4">
      <h2 className="text-[20px] text-orange-600 font-bold ms-8 mb-4">
        Desserts
      </h2>

      <div className="flex gap-6">
        <div className="flex flex-wrap gap-6 flex-1">
          {desserts.map((dessert) => {
            const itemInCart = cartItems.find(
              (item) => item.title === dessert.title
            );
            const quantity = itemInCart?.quantity || 0;

            return (
              <Card
                key={dessert.title}
                {...dessert}
                quantity={quantity}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            );
          })}
        </div>

        <div className="w-[320px]">
          <ModalCarrinho cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
}
