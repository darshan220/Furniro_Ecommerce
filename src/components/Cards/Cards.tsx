import React from "react";
import { productCards } from "../../utils/constants";

const Cards = () => {
  return (
    <div className="w-full h-full border-t border-zinc-300">
      <div className="flex items-center justify-center text-4xl m-10">
        Related Products
      </div>
      <div className="w-full flex gap-12 justify-center max-md:flex-col max-md:items-center ">
        {productCards.map((item) => {
          const { src, title, description, price, discount } = item;
          return (
            <div className="p-2">
              <img
                src={src}
                alt={title}
                className="w-[285px] h-[301px] object-cover rounded-sm"
              />
              <div className="bg-gray-100 p-5">
                <div className="text-neutral-700 text-2xl font-semibold">
                  {title}
                </div>
                <div className="text-zinc-500 text-base font-medium">
                  {description}
                </div>
                <div className="flex gap-12 text-neutral-700 text-xl font-semibold">
                  Rp {price.toFixed(2)}
                  {discount && (
                    <div className="text-zinc-400 text-base font-normal">
                      Rp {discount?.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center text-4xl m-10">
        <button className="text-yellow-600 w-[245px] h-12 bg-white border border-yellow-600 text-sm">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Cards;
