import './style.scss';

interface TagsProps {
  tags?: string[];
}

const Tags = ({ tags = [] }: TagsProps) => {
  return (
    <div className="rental-tags">
      {tags.map((tag) => (
        <span key={tag} className="rental-tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
