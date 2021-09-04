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
import { FC, useState } from 'react';

export const Header: FC = () => {
  const [toggleCollapse, settoggleCollapse] = useState<boolean>(false);

  return (
    <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-12">
              <a href="#" className="brand-wrap">
                <Image
                  className="logo"
                  layout="fixed"
                  height={80}
                  width={80}
                  src="/images/logo.svg"
                  alt=".."
                />
              </a>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6">
              <form action="#" className="search-header">
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
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-user" />
                    </div>
                    <small className="text"> Sign Up </small>
                  </a>
                </div>
                <div className="widget-header mr-3">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-comment-dots" />
                    </div>
                    <small className="text"> Message </small>
                  </a>
                </div>
                <div className="widget-header mr-3">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-store" />
                    </div>
                    <small className="text"> Orders </small>
                  </a>
                </div>
                <div className="widget-header">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-shopping-cart" />
                    </div>
                    <small className="text"> Cart </small>
                  </a>
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
                    <MDBDropdownItem href="#!">Machinery</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Electronics</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Home textile</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Home and kitchen
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Service and equipment
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Healthcare items
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Toys and Hobbies
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <a className="nav-link" href="#">
                  Ready to ship
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="nav-link" href="#">
                  Trade shows
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="nav-link" href="#">
                  Services
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="nav-link" href="#">
                  Sell with us
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <a className="nav-link" href="./register.html">
                  Register With Us
                </a>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <i className="fas fa-language mr-1"></i>English
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Arabic</MDBDropdownItem>
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
