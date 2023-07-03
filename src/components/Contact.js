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
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                    <div className="row justifyConter">
                        <div className="col-6">
                            <div className="contactSection-logo">
                                <img src="/images/logo.png" alt="logo" />
                            </div>
                            <p>
                                Hii This is ashish kumar yadav.
                            </p>
                            <uyl className="contactCircles">
                                <li>
                                    <FaLinkedin className="contactIcon" />
                                </li>
                                
                                <li>
                                    <FaFacebookF className="contactIcon" />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
