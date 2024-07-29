
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonial-section section d-flex flex-column align-items-center justify-content-center position-relative min-vh-100 w-100" id="testimonial1-elem">
      <div className="d-flex flex-column align-items-center justify-content-center w-100 overflow-auto">
        <div className="w-100">
          <div className="d-flex flex-column align-items-center justify-content-center w-100 px-2 py-5 px-md-4 px-lg-5">
            <div className="text-center mb-4">
              <p className="subtitle px-2 py-1 rounded-md outline-none" contentEditable="true">
                What our customers say
              </p>
              <h2 className="title px-2 py-1 rounded-md outline-none" contentEditable="true">
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
                      <p className="author-name px-2 py-0.5 rounded-md outline-none mt-5" contentEditable="true">
                        John Doe
                      </p>
                      <p className="author-info px-2 py-0.5 rounded-md outline-none" contentEditable="true">
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
                      <p className="author-name px-2 py-0.5 rounded-md outline-none mt-5" contentEditable="true">
                        Jane Smith
                      </p>
                      <p className="author-info px-2 py-0.5 rounded-md outline-none" contentEditable="true">
                        Partner, Smith & Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary mt-5 add-testimonial-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="add-icon">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 11h3v-2h-3V8h-2v3H8v2h3v3h2v-3z"></path>
              </svg>
              Add Testimonial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
