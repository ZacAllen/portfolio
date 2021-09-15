import React, {Component} from "react";

function Contact(props) {
    return (
        
        <div class="container px-4 px-lg-5 text-center">
            <h2 id = "contactTitle" class="mb-4">Get In Touch With Me</h2>
            <div class="row">
                <div class="col"></div>
                <div class="col-8">
                    <form id = "emailForm">
                        <div class="mb-3">
                          <label for="yourName" class="form-label">Your Name</label>
                          <input type="text" class="form-control shadow-none" id="yourName" aria-describedby="emailHelp"></input>
                          
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email Address</label>
                          <input type="text" class="form-control shadow-none" id="email"></input>
                        </div>
    
                        <div class="mb-3">
                            <label for="messageBody" class="form-label">Message</label>
                            <textarea class="form-control shadow-none" id="messageBody" rows="5"></textarea>
                          </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col"></div>
            </div>
        </div>
    )
}   
export default Contact;
