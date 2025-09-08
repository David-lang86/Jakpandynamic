import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Reviews.css';

// Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
emailjs.init("OlRy5tteWZSyczjtW"); // Replace with your EmailJS public key

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Smith', rating: 5, comment: 'Excellent service! Fixed my plumbing issue in no time. Highly recommended!', date: '2023-10-15' },
    { id: 2, name: 'Sarah Johnson', rating: 4, comment: 'Professional team and fair pricing. Will definitely use their services again.', date: '2023-09-22' },
    { id: 3, name: 'Michael Brown', rating: 5, comment: 'Quick response to my emergency call. Solved the problem efficiently.', date: '2023-11-05' },
    { id: 4, name: 'Emily Davis', rating: 5, comment: 'Quality workmanship and friendly staff. Very satisfied with the bathroom renovation.', date: '2023-08-18' },
  ]);
  
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    email: '' // Added email field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value
    });
  };
  
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: newReview.name,
        from_email: newReview.email,
        rating: newReview.rating,
        comment: newReview.comment,
        to_email: 'your-email@example.com', // Replace with your email
        date: new Date().toLocaleDateString()
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_xmgogg7', // Replace with your EmailJS service ID
        'template_0rdp06j', // Replace with your EmailJS template ID
        templateParams
      );

      // Add to local state for immediate display
      const reviewToAdd = {
        id: reviews.length + 1,
        name: newReview.name,
        rating: parseInt(newReview.rating),
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0]
      };
      
      setReviews([...reviews, reviewToAdd]);
      setNewReview({
        name: '',
        rating: 5,
        comment: '',
        email: ''
      });
      
      alert('Thank you for your review! We\'ve received it and will consider publishing it.');
    } catch (error) {
      console.error('Failed to send review:', error);
      alert('There was an error submitting your review. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer">{review.name}</div>
                <div className="rating">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <div className="review-date">{review.date}</div>
            </div>
          ))}
        </div>
        
        <div className="add-review">
          <h3>Add Your Review</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={newReview.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                name="rating"
                className="form-control"
                value={newReview.rating}
                onChange={handleInputChange}
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Your Review</label>
              <textarea
                id="comment"
                name="comment"
                className="form-control"
                value={newReview.comment}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;