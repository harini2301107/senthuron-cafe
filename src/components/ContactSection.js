import React, { useState } from 'react'; 

function ContactSection() {
    
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault(); 

        
        if (status !== 'idle') return;

        setStatus('sending');

        
        setTimeout(() => {
            setStatus('success'); 
            
        }, 2000); 
    };

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

            <form className="contact-form" onSubmit={handleSubmit}> {/* <-- ADDED onSubmit handler */}
                <h3>Send Us a Message</h3>
                <input type="text" placeholder="Your Name" required disabled={status !== 'idle'} />
                <input type="email" placeholder="Your Email" required disabled={status !== 'idle'} />
                <textarea placeholder="Your Message" rows="4" required disabled={status !== 'idle'}></textarea>

                <button 
                    type="submit" 
                    className="order-button"
                    disabled={status !== 'idle'} // Button is disabled when sending or success
                >
                    {/* Change button text based on status */}
                    {status === 'sending' ? 'Sending...' :
                     status === 'success' ? 'SENT!' : 'Send'}
                </button>
                
                {/* Display success message based on status */}
                {status === 'success' && (
                    <p className="success-message">
                        ✅ Message Sent Successfully! We'll be in touch soon.
                    </p>
                )}
            </form>
        </section>
    );
}

export default ContactSection;