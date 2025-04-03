"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { CardProps } from "@/types/cardProps";

interface ExtendedCardProps extends CardProps {
  onAddToCart?: (item: CardProps) => void;
}

const Card = (props: ExtendedCardProps) => {
  const { title, description, image, price, onAddToCart } = props;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(props);
    }
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
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
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
        </div>
      </div>
      <div className="mt-7 text-center">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        <div className="mt-2 text-left">
          <p className="text-gray-600 text-sm">{description}</p>
          <span className="text-gray-500 text-sm font-bold block mt-1">
            {" "}
            R$ {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
