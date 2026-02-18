import { useLoaderData } from 'react-router';
import Tags from '@/components/Tags';
import Gallery from '@/components/Gallery';
import { withErrorBoundary } from '@/hocs';
import './style.css';

const Rental = () => {
  const rental = useLoaderData();

  if (!rental || typeof rental !== 'object') {
    return null;
  }

  const { pictures, cover, title, location, tags, description } = rental;
  const images =
    Array.isArray(pictures) && pictures.length > 0
      ? pictures
      : [cover].filter(Boolean);
  const totalImages = images.length;

  return (
    <div className="rental-page">
      <div className="rental-hero">
        <Gallery pictures={images} total={totalImages} />
      </div>
      <div className="rental-content">
        <h1 className="rental-title">{title ?? ''}</h1>
        <span className="rental-location">{location ?? ''}</span>
        <Tags tags={tags} />
        <p className="rental-message">{description ?? ''}</p>
      </div>
    </div>
  );
};

export default withErrorBoundary(Rental);
