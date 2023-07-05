import React from "react";

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text:
            "My name is Ashish Kumar Yadav, and I have been working as a web developer for 1 years. Throughout my career, I have had the privilege of working on a wide range of projects, from small business websites to large-scale e-commerce platforms. I am well-versed in various programming languages, frameworks, and development methodologies, When it comes to front-end development, I have a strong command of HTML, CSS, and JavaScript. I am experienced in using modern frameworks such as React and Angular to build dynamic and interactive user interfaces. I pay close attention to responsive design principles and accessibility standards to ensure that websites are visually appealing and user-friendly across different devices and platforms, Throughout my career, I have emphasized the importance of collaboration and effective communication. I enjoy working in agile environments, collaborating with cross-functional teams, and utilizing version control systems like Git to ensure smooth development workflows. I am adaptable and able to quickly learn new technologies and frameworks to stay up-to-date with the ever-evolving web development landscape, Thank you once again for considering my Portfolio",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Ashish Kumar Yadav" },
        { id: 2, title: "Email:", text: "ashishky892@gmail.com" },
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
                        
                            <div className="about__info-p1">
                                I'm an aspiring web developer with an aspiration to build new features from ideation to production, implementation of frameworks and design flows that enable user to have a seamless experience. I take into consideration writing reusable and efficient code. I have been passionately combining good design, technology, and innovation in all my projects.
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
