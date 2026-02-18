import './style.css';

const Tags = ({ tags = [] }) => {
  const list = Array.isArray(tags) ? tags : [];
  return (
    <div className="rental-tags">
      {list.map((tag, index) => (
        <span key={tag ?? index} className="rental-tag">
          <p>{tag ?? ''}</p>
        </span>
      ))}
    </div>
  );
};

export default Tags;
