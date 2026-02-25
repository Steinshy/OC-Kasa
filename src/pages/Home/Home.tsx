import { useLoaderData } from 'react-router';

import Card from '@/components/Card/card';
import type { Rental } from '@/types/rental';

import './style.css';

const Home = () => {
  const rentalsData = useLoaderData() as Rental[];
  const rentalsList = Array.isArray(rentalsData) ? rentalsData : [];

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-container">
        {rentalsList.map((rental, index) => (
          <Card key={rental?.id ?? index} rental={rental} />
        ))}
      </div>
    </div>
  );
};

export default Home;
