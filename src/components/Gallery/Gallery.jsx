import './style.css';

function Gallery({ pictures }) {
  return (
    <div className="gallery">
      {pictures.map((picture) => (
        <img src={picture} alt="Gallery" key={picture} />
      ))}
    </div>
  );
}

export default Gallery;
