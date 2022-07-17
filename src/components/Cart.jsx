import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { rmProd, addProd, reduceAmount } from '../redux/reducers/cartSlice';
import { xTotal } from '../redux/reducers/totalSlice';

export default function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const total = useSelector((state) => state.total.value);
  const dispatch = useDispatch();
  let x = 0;
  const cartItems = (cartItem) => {
    x += cartItem.price * cartItem.quantity;
    dispatch(xTotal(x));
    return (
      <div className="px-3 my-5" key={cartItem.id}>
        <div className="container py-3">
          <button
            className="btn-close float-end"
            onClick={() => dispatch(rmProd(cartItem))}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <NavLink to={`/products/${cartItem.id}`} className="nav-link">
                <h3 className="text-black">{cartItem.title}</h3>
              </NavLink>
              <p className="lead fw-bold">
                Rating: {cartItem.rating && cartItem.rating.rate}
              </p>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(reduceAmount(cartItem))}
                >
                  -
                </button>
                <span className="mx-3">{cartItem.quantity}</span>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(addProd(cartItem))}
                >
                  +
                </button>
              </div>
              <p className="lead fw-bold ">Product Price: ${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
            <img
              src="/images/empty-cart.png"
              alt="empty cart"
              className="card-img-top"
              height="400px"
            />
          </div>
        </div>
      </div>
    );
  };
  const button = () => {
    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <p className="lead fw-bold border border-2">Total bill: {total}</p>
          <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25">
            Check Out
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className="container">
        {cart.length === 0 && emptyCart()}
        {cart.length !== 0 && cart.map(cartItems)}
        {cart.length !== 0 && button()}
      </div>
    </React.Fragment>
  );
}
