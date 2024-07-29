import React, { useState } from 'react';

const AddTestimonialForm = ({ onAdd, onClose }) => {
  const [testimonial, setTestimonial] = useState('');
  const [author, setAuthor] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (testimonial && author && position) {
      onAdd({ testimonial, author, position });
      setTestimonial('');
      setAuthor('');
      setPosition('');
      onClose(); // Close the form after adding
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add a Testimonial</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="testimonial">Testimonial</label>
            <textarea
              id="testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              id="position"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Testimonial</button>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonialForm;
