import { useLoaderData } from 'react-router';

import Gallery from '@/components/Gallery';
import Host from '@/components/Host';
import Rating from '@/components/Rating';
import Tags from '@/components/Tags';
import { withErrorBoundary } from '@/hocs';

import './style.css';

const Rental = () => {
  const rental = useLoaderData();

  if (!rental || typeof rental !== 'object') {
    return null;
  }

  const { pictures, cover, rating, title, location, tags, description } =
    rental;
  const images =
    Array.isArray(pictures) && pictures.length > 0
      ? pictures
      : [cover].filter(Boolean);
  const totalImages = images.length;
  const locationTags = Array.isArray(tags) ? tags : [];
  const locationRating = rating ?? 0;
  const ratingValue = Math.min(
    5,
    Math.max(0, Math.round(Number(locationRating)) || 0)
  );

  return (
    <div className="rental-page">
      <div className="rental-hero">
        <Gallery pictures={images} total={totalImages} />
      </div>
      <div className="rental-content">
        <h1 className="rental-title">{title ?? ''}</h1>
        <span className="rental-location">{location ?? ''}</span>
        <div className="rental-tags-rating">
          <Tags tags={locationTags} />
          <Rating rating={locationRating} ratingValue={ratingValue} />
        </div>
        <p className="rental-message">{description ?? ''}</p>
      </div>
    </div>
  );
};

export default withErrorBoundary(Rental);
