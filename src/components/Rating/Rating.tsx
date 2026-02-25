import { Star } from 'lucide-react';

import './style.css';

const Rating = ({ ratingValue = 0, locationRatingMax = 5 }) => {
  return (
    <div className="rental-rating" aria-label={`Note : ${ratingValue} sur ${locationRatingMax}`}>
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
