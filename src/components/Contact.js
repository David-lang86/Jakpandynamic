import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_xmgogg7';
  const EMAILJS_TEMPLATE_ID = 'template_0rdp06j';
  const EMAILJS_PUBLIC_KEY = 'OlRy5tteWZSyczjtW';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      to_email: 'info@jakpandynamic.com',
      to_name: 'JAKPAN DYNAMIC CONCEPT LIMITED',
      reply_to: formData.email,
      date: new Date().toLocaleString()
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 8000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus('error');
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        
        {submitStatus === 'success' && (
          <div className="alert alert-success">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>Message Sent Successfully!</strong>
              <p>Thank you for contacting JAKPAN DYNAMIC CONCEPT LIMITED. We have received your message and will respond within 2 business hours.</p>
              <p>A confirmation email has been sent to your email address.</p>
            </div>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="alert alert-error">
            <i className="fas fa-exclamation-circle"></i>
            <div>
              <strong>Message Not Sent</strong>
              <p>Sorry, there was an error sending your message. Please try again or call us directly at +1 (555) 123-4567.</p>
            </div>
          </div>
        )}

        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div>
                <h4>Address</h4>
                <p>123 Plumbing Street, Waterville, WC 10001</p>
              </div>
            </div>

            <div className="contact-detail">
              <i className="fas fa-phone contact-icon"></i>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543 (Emergency)</p>
              </div>
            </div>

            <div className="contact-detail">
              <i className="fas fa-envelope contact-icon"></i>
              <div>
                <h4>Email</h4>
                <p>info@jakpandynamic.com</p>
                <p>support@jakpandynamic.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <i className="fas fa-clock contact-icon"></i>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency Services Only</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons-horizontal">
                <a href="#" className="social-link" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://wa.me/1234567890" className="social-link" title="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <p className="form-subtitle">We'll get back to you as soon as possible</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Your phone number (optional)"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Please describe your plumbing issue or service needed..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="form-note">
              <p><i className="fas fa-info-circle"></i> For emergency services, please call us directly for immediate assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;