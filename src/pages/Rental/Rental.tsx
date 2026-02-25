import { useLoaderData } from 'react-router';

import { buildRental } from '@/utils/kasa-api';
import Gallery from '@/components/Gallery';
import Host from '@/components/Host';
import Rating from '@/components/Rating';
import Tags from '@/components/Tags';
import type { Rental as RentalType } from '@/types/rental';

import './style.css';

const Rental = () => {
  const rental = useLoaderData() as RentalType;

  if (!rental || typeof rental !== 'object') {
    return null;
  }

  const {
    title,
    location,
    locationTags,
    description,
    host,
    images,
    totalImages,
    ratingValue,
    locationRatingMax,
  } = buildRental(rental);

  return (
    <div className="rental-page">
      <div className="rental-hero">
        <Gallery pictures={images} total={totalImages} />
      </div>
      <div className="rental-content">
        <div className="rental-main">
          <div className="rental-left">
            <h1 className="rental-title">{title ?? ''}</h1>
            <span className="rental-location">{location ?? ''}</span>
            <Tags tags={locationTags} />
          </div>
          <div className="rental-right">
            <Host host={host} />
            <Rating ratingValue={ratingValue} locationRatingMax={locationRatingMax} />
          </div>
        </div>
        <p className="rental-message">{description ?? ''}</p>
      </div>
    </div>
  );
};

export default Rental;
