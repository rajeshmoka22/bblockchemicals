import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, Container, FormControl, Form, Button } from 'react-bootstrap';
import { breadCrumb } from '../../routes/routes';
import './navbar.css';
import logo from '../../assets/images/logo.svg';

function NavBar(props) {
  const { pathname } = props.location;
  const { cart } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <header>
        <nav className="nav-bar">
          <div className="nav-group">
            <div className="nav-wrapper">
              <div>
                <Nav.Link href='/' className="heading-chemicals">
                  <div className="brand-logo">
                    <img src={logo} alt="bb chemicals logo" className="brand-logo" />
                  </div>
                </Nav.Link>
              </div>
              <div className="right">
                <div className="right-menu">
                  <div className="product-search">
                    <input className="product-search-input" type="text"  placeholder="Search" />
                  </div>
                  <div className="join-buttons d-flex">
                    <div className="sign-in-text text-white" onClick={() => console.log('clicked')}>Login</div>
                    <div className="cart d-flex align-items-center">
                      <Link to='/cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                      </Link>
                      <span className="cart-count">
                        {cart.cartCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-bars" onClick={() => setMenuOpen(!isMenuOpen)}>
              <div className={`menubar ${isMenuOpen? 'rotate45' : ''}`}></div>
              <div className={`menubar ${isMenuOpen? 'd-none' : ''}`}></div>
              <div className={`menubar ${isMenuOpen? 'rotate-45' : ''}`}></div>
            </div>
          </div>
          <div className={`menu ${isMenuOpen ? '' : 'menu-hidden'}`}>
            <div className="menu-bars" onClick={() => setMenuOpen(!isMenuOpen)}>
              <div className={`menubar border-black ${isMenuOpen? 'rotate45' : ''}`}></div>
              <div className={`menubar border-black ${isMenuOpen? 'rotate-45' : ''}`}></div>
            </div>
            <div className="flex-shrink-none left">
              <ul className="nav-routes">
              {
                breadCrumb.map(route => {
                  return (
                    <Nav.Link
                      key={route.path}
                      href={route.path}
                      className={(pathname === route.path) ? 'd-inline link active' : 'd-inline link' }
                    >
                      {route.name}
                    </Nav.Link>
                  )
                })
              }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return ({
    cart: state.cart
  })
}

export default connect(mapStateToProps)(withRouter(NavBar));