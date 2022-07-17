import React, { useState } from 'react';

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
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
  const submitLogin = (e) => {
    e.preventDefault();
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
      <main class="form-signin w-100 m-auto">
        <form onSubmit={submitLogin}>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <div class="form-floating my-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={getEmail}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating my-2">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={getPassword}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
