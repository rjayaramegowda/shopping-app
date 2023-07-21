import React from "react";

const Header = () => {
  return (
    <header className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="./images/logo.png" alt="logo" />
          <ul className="navbar-nav mx-auto mb-2 d-none d-md-flex text-uppercase">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                The Edit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Designers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Clothing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shoes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bags
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accessories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jewelry
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Beauty
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-search fa-lg" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#">
                <i className="fa fa-user-o fa-lg" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a className="nav-link" href="#">
                <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
