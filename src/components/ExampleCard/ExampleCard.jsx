import './style.css';

function ExampleCard({ title, description, icon }) {
  return (
    <div className="example-card">
      {icon && <div className="example-card-icon">{icon}</div>}
      <h3 className="example-card-title">{title}</h3>
      <p className="example-card-description">{description}</p>
    </div>
  );
}

export default ExampleCard;
