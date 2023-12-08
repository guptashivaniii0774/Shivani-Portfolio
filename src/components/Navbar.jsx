import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

  };

  return (
    <nav>
      <div className="left-side">
        <Link to="/" onClick={closeMenu }  >
          Shivani
        </Link>
      </div>

      <div className={`right-side ${isMenuOpen ? 'open' : ''}`}>
        <input id="checkbox" type="checkbox" onClick={toggleMenu} />
      
        <label isMenuOpen={isMenuOpen} className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
          <div id="bar3" className="bars"></div>
        </label>

        <ul className={isMenuOpen ? 'show' : ''}>
          <li>
            <Link
              className="hover-underline-animation"
              to="/home"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/about"
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/education"
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/skills"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/service"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/portfolio"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/contact"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
