import Link from 'next/link';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="section-footer bg-secondary">
      <div className="container">
        <section className="footer-top padding-y-lg text-white">
          <div className="row">
            <aside className="col-md col-6">
              <h6 className="title">Brands</h6>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>Adidas</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Puma</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Reebok</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Nike</a>
                  </Link>
                </li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    About us
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Career
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Find a store
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Rules and terms
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Sitemap
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Help</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Money refund
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Order status
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Shipping info
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Open dispute
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Account</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    User Login
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    User register
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    Account Setting
                  </a>
                </li>
                <li>
                  <a href="https://w1qltmqorpc.typeform.com/to/fDfu1tQb">
                    My Orders
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Social</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" /> Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>
        <section className="footer-bottom text-center">
          <p className="text-white">
            Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
          </p>
          <p className="text-muted">Benyaan, All rights reserved</p>
          <br />
        </section>
      </div>
    </footer>
  );
};
