import { useLoaderData } from 'react-router';

import Card from '@/components/Card';
import type { NormalizedRental } from '@/types/rental';

import './style.scss';

const Home = () => {
  const rentals = useLoaderData() as NormalizedRental[];

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-container">
        {rentals.map((rental) => (
          <Card key={rental.id} rental={rental} />
        ))}
      </div>
    </div>
  );
};

export default Home;
