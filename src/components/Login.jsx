import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
    error: '',
  });
  const [users, setUsers] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
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
    users.find((user) => {
      if (user.email === state.email && user.password === state.password) {
        console.log('localstorage', user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        nav('/');
        return user;
      } else {
        setState({ ...state, error: 'Wrong email or password' });
        return false;
      }
    });
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
        <form onSubmit={submitLogin}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <p classNameName="text-danger">{state.error}</p>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
