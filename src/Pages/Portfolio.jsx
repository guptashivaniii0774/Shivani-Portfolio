  import React, { useState } from 'react';
  import WeatherAppImage from '../Images/Projects/WeatherApp.png';
  import MusicAppImage from '../Images/Projects/musicApp.png';
  import TicTacToeImage from '../Images/Projects/TicTacToe.mp4';
  import FigmaTemplate from '../Images/Projects/FigmaTemplate.png';
  import VlogUi from '../Images/Projects/VlogUi.png';
  import QuoteApp from '../Images/Projects/QuoteApp.png';
  import NotesMaker from '../Images/Projects/NotesMaker.png';
  import EcomApp from '../Images/Projects/EcomApp.mp4';
  import CurrencyApp from '../Images/Projects/CurrencyApp.png';
  import BudgetBuddy from '../Images/Projects/Budget-Buddy.png';

  import WebsiteDesign from '../Images/Projects/WebsiteDesign.mp4';











  import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

  const Portfolio = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const projects = [

      {
        title: 'ShopiFy',
        description: 'Shopify, my innovative e-commerce website, seamlessly integrates the FakeStoreAPI for dynamic product management. Enjoy a user-friendly experience with features like easy add, remove, and more. Shop smart, shop Shopify!',
        demo: 'https://shopi-fy.vercel.app/',
        link: 'https://github.com/guptashivaniii0774/ShopiFY',
        video: EcomApp,
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
        title: 'Budget Buddy',
        description: 'I crafted a dynamic weather app with HTML, CSS, and JavaScript, leveraging a weather API...',
        demo: 'https://budget-buddy-eta.vercel.app',
        link: 'https://github.com/guptashivaniii0774/Budget-Buddy',
        image: BudgetBuddy,
      },
      
      {
        title: 'Tic-Tac-Toe',
        description: 'I developed an engaging Tic Tac Toe game using JavaScript, offering a dynamic and entertaining gaming experience.',
        demo: ' https://guptashivaniii0774.github.io/Tic-Tac-Toe/',
        link: 'https://github.com/guptashivaniii0774/Tic-Tac-Toe',
        video: TicTacToeImage,
      },
      {
        title: 'Music App',
        description: 'I crafted a dynamic music app with JavaScript, HTML, and CSS—immersing users in a melodic journey...',
        demo: 'https://guptashivaniii0774.github.io/My-music-Gallery/',
        link: 'https://github.com/guptashivaniii0774/My-music-Gallery',
        image: MusicAppImage,
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
        description: 'Vibrant vlog vibes: HTML and CSS dance, crafting a visual symphony. A pixel-perfect fusion of style and substance unfolds.',
        demo: ' https://guptashivaniii0774.github.io/Vlog-Page-Ui/',
        link: 'https://github.com/guptashivaniii0774/Vlog-Page-Ui',
        image: VlogUi,
      },

      {
        title: 'Website Design',
        description: 'I crafted a website employing HTML, CSS, and Bootstrap, dedicating my efforts solely to refining the user interface design.',
        demo: ' https://guptashivaniii0774.github.io/Andrea-D-Agostini/',
        link: 'https://github.com/guptashivaniii0774/Andrea-D-Agostini',
        video: WebsiteDesign,
      },
      {
        title: 'Currency Converter',
        description: 'I crafted a currency converter with React and Tailwind, seamlessly integrating a currency API for real-time exchange rates.',
        demo: ' https://currency-converter-six-blue.vercel.app/',
        link: 'https://github.com/guptashivaniii0774/Currency-converter-',
        image: CurrencyApp,
      },
    


    ];


    const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

    return (
      <>
      <div className="my-portfolio">
        <h1>My Projects</h1>
        <div className="project-list" data-aos="zoom-in-right">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project">
              {project.video ? (
                <video width="100%" loop autoPlay muted >
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <img src={project.image} alt="" />
              )}
              <div className="project__content">
                <p className="project__title">{project.title}</p>
                <p className="project__description">{project.description}</p>
                <span>
                  <button className="project__button">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </button>
                  <button className="project__button secondary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  </button>
                </span>
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

