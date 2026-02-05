import './style.css';
import { useLoaderData } from 'react-router';

const Home = () => {
  const rentals = useLoaderData();
  console.log(rentals);
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Welcome to the home page! This is the default route ("/").</p>
      <div className="home-content">
        <section>
          <h2>Getting Started</h2>
          <p>
            This is an example of React Router routing. Navigate using the links
            in the header above.
          </p>
        </section>
        <section>
          <h2>Route Information</h2>
          <ul>
            <li>
              <strong>/</strong> - Home page (current page)
            </li>
            <li>
              <strong>/about</strong> - About page
            </li>
            <li>
              <strong>/contact</strong> - Contact page
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
