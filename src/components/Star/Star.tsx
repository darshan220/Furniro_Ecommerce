import React from "react";
import star from "../../ui/star.png";
import starHalf from "../../ui/star-half.png";

interface StarProps {
  isFull: boolean;
}

const Star = ({ isFull }: StarProps) => (
  <img src={isFull ? star : starHalf} alt="star" className="w-5" />
);

export default Star;
