import './style.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Page</h1>
      <p>This is the Contact page, accessible at the "/contact" route.</p>
      <div className="contact-content">
        <section>
          <h2>Contact Information</h2>
          <p>
            This page demonstrates how different routes can have completely
            different content and layouts.
          </p>
        </section>
        <section>
          <h2>Example Form</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
