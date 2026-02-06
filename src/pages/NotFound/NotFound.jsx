import './style.css';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error-link" to="/">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
