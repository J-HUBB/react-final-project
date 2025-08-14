import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="row nav__row">
          <div className="nav__logo">
            <a href="/">
            <img
              className="nav__logo--img"
              src="data:image/jpeg;base64,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"
            />
            </a>
          </div>
          <div className="nav__links">
            <a
              href="/"
              className="nav__link link__hover-effect link__hover-effect--white"
            >
              Home
            </a>
            <a
              href="/"
              className="nav__link link__hover-effect link__hover-effect--white"
            >
              Find Movie
            </a>
            <a href="#" className="nav__link--contact">
              Join
            </a>
          </div>
        </div>
        <div className="overlay"></div>
      </nav>
    </>
  );
};

export default Nav;
