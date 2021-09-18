import React, {Component, Form, Button, Input, TextArea} from "react";
import emailjs from 'emailjs-com';

function Contact(props) {

    const sendEmail = (e) => {
        console.log(e.target);
        e.preventDefault();
        
        emailjs.sendForm('service_1912', 'contact_template2', e.target, 'user_9JRV3Xm9g3W8fkPvlppiT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        
        <div className="container px-4 px-lg-5 text-center">
            <h2 id = "contactTitle" className="mb-4">Get In Touch With Me</h2>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <form className = "contact-form" id = "emailForm" onSubmit={sendEmail}>
                        
                          <label className="form-label">Your Name</label>
                          <input name="from_name" type="text" className="form-control shadow-none mb-4" id="name"></input>
                   
                          <label className="form-label">Email Address</label>
                          <input name="reply_to" type="email" className="form-control shadow-none mb-4" id="email"></input>
                   
    
                          <label  className="form-label">Message</label>
                          <textarea name="message" className="form-control shadow-none mb-4" id="message" rows="5"></textarea>
                    
                        
                        <button type="submit" value="Send"className="btn btn-primary">Submit</button>
                    </form>
        
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}   
export default Contact;
