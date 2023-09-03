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
    fetch('https://reacters-fitness2.onrender.com/contact', {
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
    <div class='contact-container'>

      <div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <input
            className='w-30 text-white'
            placeholder='Name'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            className='w-30 text-white'
            placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className='w-30 text-white'
            placeholder='Message'
            type="text"
            id="usermessage"
            name="usermessage"
            row={5}
            value={formData.usermessage}
            onChange={handleChange}
            required
          />
          <button className='btn-hover w-30 text-center' type="submit">Send Message</button>
        </form>
      </div>
      <div className='map-container card text-white'>

       
          <div class="card-header address-header"> Reacter Fitness address</div>
          <div class="address-body">
            <h5 class="address-title"><i class="fas fa-map-marker-alt mr-3"></i>Amman</h5>
            <p class="address-text">pr. abdullah street</p>
            <p class='address-icon'>
            <a href="https://www.facebook.com/" className='address-a'><i class="fab  fa-facebook text-white mr-3"></i>facebook.com/Reacter</a>
            <a href="https://www.instagram.com/" className='address-a'><i class="fab fa-instagram text-white mr-3"></i>instagram.com/Reacter</a>
            </p>
          
        </div>


      </div>


    </div>
  );
}
export default Contact;