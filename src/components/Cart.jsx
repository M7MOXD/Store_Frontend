import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Cart() {
    // this state variable is temporary untill we finish redux and call the store to get the cart data.
    const state = [
      {"id":1,
      "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price":109.95,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating":{"rate":3.9,"count":120}},
    {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}}]
//    const state = []
    
   var total = 0;
    const cartItems = (cartItem) => {
        total = total + cartItem.price;
        return (
            <div className="px-4 my-5 bg-light rounded-3" key = {cartItem.id}>
                <div className="container py-4">
                    <button className='btn-close float-end' aria-label="Close"></button>
                    <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                    </div>
                        <div className="col-md-4">
                            <NavLink to={`/products/${cartItem.id}`}>
                                <h3 className="text-black">{cartItem.title}</h3>
                            </NavLink>
                            <p className="lead fw-bolder">Rating: {cartItem.rating && cartItem.rating.rate} 
                               
                            </p>               
                            <p className="lead fw-bold ">Product Price: $${cartItem.price}</p>            
                        </div>
                            
                    </div>    
                </div>
            </div>
        )
    }
    
    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                    <img src="/images/empty-cart.png" alt="empty cart" className="card-img-top" height="400px"/>
                </div>
            </div>
            </div>
        )
    }

    const button = () => {
        return(
            <div className='container'>
                <div className="row justify-content-center text-center">
                    <p className='lead fw-bold border border-2'>Total bill: {total}</p>
                    <NavLink to='/checkout' className="btn btn-outline-dark mb-5 w-25">
                        Check Out
                    </NavLink>
                </div>
            </div>
        )
    }
    return (
        <>  
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map((cartItems))}
            {state.length !== 0 && button()}

        </>
    )
}