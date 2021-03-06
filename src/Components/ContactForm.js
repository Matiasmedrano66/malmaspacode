import './ContactForm.css';
import React,  {useState, useEffect} from 'react';
import Press from './Press.js';

const ContactForm = () => {
    return (
        <div id="contact-form" name='contact-form'>    
        <section class="Material-contact-section section-padding section-dark">
        <div class="container">
            <div class="row">
                <Press />
                <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                    <h1 id="contact-title">Contact Us</h1>
                    <br/>
                    <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                   
                        <div class="form-group label-floating">
                          <label class="control-label" for="name">Name</label>
                          <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                          <div class="help-block with-errors"></div>
                        </div>
                       
                        <div class="form-group label-floating">
                          <label class="control-label" for="email">Email</label>
                          <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                          <div class="help-block with-errors"></div>
                        </div>
                     
                        <div class="form-group label-floating">
                          <label class="control-label">Subject</label>
                          <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject" />
                          <div class="help-block with-errors"></div>
                        </div>
                      
                        <div class="form-group label-floating">
                            <label for="message" class="control-label">Message</label>
                            <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                            <div class="help-block with-errors"></div>
                        </div>
                    
                        <div class="form-submit mt-5">
                            <button class="btn btn-common" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Send Message</button>
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
      </div>
    )
}

export default ContactForm;