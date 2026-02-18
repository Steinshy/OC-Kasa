import './style.css';

const Tags = ({ tags = [] }) => {
  return (
    <div className="rental-tags">
      {tags.map((tag, index) => (
        <span key={tag ?? index} className="rental-tag">
          {tag ?? ''}
        </span>
      ))}
    </div>
  );
};

export default Tags;
