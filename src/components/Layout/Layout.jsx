import { Link, NavLink, Outlet } from 'react-router';
import './style.css';

function Layout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <nav className="nav">
          <Link to="/" className="nav-logo" />
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/rental/c67ab8a7">Rental Detail</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <div className="footer-content">
          <Link to="/" className="footer-logo" />
          <p>&copy; 2026 Kasa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
