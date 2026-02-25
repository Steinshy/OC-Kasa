import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Layout from './components/Layout';
import Loader from './components/Loader';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Rental from './pages/Rental';
import { basename } from './utils/config';
import { fetchRentals, fetchRentalById } from './utils/kasa-api';

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
          errorElement: <NotFound />,
          hydrateFallbackElement: <Loader />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: '/rental/:id',
          loader: async ({ params }) =>
            await fetchRentalById(params.id as string),
          element: <Rental />,
          errorElement: <NotFound />,
          hydrateFallbackElement: <Loader />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename },
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
