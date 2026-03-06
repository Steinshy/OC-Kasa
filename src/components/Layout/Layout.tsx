import { Menu, X } from 'lucide-react';
import { useState, useCallback } from 'react';
import { Link, NavLink, Outlet, useNavigation } from 'react-router';

import Loader from '@/components/Loader';

import './style.scss';

const Layout = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <div className="layout">
      <a href="#main-content" className="skip-to-main">
        Aller au contenu principal
      </a>
      <header className="layout-header">
        <nav className="nav">
          <Link
            to="/"
            className="nav-logo"
            aria-label="Kasa - Retour à l'accueil"
          />
          <button
            type="button"
            className="nav-hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
          <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main-content" className="layout-main">
        {navigation.state === 'loading' ? <Loader /> : <Outlet />}
      </main>
      <footer className="layout-footer">
        <div className="footer-content">
          <Link
            to="/"
            className="footer-logo"
            aria-label="Kasa - Retour à l'accueil"
          />
          <p>&copy; 2026 Kasa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
