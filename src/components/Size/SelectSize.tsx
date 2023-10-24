import React from "react";

interface Size {
  text: string;
}
const SelectSize = ({ text }: Size) => {
  return (
    <div className="w-[30px] h-[30px] bg-yellow-600 rounded-[5px] flex justify-center items-center  hover:text-white">
      {text}
    </div>
  );
};

export default SelectSize;
