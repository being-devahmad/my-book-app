import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed">
          <div className="container-fluid px-4">
            <NavLink to="/" className="navbar-brand">
              BookShop
            </NavLink>
            <div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavLink
                  to="/books"
                  className="nav-item text-decoration-none text-white fs-5 mx-3"
                >
                  Books
                </NavLink>
                <NavLink
                  to="/cart"
                  className="nav-item text-decoration-none text-white fs-5"
                >
                  <i class="bi bi-cart-check"></i>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};
export default Navbar;
