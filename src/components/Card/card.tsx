import { Link } from 'react-router';

import type { Rental } from '@/types/rental';

import './style.css';

interface CardProps {
  rental: Rental;
}

const Card = ({ rental }: CardProps) => {
  const { id, title, cover } = rental;
  if (!id) return null;

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
