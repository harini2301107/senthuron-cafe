import React from 'react';

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Visit Us & Contact</h2>
      
      <div className="contact-details">
        <div>
          <h3>Location</h3>
          <p>123 Coffee Lane, Tech City, 560001</p> 
        </div>
        
        <div>
          <h3>Working Hours</h3>
          <p>Mon - Fri: 8:00 AM - 6:00 PM</p> 
          <p>Sat: 9:00 AM - 4:00 PM</p>
        </div>
      </div>
      
      <form className="contact-form">
        <h3>Send Us a Message</h3>
        <input type="text" placeholder="Your Name" required /> 
        <input type="email" placeholder="Your Email" required /> 
        <textarea placeholder="Your Message" rows="4" required></textarea> 
        <button type="submit" className="order-button">Send</button> 
      </form>
    </section>
  );
}

export default ContactSection;