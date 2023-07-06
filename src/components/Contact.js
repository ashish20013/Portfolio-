import React from "react";
import {
    FaLinkedin,
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    // FaPlay,
} from "react-icons/fa";
const Contact = () => {
    return (
<>
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                    <div className="row justifyConter">
                        <div className="col-6">
                            <div className="contactSection-logo">
                            <uyl className="contactCircles">
                                <li>
                                    <a href="https://www.linkedin.com/in/ashish-yadav-057409178"><FaLinkedin className="contactIcon" /></a>
                                </li>

                                <li>
                                    <a href="https://www.facebook.com/"> <FaFacebookF className="contactIcon" /></a>
                                </li>
                                <li>
                                    <FaTwitter className="contactIcon" />
                                </li>
                                <li>
                                    <FaPinterest className="contactIcon" />
                                </li>
                                <li>
                                    <FaInstagram className="contactIcon" />
                                </li>
                                        
                            </uyl>
                                    
                        </div>
                                <p className="footertag">ashish kumar yadav © 2023. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        
        </div >
            
        </>  
    );
};

export default Contact;
