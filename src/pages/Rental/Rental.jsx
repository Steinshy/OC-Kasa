import { useLoaderData } from 'react-router';
import Tags from '@/components/Tags';

import './style.css';

const Rental = () => {
  const rental = useLoaderData();
  console.log(rental);

  return (
    <div className="rental-page">
      <div className="rental-hero">
        <img src={rental.cover} alt={rental.title} className="rental-image" />
      </div>
      <div className="rental-content">
        <h1 className="rental-title">{rental.title}</h1>
        <span className="rental-location">{rental.location}</span>
        <Tags tags={rental.tags} />
        <p className="rental-message">{rental.description}</p>
      </div>
    </div>
  );
};

export default Rental;
