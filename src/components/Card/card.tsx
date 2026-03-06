import { Link } from 'react-router';

import type { NormalizedRental } from '@/types/rental';

import './style.scss';

interface CardProps {
  rental: NormalizedRental;
}

const Card = ({ rental }: CardProps) => {
  const { id, title, cover } = rental;

  return (
    <Link to={`/rental/${id}`}>
      <div className="card">
        <img
          src={cover}
          alt={title || 'Logement'}
          className="card-image"
          loading="lazy"
        />
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
};

export default Card;

