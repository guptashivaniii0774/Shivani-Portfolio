import React from 'react'
import EducationImage from '../Images/undraw_education.svg'
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    return (
        <div className="education-talk">
                 <div className="edu-part01" data-aos="fade-down">
                <img src={EducationImage} alt="Education Image" />
            </div>
            <div className="edu-part02" > 
                <h1>Education</h1>
                <div className="study" data-aos="fade-down">
                <div className="study-box-01"><FaGraduationCap /></div>
                    <div className="study-box-02">
                        <h6>2017-2020</h6>
                        <h5>Bachelor of Commerce</h5>
                        <h4>RPL Maheshwari Collage , Indore (M.P)</h4>

                    </div>
                </div>
                <div className="study" data-aos="fade-down">
                    <div className="study-box-01"><FaGraduationCap /></div>
                    <div className="study-box-02">
                        <h6>2015-2017</h6>
                        <h5>Higher Secondary Education</h5>
                        <h4>New Catholic Mission Higher Secondary School , Jhabua (M.P)</h4>
                    </div>
                </div>
              
            </div>
       

        </div>
    )
}

export default Education
