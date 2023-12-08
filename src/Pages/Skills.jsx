import React from 'react'
import { FaBootstrap, FaReact, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
  return (
    <div className='skills'>
      <h1>Skills</h1>
 <div className="skills-container" >
 <div class="container" data-aos="flip-right">
        <FaHtml5 className='icons' />
        <h5>HTML5 </h5>
      </div>
      <div class="container" data-aos="flip-right">
        <FaCss3 className='icons' />
        <h5>CSS3 </h5>
      </div><div class="container" data-aos="flip-right">
        <FaBootstrap className='icons' />
        <h5>Bootstrap </h5>
      </div><div class="container" data-aos="flip-right">
        <TbBrandJavascript className='icons' />
        <h5>Javascript </h5>
      </div><div class="container" data-aos="flip-right">
        <FaReact className='icons' />
        <h5>React Js </h5>
      </div><div class="container" data-aos="flip-right">
        <BiLogoRedux className='icons' />
        <h5>Redux</h5>
      </div>
      <div class="container" data-aos="flip-right">
        <BiLogoTailwindCss className='icons' />
        <h5>Tailwind JS </h5>
      </div> <div class="container" data-aos="flip-right">
        <FaGithub className='icons' />
        <h5>GitHub </h5>
      </div>
 </div>
    </div>

  )
}

export default Skills

