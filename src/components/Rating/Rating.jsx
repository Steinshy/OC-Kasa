import './style.css';

function Rating({ rating }) {
  const stars = Array.isArray(rating) ? rating.filter(Boolean) : [];
  const score = stars.length;

  return (
    <div
      className="rating"
      role="img"
      aria-label={`Note : ${score} sur 5`}
    >
      {stars.map((star, index) => (
        <img
          src={star}
          alt=""
          key={star ?? index}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default Rating;
