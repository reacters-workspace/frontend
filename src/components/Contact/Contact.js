import './Contact.css'
import { useState } from 'react';
function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    usermessage: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://reacters-fitness.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('your message sent successfully:', result);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
    console.log(formData);
    setFormData({ username: '', email: '', usermessage: '' });
  };
  return (
    <>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h3>Feel free to ask anything</h3>
        <input
          className='w-30'
          placeholder='Name'
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          className='w-30'
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className='w-30'
          placeholder='Message'
          type="text"
          id="usermessage"
          name="usermessage"
          row={5}
          value={formData.usermessage}
          onChange={handleChange}
          required
        />
        <button className='btn-hover w-30 text-center text-white ' type="submit">Send Message</button>
      </form>
    </>
  );
}
export default Contact;