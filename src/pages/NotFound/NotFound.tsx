import { Link } from 'react-router';

import './style.scss';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link className="error-link" to="/">
        Retour &agrave; l&apos;accueil
      </Link>
    </div>
  );
};

export default NotFound;
