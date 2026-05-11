import React, { useState } from "react";

const About = () => {

  // FAQ toggle state
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Furniture Hub?",
      a: "Furniture Hub is a premium online marketplace for quality, modern, and classic furniture designed to elevate home interiors."
    },
    {
      q: "Do you deliver furniture?",
      a: "Yes, we offer delivery services depending on your location and product availability."
    },
    {
      q: "Can I return a product?",
      a: "Yes, returns are allowed within a specified period if the product meets return conditions."
    },
    {
      q: "How do I place an order?",
      a: "Simply browse products, add to cart, and proceed to checkout using the payment system."
    }
  ];

  return (
    <div style={{ backgroundColor: "#2f2f2f", color: "#d6d0c9", padding: "60px 20px" }}>

      <div className="container">

        {/* TITLE */}
        <h2 className="text-center mb-4" style={{ fontFamily: "Georgia, serif", color: "#fff" }}>
          About Furniture Hub
        </h2>

        <div className="text-center mb-5">
          <span style={{ borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "5px" }}>
            Crafting timeless furniture experiences
          </span>
        </div>
        
        <div>
            <p
  style={{
    maxWidth: "900px",
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "1.9",
    fontFamily: "Georgia, serif",
    color: "#cfc7bf"
  }}
>
  Furniture Hub is a modern digital marketplace dedicated to redefining how people discover, choose, and experience furniture. Our platform brings together a carefully curated collection of high-quality furniture pieces designed to elevate homes, offices, and interior spaces with elegance, comfort, and timeless appeal.
  <br /><br />

  We believe that furniture is more than just functional items — it is an expression of lifestyle, personality, and taste. Every product available on Furniture Hub is selected with attention to craftsmanship, durability, and design excellence, ensuring that customers receive value that goes beyond aesthetics.
  <br /><br />

  Our mission is to simplify the furniture shopping experience by connecting users directly with trusted furniture collections in one seamless platform. Whether you are looking for modern minimalist designs, classic wooden finishes, or luxury statement pieces, Furniture Hub provides a wide variety of options tailored to different preferences and living spaces.
  <br /><br />

  In addition to offering furniture, we focus on creating a smooth and user-friendly experience. Customers can browse products, search by category, view detailed descriptions, and make secure purchases with ease. Our system is designed to ensure convenience, transparency, and satisfaction at every step of the journey.
  <br /><br />

  At Furniture Hub, we are continuously evolving to bring innovative features such as personalized recommendations, smart search capabilities, and future AI-powered assistance to help users find the perfect furniture for their homes.
  <br /><br />

  Our vision is to become a leading furniture marketplace recognized for quality, trust, and design excellence — transforming houses into homes and spaces into experiences.
</p>
        </div>

        {/* 🪑 MISSION / VISION / VALUES */}
        <div className="row text-center mb-5">

          <div className="col-md-4 mb-3">
            <div className="about-card">
              <h5>Mission</h5>
              <p>
                To provide high-quality, elegant, and affordable furniture that transforms living spaces.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="about-card">
              <h5>Vision</h5>
              <p>
                To become a leading global furniture marketplace known for style, trust, and innovation.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="about-card">
              <h5>Values</h5>
              <p>
                Quality, integrity, customer satisfaction, and timeless design excellence.
              </p>
            </div>
          </div>

        </div>

        {/* ❓ FAQ SECTION */}
        <h3 className="text-center mb-4" style={{ fontFamily: "Georgia, serif", color: "#fff" }}>
          Frequently Asked Questions
        </h3>

        <div className="faq-container">

          {faqs.map((item, index) => (
            <div key={index} className="faq-item">

              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.q}
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  {item.a}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default About;