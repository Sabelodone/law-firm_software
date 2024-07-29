import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const Testimonials = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <section className="testimonial-section section d-flex flex-column align-items-center justify-content-center position-relative min-vh-100 w-100" id="testimonial1-elem">
      <div className="d-flex flex-column align-items-center justify-content-center w-100 overflow-auto">
        <div className="w-100">
          <div className="d-flex flex-column align-items-center justify-content-center w-100 px-2 py-5 px-md-4 px-lg-5">
            <div className="text-center mb-4">
              <p className="subtitle px-2 py-1 rounded-md outline-none">
                What our customers say
              </p>
              <h2 className="title px-2 py-1 rounded-md outline-none">
                Testimonials
              </h2>
            </div>
            <div className="w-100 pt-5">
              <div className="d-flex overflow-auto flex-nowrap mt-5">
                <div className="px-2 flex-shrink-0 mb-4 w-100 w-md-50">
                  <div className="card px-4 py-5 rounded-md text-center h-100">
                    <p className="testimonial-text px-2 py-0.5 rounded-md outline-none">
                      SUITS SYSTEMS has revolutionized the way we manage our law firm. It has greatly increased our efficiency and productivity.
                    </p>
                    <div className="mt-auto">
                      <p className="author-name px-2 py-0.5 rounded-md outline-none mt-5">
                        John Doe
                      </p>
                      <p className="author-info px-2 py-0.5 rounded-md outline-none">
                        CEO, Doe Law Firm
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-2 flex-shrink-0 mb-4 w-100 w-md-50">
                  <div className="card px-4 py-5 rounded-md text-center h-100">
                    <p className="testimonial-text px-2 py-0.5 rounded-md outline-none">
                      I highly recommend SUITS SYSTEMS to any law firm looking to streamline their operations. It's a game changer.
                    </p>
                    <div className="mt-auto">
                      <p className="author-name px-2 py-0.5 rounded-md outline-none mt-5">
                        Jane Smith
                      </p>
                      <p className="author-info px-2 py-0.5 rounded-md outline-none">
                        Partner, Smith & Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary mt-5" onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="add-icon">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 11h3v-2h-3V8h-2v3H8v2h3v3h2v-3z"></path>
              </svg>
              Add Testimonial
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Testimonial</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="testimonialText">Testimonial</label>
                  <textarea className="form-control" id="testimonialText" rows="3" placeholder="Enter testimonial"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="authorName">Author Name</label>
                  <input type="text" className="form-control" id="authorName" placeholder="Enter author's name" />
                </div>
                <div className="form-group">
                  <label htmlFor="authorPosition">Author Position</label>
                  <input type="text" className="form-control" id="authorPosition" placeholder="Enter author's position" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              <button type="button" className="btn btn-primary">Save Testimonial</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

