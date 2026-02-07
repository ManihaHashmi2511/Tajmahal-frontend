import React from 'react'
import logo from '../assets/images/Tajmahal logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
     <div className="sticky-top" style={{height: '10px'}}>
    <img className="headerImg" src="src/assets/images/header-bg-04.png" alt="" />
    <div className="navBar">
      <nav className="navbar   navbar-expand-lg bg-transparent navbar-light  py-lg-0">
        <Link to="/" className="navbar-brand mt-2 ">
          <img className="img-fluid" src={logo} alt="Logo" />

        </Link>
        <button type="button" className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/vision" className="nav-item nav-link">Vision</Link>
            <Link to="/mission" className="nav-item nav-link">Mission</Link>
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</Link>
              <div className="dropdown-menu bg-light m-0 ">
                <Link to={'/products'} className="dropdown-item ">Our Confectionary</Link>
                <Link to={'/tajmahal-tea'} className="dropdown-item">Our Tea</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
          </div>
        </div>
      </nav>
    </div>
  </div>
    </>
  )
}
