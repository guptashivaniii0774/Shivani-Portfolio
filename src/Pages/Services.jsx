import React from 'react'
import { FaCode, FaLaptopCode, FaPencilRuler, FaCubes } from "react-icons/fa";


const Services = () => {
  return (
    <div className='services'  >
      <h1>Services I can help you with...</h1>

      <div class="card" data-aos="fade-down" >
        <div class="item">
          <FaCode />
          <span class="text"> Web Development  </span>
        </div>
        <div class="item">
          <FaLaptopCode />
          <span class="text"> Web Appications </span>
        </div>
        <div class="item">
          <FaPencilRuler />
          <span class="text"> Banner Design </span>
        </div>
        <div class="item ">
          <FaCubes />
          <span class="text"> Ui / Ux </span>
        </div>
      </div>
    </div>
  )
}

export default Services
