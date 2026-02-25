import type { KeyboardEvent } from 'react';
import { useState } from 'react';

interface UseCollapseNavigationReturn {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}

const useCollapseNavigation = (defaultOpen = false): UseCollapseNavigationReturn => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        setIsOpen((prev) => !prev);
        break;
      case 'Escape':
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
        }
        break;
    }
  };

  return {
    isOpen,
    setIsOpen,
    handleKeyDown,
  };
};

export default useCollapseNavigation;
