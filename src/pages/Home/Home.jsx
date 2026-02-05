import './style.css';
import { useLoaderData } from 'react-router';

const Home = () => {
  const rentals = useLoaderData();
  console.log(rentals);
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};

export default Home;
