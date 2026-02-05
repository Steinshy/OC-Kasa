import './style.css';

function Dropdown({ title, content }) {
  return (
    <div className="dropdown">
      <h3 className="dropdown-title">{title}</h3>
      <p className="dropdown-content">{content}</p>
    </div>
  );
}

export default Dropdown;
