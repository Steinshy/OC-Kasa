import './style.css';

function Collapse({ title, content }) {
  return (
    <div className="collapse">
      <h3 className="collapse-title">{title}</h3>
      <p className="collapse-content">{content}</p>
    </div>
  );
}

export default Collapse;
