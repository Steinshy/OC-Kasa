import './style.css';
import { Link } from 'react-router';

function Card({ rental }) {
  const {
    id,
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = rental;

  return (
    <Link to={`/rental/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
}

export default Card;
