import React from 'react'
import AboutMeImage from '../Images/undraw_coffee_time.svg'

const AboutMe = () => {
  return (
    <div className='about-me' >

      <div className="part-01" data-aos="zoom-in">
        <div className="inbox">
          <h1>Who I Am ?</h1>
          <p>"Hello, I'm Shivani Gupta—a creative soul with a background in banking
            who embarked on an exhilarating journey into the world of IT. Fueled
            by passion, I taught myself the intricate languages of web development,
            and my curiosity led me to join eSkills Web. Here, I've woven my passion
            into projects that aren't just lines of code; they're stories waiting to
            be experienced. Join me on this digital odyssey, where every project is
            a testament to the fusion of self-discovery and the ever-evolving language
            of technology."
          </p>
        </div>
      </div>
      <div className="part-02" data-aos="zoom-in">
        <img src={AboutMeImage} alt="About me" />
      </div>



    </div>
  )
}

export default AboutMe
