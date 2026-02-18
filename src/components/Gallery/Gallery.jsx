import { useId, useState } from 'react';
import './style.css';

const Gallery = ({ pictures = [], total = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const counterId = useId();
  const currentPicture = pictures[currentIndex];
  if (total === 0) return 0;
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    total === 0
      ? null
      : e.key === 'ArrowLeft'
        ? (e.preventDefault(), goToPrevious())
        : e.key === 'ArrowRight'
          ? (e.preventDefault(), goToNext())
          : e.key === 'Escape'
            ? (e.preventDefault(), setCurrentIndex(0))
            : null;
  };

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
        src={currentPicture}
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
