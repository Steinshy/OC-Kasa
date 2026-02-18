import './style.css';
import { useLoaderData } from 'react-router';

import Card from '../../components/Card/card';

const Home = () => {
  const rentals = useLoaderData();
  const list = Array.isArray(rentals) ? rentals : [];

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-container">
        {list.map((rental, index) => (
          <Card key={rental?.id ?? index} rental={rental} />
        ))}
      </div>
    </div>
  );
};

export default Home;
