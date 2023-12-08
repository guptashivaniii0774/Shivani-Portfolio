import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
      <Link to="top" smooth={true} duration={500}>
        <button className='scroll-btn' onClick={scrollToTop}><FaArrowUp />
</button>
      </Link>
    </div>
  );
};

export default BackToTopButton;
