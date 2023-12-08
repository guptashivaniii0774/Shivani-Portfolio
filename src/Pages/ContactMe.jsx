import axios from 'axios';
import React, { useState } from 'react'
import formImage from '../Images/undraw_contact_us.svg'


const ContactMe = () => {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');



  const handleSubmit = async(e)=>{
    e.preventDefault();
    const serviceId = 'guptashivaniii0774';
    const templateId = 'template_pgs8ymq';
    const publicKey = 'I0wIGHgBRiF3ef8Xc';
 const data = {

   service_id: serviceId,
  template_id: templateId,
   user_id: publicKey,
   template_params:{
    from_name: name,
    from_email: email,
    to_name: 'Shivani Gupta',
    message: message,
   }
 };
try {
  const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
 console.log(res.data);
  setName('');
  setEmail('');
  setMessage('');
} catch (error) {
  console.log(error);
}

}

  
  return (
    <div className="contact-me" >
    <div className='form' data-aos="zoom-in">
    <h1>
      Have a Project ?
    </h1>

   <form className='form-detail' onSubmit={handleSubmit}>
    <input className='input' type="text" required 
    placeholder='Enter your Name'
    value={name}
    onChange={(e)=> setName(e.target.value)}/>
     <input className='input' type="email" required
    placeholder='enter Your Email'
    value={email}
    onChange={(e)=> setEmail(e.target.value)}/>
     <textarea  type="text" required
    placeholder='Your Message Here...'
    value={message}
    onChange={(e)=> setMessage(e.target.value)}/>
<button type='submit' className='form-btn'>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>

   </form>
   </div>
   {/* <div className="my-details">
 <h5>guptashivaniii0774@gmail.com</h5>
 <h5>6260740774</h5>
 <h5>13 , Surya Sushant Khajrana,
  <br /> Indore (M.P)</h5>
   </div> */}
   <div className="form-img" data-aos="zoom-in" >
    <img src={formImage} alt="" />
   </div>
   </div>
  )
}

export default ContactMe 
