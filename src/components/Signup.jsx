import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const nav = useNavigate();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    errors: {},
  });
  const getName = (e) => {
    setState({
      ...state,
      name: e.target.value,
    });
  };
  const getEmail = (e) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };
  const getPassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };
  const submitSignup = (e) => {
    e.preventDefault();
    let errors = {};
    if (!state.name) {
      errors.name = 'Name is Required';
    } else if (state.name.length < 4) {
      errors.name = 'Name must be greater than 4 character';
    } else if (!/^[a-zA-Z\s]+$/.test(state.name)) {
      errors.name = 'Name must be String';
    }
    if (!state.email) {
      errors.email = 'Email is Required';
    } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
      errors.email = 'Invalid Email';
    }
    if (!state.password) {
      errors.password = 'Password is Required';
    } else if (state.password.length < 8) {
      errors.password = 'Password must be greater than 8 character';
    }
    setState({
      ...state,
      errors: errors,
    });
    if (state.errors.name || state.errors.email || state.errors.password) {
      setState({ ...state, errors: {} });
      axios
        .post('http://127.0.0.1:3000/users', state)
        .then((res) => localStorage.setItem('currentUser', JSON.stringify(res)))
        .catch((e) => console.log(e));
      nav('/');
    }
  };
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submitSignup}>
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <div className="form-floating my-2">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="John Doe"
              onChange={getName}
            />
            <label for="floatingName">Name</label>
          </div>
          <p className="text-danger">{state.errors.name}</p>
          <div className="form-floating my-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={getEmail}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <p className="text-danger">{state.errors.email}</p>
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={getPassword}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <p className="text-danger">{state.errors.password}</p>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-outline-dark" type="submit">
            Sign up
          </button>
        </form>
      </main>
    </div>
  );
}
