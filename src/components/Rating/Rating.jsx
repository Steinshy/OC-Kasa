import './style.css';

function Rating({ rating }) {
  return (
    <div className="rating">
      {rating.map((star) => (
        <img src={star} alt="Rating" key={star} />
      ))}
    </div>
  );
}

export default Rating;
