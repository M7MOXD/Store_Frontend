import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { addProd } from '../redux/reducers/cartSlice';

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((e) => console.log(e));
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="row my-5">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating: {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => dispatch(addProd(product))}
              >
                Add to Cart
              </button>
              <NavLink to="/cart" className="btn btn-dark ms-2">
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
