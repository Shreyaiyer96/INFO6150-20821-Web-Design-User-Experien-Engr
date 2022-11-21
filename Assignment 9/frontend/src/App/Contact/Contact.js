import React from 'react';
import Navbar from '../Navbar/Navbar';
const Contact = () => {
  return (
    <div>
      <Navbar />
    <div class="contact-form">
        <div class="cards">
          <div class="card-body">
            <h2 class="text-center" id="contacth2">Contact US</h2>
            <p class="text-center" id="contactp">
              Contact us for queries and questions regarding courses and job
              opportunities.
            </p>
            <div>

                <form id="contact">
                    <h2>Please write to us and we will reach out to you shortly </h2>
                    <br></br>
  
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
  
    
                    <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    
    
                    <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" ></input>
    
    
                    <input placeholder="Your Web Site (optional)" type="url" tabindex="4" ></input>
    
    
                    <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

                </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Contact;