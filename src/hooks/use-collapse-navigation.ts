import type { KeyboardEvent } from 'react';
import { useState } from 'react';

interface UseCollapseNavigationReturn {
  isOpen: boolean;
  toggleOpen: () => void;
  handleKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
}

const useCollapseNavigation = (defaultOpen = false): UseCollapseNavigationReturn => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    toggleOpen,
    handleKeyDown,
  };
};

export default useCollapseNavigation;
