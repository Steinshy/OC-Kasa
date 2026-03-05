import { useId } from 'react';
import type { ReactNode } from 'react';

import useCollapseNavigation from '@/hooks/use-collapse-navigation';

import './style.scss';

interface CollapseProps {
  title: string;
  children?: ReactNode;
  items?: string[];
  defaultOpen?: boolean;
}

const Collapse = ({ title, children, items, defaultOpen = false }: CollapseProps) => {
  const uid = useId();
  const { isOpen, toggleOpen, handleKeyDown } = useCollapseNavigation(defaultOpen);

  const hasContent = children != null && children !== '';
  const hasItems = items != null && items.length > 0;

  if (!title || (!hasContent && !hasItems)) return null;

  const bodyId = `collapse-body-${uid}`;
  const renderedContent = hasItems ? (
    <ul className="collapse-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    children
  );

  return (
    <div className="collapse">
      <button
        id={`${bodyId}-trigger`}
        type="button"
        className="collapse-header"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={bodyId}
      >
        <h3 className="collapse-title">{title}</h3>
        <span className={`collapse-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true" />
      </button>
      <div
        id={bodyId}
        className={`collapse-body ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`${bodyId}-trigger`}
      >
        <div className="collapse-body-inner">
          <div className="collapse-content">{renderedContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
