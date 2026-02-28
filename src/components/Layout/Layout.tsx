import { Link, NavLink, Outlet, useNavigation } from 'react-router';

import Loader from '@/components/Loader';

import './style.css';

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="layout">
      <a href="#main-content" className="skip-to-main">
        Aller au contenu principal
      </a>
      <header className="layout-header">
        <nav className="nav">
          <Link to="/" className="nav-logo" aria-label="Kasa - Retour à l'accueil" />
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main-content" className="layout-main">
        {navigation.state === 'loading' ? <Loader /> : <Outlet />}
      </main>
      <footer className="layout-footer">
        <div className="footer-content">
          <Link to="/" className="footer-logo" aria-label="Kasa - Retour à l'accueil" />
          <p>&copy; 2026 Kasa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
