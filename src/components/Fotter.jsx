const Footer = () => {
  return (
    <footer
      className="text-light py-5"
      style={{
        backgroundColor: "#111",
        borderTop: "3px solid #c8a96b",
      }}
    >
      <div className="container">
        <div className="row g-5">

          {/* Column 1 - About */}
          <div className="col-md-4">
            <h3
              className="mb-4"
              style={{
                color: "#c8a96b",
                fontFamily: "serif",
                letterSpacing: "1px",
              }}
            >
              HomeDesign
            </h3>

            <p style={{ color: "#d6d6d6", lineHeight: "1.8" }}>
              We create elegant and modern furnishing solutions that transform
              houses into warm, stylish, and comfortable dream homes.
            </p>
          </div>

          {/* Column 2 - Comment Form */}
          <div className="col-md-4">
            <h4
              className="mb-4"
              style={{
                color: "#c8a96b",
                fontFamily: "serif",
              }}
            >
              Leave a Comment
            </h4>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control border-0 shadow-sm"
                  placeholder="Your Name"
                  style={{
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control border-0 shadow-sm"
                  rows="4"
                  placeholder="Your Comment"
                  style={{
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn px-4 py-2"
                style={{
                  backgroundColor: "#c8a96b",
                  color: "#111",
                  borderRadius: "30px",
                  fontWeight: "bold",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Column 3 - Social Media */}
          <div className="col-md-4">
            <h4
              className="mb-4"
              style={{
                color: "#c8a96b",
                fontFamily: "serif",
              }}
            >
              Follow Us
            </h4>

            <div className="d-flex flex-column gap-3">

              <div className="d-flex align-items-center gap-3">
                <img
                  src="/images/fb.png"
                  alt="Facebook "
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%" }}
                />
                <span>Facebook <br />@homedisign</span>
              </div>

              <br /><br />


              <div className="d-flex align-items-center gap-3">
                <img
                  src="/images/in.png"
                  alt="Instagram"
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%" }}
                />
                <span>Instagram <br />@homedisign</span>
              </div>
              <br /><br />

              <div className="d-flex align-items-center gap-3">
                <img
                  src="images/x.png"
                  alt="X"
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%" }}
                />
                <span>X <br />@homedisign</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <hr className="border-secondary mt-5" />

        <div className="text-center">
          <p style={{ color: "#aaa" }}>
            © 2026 HomeDesign. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;