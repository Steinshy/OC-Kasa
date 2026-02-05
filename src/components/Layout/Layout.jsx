import { Link, NavLink, Outlet } from 'react-router';
import './style.css';

function Layout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <nav className="nav">
          <Link to="/" className="nav-logo">
            Kasa
          </Link>
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
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
