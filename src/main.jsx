import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Rental from './pages/Rental';
import { basename } from './utils/config.jsx';
import { fetchRentals, fetchRentalById } from './utils/kasa-api.jsx';

import './index.css';

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
          path: '/rental/:id',
          loader: async ({ params }) => await fetchRentalById(params.id),
          element: <Rental />,
          errorElement: <NotFound />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename }
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
