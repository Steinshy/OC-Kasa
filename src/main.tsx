import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Layout from '@/components/Layout';
import Loader from '@/components/Loader';
import NotFound from '@/pages/NotFound';
import { basename } from '@/utils/config';
import { fetchRentals, fetchRentalById } from '@/utils/kasa-api';
import { showToast } from '@/utils/toast';

import './index.scss';

export const Home = lazy(() => import('@/pages/Home'));
export const About = lazy(() => import('@/pages/About'));
export const Rental = lazy(() => import('@/pages/Rental'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          loader: async () => {
            try {
              return await fetchRentals();
            } catch (error) {
              const message =
                error instanceof Error
                  ? error.message
                  : 'Failed to load rentals';
              showToast(message, 'error');
              throw error;
            }
          },
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
          errorElement: <NotFound />,
          hydrateFallbackElement: <Loader />,
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: '/rental/:id',
          loader: async ({ params }) => {
            try {
              return await fetchRentalById(params.id as string);
            } catch (error) {
              const message =
                error instanceof Error
                  ? error.message
                  : 'Failed to load rental';
              if (message.includes('Network')) {
                showToast(message, 'error');
              }
              throw error;
            }
          },
          element: (
            <Suspense fallback={<Loader />}>
              <Rental />
            </Suspense>
          ),
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
  { basename }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
