import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMessage('Please enter an email address.');
      return;
    }
    if (!formData.message) {
      setErrorMessage('Please insert a message.');
      return;
    }
    setErrorMessage('');
    alert('Form submitted successfully!');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>Message:</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;