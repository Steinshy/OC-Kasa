import './style.css';
import { Link } from 'react-router';

function Card({ rental }) {
  const { id, title, cover } = rental;

  return (
    <Link to={`/rental/${id}`}>
      <div className="card">
        <img src={cover} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
}

export default Card;
