import './style.scss';

const Loader = () => (
  <div
    className="loader-wrapper"
    role="status"
    aria-label="Chargement en cours"
  >
    <div className="loader-spinner" aria-hidden="true" />
  </div>
);

export default Loader;
