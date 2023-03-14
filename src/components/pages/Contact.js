import React from 'react';
import spaceimg from "../../assets/images/image1.jpg"
import {SocialIcon} from "react-social-icons"

const background = {
  backgroundImage: `url(${spaceimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

function Contact() {
  

  return (
    <div style={background}>
      <h1 className='contact-heading'>Contact me!</h1>
      <form id="contact-form" name="contact-form" className='contact-div'>
<div className="row">

    
    <div className="col-md-6">
        <div className="md-form mb-0">
            <input type="text" id="name" name="name" className="form-control"/>
            <label for="name" className="contact-text">Your name</label>
        </div>
    </div>
    

    
    <div className="col-md-6">
        <div className="md-form mb-0">
            <input type="text" id="email" name="email" className="form-control"/>
            <label for="email" className="contact-text">Your email</label>
        </div>
    </div>
    

</div>



<div className="row">
    <div className="col-md-12">
        <div className="md-form mb-0">
            <input type="text" id="subject" name="subject" className="form-control"/>
            <label for="subject" className="contact-text">Subject</label>
        </div>
    </div>
</div>



<div className="row">

    
    <div className="col-md-12">

        <div className="md-form">
            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
            <label for="message" className='contact-text'>Your message</label>
        </div>

    </div>
    <div class="text-center text-md-left">
                <button class="btn btn-primary">Send</button>
            </div>

            <div className='icons'>
              <SocialIcon url="https://www.linkedin.com/in/ihsan-mahmood-6b7919226/"/>
              <SocialIcon url="https://github.com/ihsanm?tab=repositories" bgColor='white'/>
              <p className='contact-text'>mahmood.ihsan98989@gmail.com</p>
            </div>
</div>


</form>
    </div>
  );
}

export default Contact;
