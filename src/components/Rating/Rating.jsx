import { Star } from 'lucide-react';
import './style.css';

const Rating = ({ rating = 0, ratingValue = 0 }) => {
  return (
    <div className="rental-rating" aria-label={`Note : ${ratingValue} sur 5`}>
      {[...Array(5)].map((_, index) => (
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
