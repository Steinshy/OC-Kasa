import { useLoaderData } from 'react-router';
import './style.css';

const RentalDetail = () => {
  const rental = useLoaderData();

  return (
    <div className="rental-detail-page">
      <h1 className="rental-title">{rental.title}</h1>
      <p className="rental-message">{rental.description}</p>
    </div>
  );
};

export default RentalDetail;
