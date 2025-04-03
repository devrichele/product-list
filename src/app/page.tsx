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
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <div className="bg-orange-50 min-h-screen p-4">
      <h2 className="text-[20px] text-orange-600 font-bold ms-8 mb-4">
        Desserts
      </h2>

      <div className="flex gap-6">
        <div className="flex flex-wrap gap-6 flex-1">
          {desserts.map((dessert) => (
            <Card
              key={dessert.title}
              {...dessert}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="w-[320px]">
          <ModalCarrinho cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
}
