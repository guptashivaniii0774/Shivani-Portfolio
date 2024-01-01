import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import homePageImage from '../Images/animation-bg.gif'
import DownloadPDF from '../Images/Shivani_Gupta_Frontend.pdf'
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaDownload, FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="homepage" data-aos="zoom-in">
        <div className="section-01 " >
          <h2>  Hello There  , </h2>
          <h1>My Name is Shivani Gupta </h1>
          <h3>I am a   <TypeAnimation className='TypeAnimation'
            sequence={[
              ' Frontend Developer',
              1000,
              'Ui/Ux Designer ',
              1000,
              'Freelancer ',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          </h3>

          <p>

            "Coding is the art of turning imagination into reality, one line at a time. Welcome to my digital canvas, where innovation meets functionality."</p>

          <div className="inline">


            <button className='contact'>
       <div className="icon">     <a href={DownloadPDF} download="Shivani Gupta CV ">   <FaDownload className='icon-main' /></a></div>
              <span> Download CV</span>
            </button>


            <button className='contact'>

         <div className="icon">   <Link to="/contact">   <FaPhoneAlt className='icon-main' /></Link></div>

              <span>   Contact Me</span>
            </button>
          </div>

          <div class="parent">
            <div class="child child-1">
              <button class="button btn-1">
                <a href="https://www.linkedin.com/in/guptashivaniii0774/"><FaLinkedin /></a>

              </button>
            </div>
            <div class="child child-2">
              <button class="button btn-2">
                <a href="https://www.instagram.com/shivaniii1712/"><FaInstagram /></a>
              </button>
            </div>
            <div class="child child-3">

              <button class="button btn-3">
                <a href="https://github.com/guptashivaniii0774"><FaGithub /></a>
              </button>
            </div>
            <div class="child child-4">
              <button class="button btn-4">
                <a href="https://www.facebook.com/sweetushivi17"><FaFacebook /></a>
              </button>
            </div>
          </div>

        </div>
        <div className="section-02">
          <img src={homePageImage} alt="Shivani Gupta Image" />

        </div>
      </div>
    </>
  )
}

export default HomePage
