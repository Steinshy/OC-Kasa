import useCollapseNavigation from '@/hooks/use-collapse-navigation';

import './style.css';

interface CollapseProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

const Collapse = ({ title, content, defaultOpen = false }: CollapseProps) => {
  if (!title || !content) return null;

  const { isOpen, setIsOpen, handleKeyDown } = useCollapseNavigation(defaultOpen);
  const bodyId = 'collapse-body';
  const handleToggle = () => setIsOpen((prev) => !prev);

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
          aria-hidden="true"
        />
      </div>
      <div
        id={bodyId}
        className={`collapse-body ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`${bodyId}-trigger`}
      >
        <div className="collapse-body-inner">
          <p className="collapse-content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
