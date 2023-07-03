import React from "react";

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text:
            "I am Ashish web Devloper.",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Ashish Kumar Yadav" },
        { id: 2, title: "Email:", text: "ashishky892@gmail.com.com" },
        { id: 3, title: "Phone:", text: "8576891104" },
        { id: 4, title: "Linkedin", text: "ashish-yadav-057409178" },
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/images/ashish-portfolio1.png" alt="man" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1>Hi There</h1>
                            <div className="about__info-p1">
                                Hii I am ashish Kumar Yadav 
                            </div>
                            <div className="about__info-p2">
                                 web devloper
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {state.map((info) => (
                                        <div className="col-6">
                                            <strong>{info.title}</strong>
                                            <p>{info.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
