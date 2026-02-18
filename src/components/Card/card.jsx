import './style.css';
import { Link } from 'react-router';

function Card({ rental }) {
  if (!rental || typeof rental !== 'object') return null;

  const { id, title, cover } = rental;
  if (!id) return null;

  return (
    <Link to={`/rental/${id}`}>
      <div className="card">
        <img src={cover || ''} alt={title || 'Logement'} className="card-image" />
        <h3 className="card-title">{title ?? ''}</h3>
      </div>
    </Link>
  );
}

export default Card;
