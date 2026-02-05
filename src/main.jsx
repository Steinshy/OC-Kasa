import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';

import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RentalDetail from './pages/RentalDetail';
import { basename } from './utils/config.jsx';
import { fetchRentals, fetchRentalById } from './utils/kasa-api.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          loader: async () => await fetchRentals(),
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
    {
      path: '/rental/:id',
      loader: async ({ params }) => await fetchRentalById(params.id),
      element: <RentalDetail />,
      errorElement: <NotFound />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  { basename }
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
