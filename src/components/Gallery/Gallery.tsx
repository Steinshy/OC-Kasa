import useGalleryNavigation from '@/hooks/use-gallery-navigation';
import { optimizeImageUrl } from '@/utils/kasa-api';
import './style.scss';

interface GalleryProps {
  pictures?: string[];
}

const Gallery = ({ pictures = [] }: GalleryProps) => {
  const total = pictures.length;
  const { currentIndex, goToPrevious, goToNext, handleKeyDown } =
    useGalleryNavigation(total);
  const currentPicture = pictures[currentIndex] ?? '';
  const counterId = 'gallery-counter';
  if (total === 0) return null;

  return (
    <div
      className="gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="group"
      aria-label="Galerie photo"
      aria-describedby={total > 1 ? counterId : undefined}
    >
      <img
        src={optimizeImageUrl(currentPicture, 800)}
        alt={`Galerie photo ${currentIndex + 1} sur ${total}`}
        className="gallery-image"
      />
      {total > 1 && (
        <>
          <button
            type="button"
            className="gallery-nav gallery-prev"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-nav gallery-next"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            ›
          </button>
          <div id={counterId} className="gallery-counter" aria-live="polite">
            {currentIndex + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
