import { useLoaderData } from 'react-router';
import './style.css';

const RentalDetail = () => {
  const rental = useLoaderData();

  return (
    <div className="rental-detail">
      <h1>{rental.title}</h1>
      <p>{rental.description}</p>
      <p>Location: {rental.location}</p>
      <p>Rating: {rental.rating}</p>
      <p>Host: {rental.host.name}</p>
      <p>Rating: {rental.rating}</p>
      <p>Equipments: {rental.equipments.join(', ')}</p>
      <p>Tags: {rental.tags.join(', ')}</p>
    </div>
  );
};

export default RentalDetail;
