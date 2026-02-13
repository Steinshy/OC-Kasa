import './style.css';

const Tags = ({ tags = [] }) => {
  return (
    <div className="rental-tags">
      {tags.map((tag) => (
        <span key={tag} className="rental-tag">
          <p>{tag}</p>
        </span>
      ))}
    </div>
  );
};

export default Tags;
