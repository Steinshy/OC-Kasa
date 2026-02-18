import { useState } from 'react';
import './style.css';

function Collapse({ title, content, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

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

  const displayContent = Array.isArray(content) ? (
    <ul className="collapse-list">
      {content.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className="collapse-content">{content ?? ''}</p>
  );

  return (
    <div className="collapse" onKeyDown={handleKeyDown}>
      <div
        role="button"
        tabIndex={0}
        className="collapse-header"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
      >
        <h3 className="collapse-title">{title}</h3>
        <span className={`collapse-chevron ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      <div className={`collapse-body ${isOpen ? 'open' : ''}`}>
        {displayContent}
      </div>
    </div>
  );
}

export default Collapse;
