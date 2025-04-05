"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { CardProps } from "@/types/cardProps";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";



interface ExtendedCardProps extends CardProps {
  quantity?: number;
  onAddToCart?: (item: CardProps) => void;
  onRemoveFromCart?: (item: CardProps) => void;
}


const Card = (props: ExtendedCardProps) => {
  const {
    title,
    description,
    image,
    price,
    onAddToCart,
    onRemoveFromCart,
    quantity = 0,
  } = props;

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(props);
  };

  const handleRemoveFromCart = () => {
    if (onRemoveFromCart) onRemoveFromCart(props);
  };

  return (
    <div className="relative bg-white p-3 rounded-lg shadow-md w-[250px] mx-auto">
      <div className="relative">
        <Image
          className="w-full h-40 object-cover rounded-md"
          src={image}
          alt={title}
          width={200}
          height={300}
        />

        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          {/* Botão Add to Cart */}
          {quantity === 0 && (
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="w-[150px] flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-full py-[6px] hover:bg-gray-100 transition"
            >
              <ShoppingCart className="w-4 h-4 text-orange-500" />
              <span className="text-gray-800 font-medium text-sm">
                Add to Cart
              </span>
            </Button>
          )}

          {/* Se tiver quantidade, mostra botões de + e - */}
          {quantity > 0 && (
            <div className="w-[150px] flex items-center justify-between gap-2 bg-orange-600 border border-gray-300 rounded-full py-[6px] px-4 text-white font-bold">
              <IoRemoveCircleOutline
                onClick={handleRemoveFromCart}
                className="w-5 h-5 cursor-pointer"
              />
              {quantity}
              <IoAddCircleOutline
                onClick={handleAddToCart}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        <div className="mt-2 text-left">
          <p className="text-gray-600 text-sm">{description}</p>
          <span className="text-gray-500 text-sm font-bold block mt-1">
            R$ {price}
          </span>
        </div>
      </div>
    </div>
  );
};


export default Card;