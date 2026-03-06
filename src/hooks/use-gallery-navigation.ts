import type { KeyboardEvent } from 'react';
import { useState } from 'react';

interface UseGalleryNavigationReturn {
  currentIndex: number;
  prevIndex: number;
  nextIndex: number;
  goToPrevious: () => void;
  goToNext: () => void;
  reset: () => void;
  handleKeyDown: (e: KeyboardEvent) => void;
}

const useGalleryNavigation = (total: number): UseGalleryNavigationReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
  const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

  const goToPrevious = () => setCurrentIndex(prevIndex);
  const goToNext = () => setCurrentIndex(nextIndex);
  const reset = () => setCurrentIndex(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (total === 0) return;
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
      case 'Enter':
      case ' ':
        e.preventDefault();
        goToNext();
        break;
      case 'Escape':
        e.preventDefault();
        reset();
        break;
    }
  };

  return {
    currentIndex,
    prevIndex,
    nextIndex,
    goToPrevious,
    goToNext,
    reset,
    handleKeyDown,
  };
};

export default useGalleryNavigation;
