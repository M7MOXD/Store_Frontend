import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <React.Fragment>
      <footer class="container">
        <p class="float-end">
          <a href="#top">Back to top</a>
        </p>
        <p>
          &copy; 2017–2022 Company, Inc. &middot; <Link to="#">Privacy</Link>{' '}
          &middot; <Link to="#">Terms</Link>
        </p>
      </footer>
    </React.Fragment>
  );
}
