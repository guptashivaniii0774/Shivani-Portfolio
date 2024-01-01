import React from 'react'
import { FaCode, FaLaptopCode, FaPencilRuler, FaCubes } from "react-icons/fa";


const Services = () => {
  return (
    <div className='services'  >
      <h1>Services I can help you with...</h1>

<div className='service-box '>
  
<div class="item" data-aos="fade-down">
          <FaCode />
          <span class="text"> Website Designing  </span>
        </div>
        <div class="item " data-aos="fade-down">
          <FaCubes />
          <span class="text"> Ui / Ux </span>
        </div>
        <div class="item"data-aos="fade-down">
          <FaLaptopCode />
          <span class="text"> Freelancing </span>
        </div>
        <div class="item"data-aos="fade-down">
          <FaPencilRuler />
          <span class="text"> Banner Design </span>
        </div>
    
</div>
      </div>

  )
}

export default Services
