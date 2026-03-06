import { useLoaderData } from 'react-router';

import Collapse from '@/components/Collapse';
import Host from '@/components/Host';
import Rating from '@/components/Rating';
import RentalGallery from '@/components/RentalGallery';
import Tags from '@/components/Tags';
import './style.scss';

const Rental = () => {
  const {
    title,
    location,
    locationTags,
    description,
    equipments,
    host,
    images,
    ratingValue,
    locationRatingMax,
  } = useLoaderData();

  return (
    <div className="rental-page">
      <div className="rental-hero">
        <RentalGallery pictures={images} />
      </div>
      <div className="rental-content">
        <div className="rental-main">
          <div className="rental-left">
            <h1 className="rental-title">{title}</h1>
            <span className="rental-location">{location}</span>
            <Tags tags={locationTags} />
          </div>
          <div className="rental-right">
            <Host host={host} />
            <Rating
              ratingValue={ratingValue}
              locationRatingMax={locationRatingMax}
            />
          </div>
        </div>
        <div className="rental-collapses">
          <Collapse key="description" title="Description">
            {description}
          </Collapse>
          <Collapse key="equipements" title="Équipements" items={equipments} />
        </div>
      </div>
    </div>
  );
};

export default Rental;
