import React, {Component, Form, Button, Input, TextArea} from "react";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import env from 'react-dotenv';

function Contact(props) {

    const sendEmail = (e) => {
        e.preventDefault();
        var n = e.target.elements['name'].value;
        var em = e.target.elements['email'].value;
        var m = e.target.elements['message'].value;

        if (!/\S/.test(n) || !/\S/.test(em) ||!/\S/.test(m)) {
            //if any fields empty
            swal('Please fill in all fields.')
        } 
        //for running locally
        // else {
        //     emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        //     .then((result) => {
        //         // console.log(result.text);
        //         swal('Your message has been sent!')
        //     }, (error) => {
        //         console.log(error.text);
        //     })
        // }

        
        //for running on server
        else {
            emailjs.sendForm(env.REACT_APP_SERVICE_ID, env.REACT_APP_TEMPLATE_ID, e.target, env.REACT_APP_USER_ID)
            .then((result) => {
                // console.log(result.text);
                swal('Your message has been sent!')
            }, (error) => {
                console.log(error.text);
            })
        }
        
        
        
    }

    return (
        
        <div className="container px-4 px-lg-5 text-center">
            <h2 id = "contactTitle" className="mb-4">Get In Touch With Me</h2>
            <div className="row">
                <div className="col-lg-2 col-sm-1"></div>
                <div className="col-lg-8 col-sm-10">
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
                <div className="col-lg-2 col-sm-1"></div>
            </div>
        </div>
    )
}   
export default Contact;
