import React, { useState } from 'react';
import WeatherAppImage from '../Images/WeatherApp.png';
import MusicAppImage from '../Images/musicApp.png';
import TicTacToeImage from '../Images/TicTacToe.png';
import FigmaTemplate from '../Images/FigmaTemplate.png';
import VlogUi from '../Images/VlogUi.png';
import QuoteApp from '../Images/QuoteApp.png';
import NotesMaker from '../Images/NotesMaker.png';
import EcomApp from '../Images/EcomApp.png';








import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [

    {
      title: 'ShopiFy',
      description: 'Shopify, my innovative e-commerce website, seamlessly integrates the FakeStoreAPI for dynamic product management. Enjoy a user-friendly experience with features like easy add, remove, and more. Shop smart, shop Shopify!',
      demo: 'https://shopi-fy.vercel.app/',
      link: 'https://github.com/guptashivaniii0774/ShopiFY',
      image: EcomApp,
    },
    {
      title: 'Notes Maker',
      description: 'Crafted a dynamic notes maker with React and Redux, empowering users with seamless note creation, deletion, and updates—a symphony of productivity at your fingertips.',
      demo: 'https://notes-maker-pearl-phi.vercel.app/',
      link: 'https://github.com/guptashivaniii0774/My-Notes',
      image: NotesMaker,
    },
    
    {
      title: 'Quote App',
      description: 'React magic enchants my quote app: voice whispers wisdom, copy-paste effortlessly, and a responsive UI shares eloquence seamlessly with flair',
      demo: 'https://quote-app-ochre.vercel.app/',
      link: 'https://github.com/guptashivaniii0774/Quote-App-',
      image: QuoteApp,
    },


    {
      title: 'Weather App',
      description: 'I crafted a dynamic weather app with HTML, CSS, and JavaScript, leveraging a weather API...',
      demo: 'https://guptashivaniii0774.github.io/Weather-App/',
      link: 'https://github.com/guptashivaniii0774/Weather-App',
      image: WeatherAppImage,
    },
    {
      title: 'Music App',
      description: 'I crafted a dynamic music app with JavaScript, HTML, and CSS—immersing users in a melodic journey...',
      demo: 'https://guptashivaniii0774.github.io/My-music-Gallery/',
      link: 'https://github.com/guptashivaniii0774/My-music-Gallery',
      image: MusicAppImage,
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'I developed an engaging Tic Tac Toe game using JavaScript, offering a dynamic and entertaining gaming experience.',
      demo: ' https://guptashivaniii0774.github.io/Tic-Tac-Toe/',
      link: 'https://github.com/guptashivaniii0774/Tic-Tac-Toe',
      image: TicTacToeImage,
    },

    {
      title: 'Figma Template',
      description: "Transformed Figma's art into a web symphony using Bootstrap, weaving pixels into a responsive masterpiece that dances with creativity.",
      demo: 'https://guptashivaniii0774.github.io/Figma-Template/',
      link: 'https://github.com/guptashivaniii0774/Figma-Template',
      image: FigmaTemplate,
    },

    {
      title: 'Vlog Page Ui',
      description: '"Vibrant vlog vibes: HTML and CSS dance, crafting a visual symphony. A pixel-perfect fusion of style and substance unfolds."',
      demo: ' https://guptashivaniii0774.github.io/Vlog-Page-Ui/',
      link: 'https://github.com/guptashivaniii0774/Vlog-Page-Ui',
      image: VlogUi,
    },





  ];


  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <>
      <div className="my-portfolio" >
        <h1>My Projects</h1>
        <div className="project-list" data-aos="zoom-in-right">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project">
              <img src={project.image} alt="" />
              <div className="project__content">
                <p className="project__title">{project.title}</p>
                <p className="project__description">{project.description}</p>
                <span>     <button className="project__button">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                  <button className="project__button secondary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  </button></span>
              </div>
            </div>
          ))}
        </div>
        {!showAllProjects && (
          <button className="portfolio-btn" onClick={() => setShowAllProjects(true)}>
            <div className="icon-box">
              <FaAngleDoubleDown className="main-icon" />
            </div>
            <span>Show More</span>
          </button>
        )}
        {showAllProjects && (
          <button className="portfolio-btn" onClick={() => setShowAllProjects(false)}>
            <div className="icon-box">
              <FaAngleDoubleUp className="main-icon" />
            </div>
            <span>Show Less</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Portfolio;

