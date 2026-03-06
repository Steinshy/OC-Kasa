import './style.scss';

const Loader = () => (
  <div
    className="loader-wrapper"
    role="status"
    aria-label="Chargement en cours"
  >
    <div className="loader-container">
      <div className="loader-dots">
        <div className="loader-dot" aria-hidden="true" />
        <div className="loader-dot" aria-hidden="true" />
        <div className="loader-dot" aria-hidden="true" />
      </div>
      <p className="loader-message">Chargement en cours</p>
    </div>
  </div>
);

export default Loader;
