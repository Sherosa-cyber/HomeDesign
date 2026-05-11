import React, { useEffect, useState } from "react";
import axios from "axios";

const Furnishings = () => {
  const [products, setProducts] = useState([]);

  const img_url = "https://shemhyrax.alwaysdata.net/static/images/";

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://shemhyrax.alwaysdata.net/api/get_products_details"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Furnishings Collection</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.product_id}>
            <div className="card shadow h-100">

              {/* IMAGE */}
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body">

                {/* NAME */}
                <h6>{product.product_name}</h6>

                {/* DESCRIPTION */}
                <p className="text-muted small">
                  {product.product_description.substring(0, 70)}...
                </p>

                {/* PRICE */}
                <b className="text-success">
                  Ksh {product.product_cost}
                </b>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furnishings;