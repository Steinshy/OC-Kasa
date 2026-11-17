import './style.scss';

const NO_TAGS: string[] = [];

interface TagsProps {
  tags?: string[];
}

const Tags = ({ tags = NO_TAGS }: TagsProps) => {
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
