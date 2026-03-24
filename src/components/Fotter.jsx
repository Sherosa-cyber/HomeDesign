import React from 'react';

const Footer = () => {
  return (
    <footer className="background text-light py-5">
      <div className="container">
        <div className="row">

          {/* Column 1 - Description */}
          <div className="col-md-4 mb-4">
            <h2>About Us</h2>
            <h4>
              We provide modern and creative home design ideas to help you build
              your dream space with style, comfort, and functionality.
            </h4>
          </div>

          {/* Column 2 - Comment Form */}
          <div className="col-md-4 mb-4">
            <h5>Leave a Comment</h5>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your Comment"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Column 3 - Social Media */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>

            <div className="d-flex gap-3 fs-4 text-center">
             <p>Facebook</p><br />
             <img src="/home/user/Downloads/images/fb.png" alt="" /> <br />

             <p>Instagram</p><br />
             <img src="/home/user/Downloads/images/in.png" alt="" /> <br />

             <p>X</p>

             
             

              
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;