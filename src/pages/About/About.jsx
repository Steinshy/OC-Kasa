import './style.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Page</h1>
      <p>This is the About page, accessible at the "/about" route.</p>
      <div className="about-content">
        <section>
          <h2>About React Router</h2>
          <p>
            React Router allows you to create single-page applications with
            navigation that doesn't require a page refresh. Each route renders a
            different component.
          </p>
        </section>
        <section>
          <h2>How It Works</h2>
          <ol>
            <li>Routes are defined in the router configuration</li>
            <li>Each route maps a URL path to a React component</li>
            <li>Navigation uses Link components or programmatic navigation</li>
            <li>The URL changes but the page doesn't reload</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default About;
