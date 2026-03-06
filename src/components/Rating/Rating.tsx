import { Star } from 'lucide-react';

import './style.scss';

interface RatingProps {
  ratingValue?: number;
  locationRatingMax: number;
}

const Rating = ({ ratingValue = 0, locationRatingMax = 5 }: RatingProps) => {
  return (
    <div
      className="rating"
      aria-label={`Note : ${ratingValue} sur ${locationRatingMax}`}
    >
      {Array.from({ length: locationRatingMax }, (_, index) => (
        <Star
          key={index}
          size={30}
          className={index < ratingValue ? 'star filled' : 'star empty'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default Rating;
