import { useId, useState } from 'react';
import './style.css';

const Collapse = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const bodyId = useId();

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div className="collapse">
      <div
        id={`${bodyId}-trigger`}
        role="button"
        tabIndex={0}
        className="collapse-header"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={bodyId}
      >
        <h3 className="collapse-title">{title}</h3>
        <span
          className={`collapse-chevron ${isOpen ? 'open' : ''}`}
          aria-hidden
        >
          ▼
        </span>
      </div>
      <div
        id={bodyId}
        className={`collapse-body ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`${bodyId}-trigger`}
      >
        <div className="collapse-body-inner">
          <p className="collapse-content">{content ?? ''}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
