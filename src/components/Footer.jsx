import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <React.Fragment>
      <div className='bg-dark text-white p-1 mt-5'>
      <footer class="container">
        <p className="footer-title">about company</p>
        <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et,
        commodi corrupti ab eos dolores accusantium! Id voluptate ratione ut
        illo similique labore molestias obcaecati dolore velit blanditiis
        facilis ea, ullam tenetur sed dolorem facere nostrum eum quidem fugiat
        harum laboriosam distinctio pariatur? Distinctio qui pariatur voluptas
        blanditiis quae, maiores esse, at nemo eos, molestiae numquam rerum
        quaerat quia eum magni similique consectetur praesentium delectus
        tempore saepe eius voluptatem officia. Totam odit iusto eos odio
        voluptatibus corrupti. Sed commodi doloribus placeat vel provident
        laudantium aut! Veritatis ab qui culpa ullam blanditiis consequatur
        repellendus laudantium labore! Ut, tempora? Amet, pariatur tempora.
        </p>
        <p className="info">
        support emails - help@clothing.com, customersupport@clothing.com
        </p>
        <p className="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <div className="footer-social-container">
        <div>
            <a href="#" className="social-link">terms & services</a>
            <a href="#" className="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
        </div>
        </div>
      </footer>
        <p class="float-end">
          <a href="#top">Back to top</a>
        </p>
        <p>
          &copy; 2017–2022 Company, Inc. &middot; <Link to="#">Privacy</Link>{' '}
          &middot; <Link to="#">Terms</Link>
        </p>
      </div>
    </React.Fragment>
  );
}
