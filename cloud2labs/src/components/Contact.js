import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: ''
  });
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_mm4kpug", 'template_m8d7e3u', formData, 'jf3VjaUQUiTAMzRwx')
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        setFormData({
          from_name: '',
          user_email: '',
          message: ''
        });
        setPopupVisible(true);
        setTimeout(() => {
          setPopupVisible(false);
        }, 3000); // Hide popup after 3 seconds
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div id='contact' className='section'>
      <div className='contact-con'>
        <div className='contact-con-1'>
          <div className='contact-text'>
            <h1 className='contact-h1'>
              Let's Chat
            </h1>
            <h2>
              Tell Us About Your Project
            </h2>
            <p className='contact-p'>
              We are here to help, and answer any question you might have from us. We'd be more than happy to hear from your side and get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className='contact-con-2'>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="name">Full Name:</label>
              <input type="text" id="name" name="from_name" value={formData.from_name} onChange={handleChange} required />
            </div>
            <div class="form-group">
              <label for="email">Email Address:</label>
              <input type="email" id="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required />
            </div>
            <div class="form-group">
              <button type="submit">Send Email</button>
            </div>
          </form>
        </div>
      </div>
      {popupVisible && (
        <div className="popup">
          <p>Email sent successfully!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
