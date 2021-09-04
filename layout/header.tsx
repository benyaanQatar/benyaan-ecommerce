import {
  MDBCollapse,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from 'mdbreact';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

export const Header: FC = () => {
  const [toggleCollapse, settoggleCollapse] = useState<boolean>(false);

  return (
    <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-12">
              <Link href="/">
                <a className="brand-wrap">
                  <Image
                    className="logo"
                    layout="fixed"
                    height={80}
                    width={80}
                    src="/images/logo.svg"
                    alt=".."
                  />
                </a>
              </Link>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="search-header"
              >
                <div className="input-group w-100">
                  <select
                    className="custom-select border-right"
                    name="category_name"
                  >
                    <option value="">All type</option>
                    <option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-search" /> Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widgets-wrap float-md-right">
                <div className="widget-header mr-3">
                  <Link href="/">
                    <a className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user" />
                      </div>
                      <small className="text"> Sign Up </small>
                    </a>
                  </Link>
                </div>
                <div className="widget-header mr-3">
                  <Link href="/">
                    <a className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-comment-dots" />
                      </div>
                      <small className="text"> Message </small>
                    </a>
                  </Link>
                </div>
                <div className="widget-header mr-3">
                  <Link href="/">
                    <a className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-store" />
                      </div>
                      <small className="text"> Orders </small>
                    </a>
                  </Link>
                </div>
                <div className="widget-header">
                  <Link href="/">
                    <a className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                      </div>
                      <small className="text"> Cart </small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MDBNavbar
        expand="lg"
        className="navbar navbar-main navbar-expand-lg border-bottom"
      >
        <div className="container">
          <MDBNavbarToggler
            onClick={() => settoggleCollapse(!toggleCollapse)}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={toggleCollapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <i className="fa fa-bars text-muted mr-2"></i> Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem>Machinery</MDBDropdownItem>
                    <MDBDropdownItem>Electronics</MDBDropdownItem>
                    <MDBDropdownItem>Home textile</MDBDropdownItem>
                    <MDBDropdownItem>Home and kitchen</MDBDropdownItem>
                    <MDBDropdownItem>Service and equipment</MDBDropdownItem>
                    <MDBDropdownItem>Healthcare items</MDBDropdownItem>
                    <MDBDropdownItem>Toys and Hobbies</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/">
                  <a className="nav-link">Ready to ship</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/">
                  <a className="nav-link">Trade shows</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/">
                  <a className="nav-link">Services</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/">
                  <a className="nav-link">Sell with us</a>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link href="/register/en" passHref>
                  <a className="nav-link">Register With Us</a>
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <i className="fas fa-language mr-1"></i> Language
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link href="/register/en" passHref>
                      <MDBDropdownItem>English</MDBDropdownItem>
                    </Link>
                    <Link href="/register/ar" passHref>
                      <MDBDropdownItem>Arabic</MDBDropdownItem>
                    </Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </div>
      </MDBNavbar>
    </header>
  );
};
