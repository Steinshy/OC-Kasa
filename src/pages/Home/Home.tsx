import { useLoaderData } from 'react-router';

import Card from '@/components/Card';
import { fetchRentals } from '@/utils/kasa-api';

import './style.scss';

const Home = () => {
  const rentals = useLoaderData<Awaited<ReturnType<typeof fetchRentals>>>();
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
