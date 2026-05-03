import React from 'react'
import './contact.css'
import con from '../../assets/contact.png'
function Contact() {
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/mdkqpgpy" method='POST'>
                <input name='username' type="text"placeholder='Name' />
                 <input name='email' type="email"placeholder='Email' />
                 <textarea placeholder='Message Me' name="message" id="textarea"></textarea>
                 <input type="submit" id='btn' value='Submit'/>
            </form>
        </div>
    </div>
  )
}

export default Contact
