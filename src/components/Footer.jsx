import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="container-fuild bg-dark text-white p-1 mt-5">
        <div className="container py-3">
          <p className="fs-2">About Company</p>
          <p className="text-capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosamet, commodi corrupti ab eos dolores accusantium! Id
            voluptateratione ut illo similique labore molestias obcaecati dolore
            velitblanditiis facilis ea, ullam tenetur sed dolorem facere nostrum
            eumquidem fugiat harum laboriosam distinctio pariatur? Distinctio
            quipariatur voluptas blanditiis quae, maiores esse, at nemo
            eos,molestiae numquam rerum quaerat quia eum magni similique
            consecteturpraesentium delectus tempore saepe eius voluptatem
            officia. Totamodit iusto eos odio voluptatibus corrupti. Sed commodi
            doloribusplaceat vel provident laudantium aut! Veritatis ab qui
            culpa ullamblanditiis consequatur repellendus laudantium labore! Ut,
            tempora?Amet, pariatur tempora.
          </p>
          <p className="text-capitalize">
            support emails - help@clothing.com, customersupport@clothing.com
          </p>
          <p className="text-capitalize">
            telephone - 180 00 00 001, 180 00 00 002
          </p>
          <p className="float-end">
            <a href="#top">Back to top</a>
          </p>
          <p>
            &copy; 2017–2022 Company, Inc. &middot; <Link to="#">Privacy</Link>
            &middot; <Link to="#">Terms</Link>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}
