import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Mycarousel from './Mycarousel';
import { Bed, TableColumnsSplit } from 'lucide-react';
import { Sofa } from 'lucide-react';
import { RockingChair } from 'lucide-react'; 
import { Lightbulb } from 'lucide-react';
import { LampWallDown } from 'lucide-react';


const Furniturehub = () => {

  // PRODUCT STATES
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  // CART STATE
  const [cart, setCart] = useState([]);

  // READ MORE STATE
  const [expanded, setExpanded] = useState({});

  // ✅ ONLY ADDITION
  const [visibleCount, setVisibleCount] = useState(8);

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://shemhyrax.alwaysdata.net/static/images/";
  const navigate = useNavigate();

  // FETCH PRODUCTS
  const fetchFurnishings = async () => {

    setLoading("Please wait as we retrieve products");

    try {

      const response = await axios.get(
        "http://shemhyrax.alwaysdata.net/api/get_products_details"
      );

      setProducts(response.data);
      setFilteredProducts(response.data);

      setLoading("");

    } catch (error) {

      setError(error.message);
    }
  };

  useEffect(() => {
    fetchFurnishings();
  }, []);

  // LOAD CART FROM LOCAL STORAGE
  useEffect(() => {

    const savedCart = JSON.parse(
      localStorage.getItem("cart")
    );

    if (savedCart) {
      setCart(savedCart);
    }

  }, []);

  // SAVE CART TO LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // ADD TO CART FUNCTION
  const addToCart = (product) => {

    const exists = cart.find(
      item => item.product_id === product.product_id
    );

    if (exists) {

      const updatedCart = cart.map(item =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);
    }
  };

  // SEARCH FUNCTION
  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(value.toLowerCase()) ||
      product.product_description.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);

    // reset only
    setVisibleCount(8);
  };

  // CATEGORY FILTER FUNCTION
  const filterByCategory = (keyword) => {

    if (!keyword) {

      setFilteredProducts(products);
      setSearch("");

      // reset only
      setVisibleCount(8);

      return;
    }

    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.product_description.toLowerCase().includes(keyword.toLowerCase())
    );

    setFilteredProducts(filtered);

    setSearch(keyword);

    // reset only
    setVisibleCount(8);
  };

  // READ MORE FUNCTION
  const toggleReadMore = (id) => {

    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (

    <div className='container-fluid'>

      <h1 className='text-center'>
        <b>Our Furniture Catalogue</b>
      </h1>

      {/* CATEGORIES */}
      <div className="col-12 mb-4">

        <div className="d-flex justify-content-center flex-wrap gap-2">

          <button className="btn btn-outline-dark btn-sm px-2 py-1"
            onClick={() => filterByCategory("bed")}>
            Beds <Bed />
          </button>

          <button className="btn btn-outline-dark btn-sm px-2 py-1"
            onClick={() => filterByCategory("sofa")}>
            Sofa <Sofa />
          </button>

          <button className="btn btn-outline-dark btn-sm px-2 py-1"
            onClick={() => filterByCategory("dining")}>
            Dining Set <RockingChair />
          </button>

          <button className="btn btn-outline-dark btn-sm px-2 py-1"
            onClick={() => filterByCategory("light")}>
            House Lights <Lightbulb/>
          </button>

          <button className="btn btn-outline-dark btn-sm px-2 py-1"
            onClick={() => filterByCategory("curtain")}>
            Curtains <TableColumnsSplit/>
          </button>

          <button className="btn btn-outline-dark btn-sm px-2 py-1"
            onClick={() => filterByCategory("decor")}>
            Decorations <LampWallDown/>
          </button>

        </div>
      </div>

      <Mycarousel />

      {loading && <p className='text-center'>{loading}</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* SEARCH */}
      <div className="col-12 mb-4 d-flex justify-content-center">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          className="dark-search-input"
        />

      </div>

      {/* CART */}
      <div className="text-center me-3 mb-4">
        <div className="cart-badge-dark">
          🛒 Cart Items: {cart.length}
        </div>
      </div>

      {/* PRODUCT CARDS */}
      <div className='row justify-content-center'>

        {filteredProducts.length > 0 ? (

          filteredProducts.slice(0, visibleCount).map((product) => {

            const isExpanded = expanded[product.product_id];
            const shortText = product.product_description.substring(0, 80);

            return (

              <div className='col-lg-2 col-md-3 col-sm-6 mb-4'
                key={product.product_id}>

                <div className='card shadow card-margin product-card h-100'>

                  <img
                    className='mt-2 product_img'
                    src={img_url + product.product_photo}
                    alt={product.product_photo}
                  />

                  <div className='card-body'>

                    <h6 className='mt-2 fw-bold'>
                      {product.product_name}
                    </h6>

                    <p className='text-muted small' style={{ minHeight: "80px" }}>

                      {isExpanded
                        ? product.product_description
                        : `${shortText}...`
                      }

                      {product.product_description.length > 80 && (
                        <span
                          onClick={() => toggleReadMore(product.product_id)}
                          style={{
                            color: "black",
                            cursor: "pointer",
                            fontWeight: "bold",
                            marginLeft: "5px"
                          }}
                        >
                          {isExpanded ? " Read Less" : " Read More"}
                        </span>
                      )}

                    </p>

                    <b className='text-success'>
                      Ksh.{product.product_cost}
                    </b>

                    <br /><br />

                    <button
                      className='btn btn-primary btn-sm mb-2 w-100'
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>

                    <button
                      className='btn btn-dark btn-sm mb-3 w-100'
                      onClick={() =>
                        navigate("/makepayment", { state: { product } })
                      }
                    >
                      Purchase Now
                    </button>

                  </div>
                </div>

              </div>
            );
          })

        ) : (
          <p className="text-center mt-4">No products found</p>
        )}

      </div>

      {/* ✅ ONLY BUTTON ADDED */}
      {filteredProducts.length > 8 && (
        <div className="text-center mb-5">

          {visibleCount < filteredProducts.length ? (
            <button
              className="btn btn-outline-primary"
              onClick={() => setVisibleCount(visibleCount + 8)}
            >
              See More
            </button>
          ) : (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setVisibleCount(8)}
            >
              Show Less
            </button>
          )}

        </div>
      )}

    </div>
  );
};

export default Furniturehub;