import Star from "./Star";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <Star key={index} isFull={true} />
  ));

  if (hasHalfStar) {
    stars.push(<Star key="half" isFull={false} />);
  }

  return <div className="flex flex-row gap-2 h-5">{stars}</div>;
};

export default StarRating;
