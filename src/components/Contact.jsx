import React from 'react';

export default function Contact() {
  return <div>
    <h1 className='text-center text-warning mt-5'>Contact Us</h1>
    <div className="container text-center">
    <div className="row border-bottom border-1 ">
        <div className="col-2 col-md-4 col-lg-6 text-warning fw-bolder lead">Phone: </div>
        <div className="col-2 col-md-4 col-lg-6">+201122334455</div>
      </div>
      <div className="row border-bottom border-1">
        <div className="col-2 col-md-4 col-lg-6 text-warning fw-bolder lead">Address: </div>
        <div className="col-2 col-md-4 col-lg-6">324 Liberty st, Gleem, Alexandria, Egypt</div>
      </div>
      <div className="row border-bottom border-1">
        <div className="col-2 col-md-4 col-lg-6 text-warning fw-bolder lead">Email: </div>
        <div className="col-2 col-md-4 col-lg-6">info@thestore.com</div>
      </div>

    </div>
  </div>;
}
