import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/products`)
      .then((res) => {
        setProducts(res.data);
        setFilter(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  const filterProducts = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder">Latest Products</h1>
            <hr />
          </div>
          <div className="row justofy-content-center">
            <div className="buttons d-flex justify-content-center mb-3 pb-3">
              <button
                className="btn btn-outline-dark"
                onClick={() => setFilter(products)}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark ms-2"
                onClick={() => filterProducts("men's clothing")}
              >
                Men's Clothing
              </button>
              <button
                className="btn btn-outline-dark ms-2"
                onClick={() => filterProducts("women's clothing")}
              >
                women's Clothing
              </button>
              <button
                className="btn btn-outline-dark ms-2"
                onClick={() => filterProducts('jewelery')}
              >
                Jewelery
              </button>
              <button
                className="btn btn-outline-dark ms-2"
                onClick={() => filterProducts('electronics')}
              >
                Electronics
              </button>
            </div>
            {filter.map((product) => {
              return (
                <div className="col-md-3 my-3 text-center" key={product.id}>
                  <div className="card h-100 p-1 my-3">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text">
                        Rating: {product.rating.rate}/5
                      </p>
                      <p className="card-text fw-bolder">${product.price}</p>
                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
