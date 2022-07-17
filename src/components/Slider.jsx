import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Slider() {
  return (
    <React.Fragment>
      <div
        id="myCarousel"
        className="carousel slide bg-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/bg.png" alt="women-collection" className='w-100' />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                  <NavLink to='/signup'>
                    <p  className="btn btn-dark">Sign up today</p>
                  </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="logo512.png" alt="" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <NavLink to="/products" className="btn btn-outline-dark">Learn more</NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.webp" alt="men-collection" className='w-100' />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                <p>
                  <NavLink to="/products" className="btn btn-dark">Browse Gallery</NavLink>
                </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );
}
