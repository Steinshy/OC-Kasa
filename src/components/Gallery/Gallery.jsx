import { useState } from 'react';
import './style.css';

function Gallery({ pictures = [], total = 0 }) {
  if (total === 0) return null;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPicture = pictures[currentIndex];

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
          <div className="gallery-counter">
            {currentIndex + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;
