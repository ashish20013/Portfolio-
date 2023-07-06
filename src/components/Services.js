import './Services.css';

import React from "react";
import {
    FaGithub,
    FaBriefcase
} from "react-icons/fa";
const Services = () => {
    const [header] = React.useState({
        // mainHeader: "Portfolio",
        subHeading: " Projects",
        text:
            " Hii This is my Projects on web devlopments",
    });
    const [state] = React.useState([
        {
            id: 1,
            image: "/images/twitter-clone.png",
            heading: "www.thoughtcrafters.in",
            github: "https://github.com/ashish20013/ThoughtCrafters ",
            deployment: "https://www.thougthcrafters.in/",
            text:
                "Hii I this is Currently Working Real Word Software Company Static Website in React , Here build and Host on servers ,  Routing , Local Storege , MUI , React icons .",
        },

        {
            id: 2,
            image: "/images/kanban.png ",
            heading: "KanBan Project ",
            github: " https://github.com/ashish20013/KanBan-Project",
            deployment: "https://thisiskanbanprojects.netlify.app ",
            text:
                "Hello this is kanban projects based on react Here build Frontend Partn , using Routing , Local Storege , MUI , React icons and also use localstorege",
        },

        {
            id: 3,
            image: "/images/kanban.png ",
            github: " https://github.com/ashish20013/AK-Gym.git",
            deployment: "https://ak-gmy.netlify.app ",
            heading: "Gym Website",
            text:
                "Build a Gym Website in ReactHere build Frontend Partn , using Routing , Local Storege , MUI , React icons and Redux  ",
        },
        {
            id: 4,
            image: " /images/twitter-clone.png",
            github: "https://github.com/ashish20013/Twitter-Clone-Project ",
            deployment: "https://twitter-clone-by-ashish.netlify.app ",
            heading: "Twitter Clone",
            text:
                "this is twitter cloneing Project using in react , Here build Frontend Partn , using Routing , Local Storege , MUI , React icons .  ",
        },
        {
            id: 3,
            image: " /images/goole-docs.png",
            github: "https://github.com/ashish20013/Google-Docs-Projects ",
            deployment: " https://google-docs-clone-by-ashish.netlify.app",
            heading: "Google Docs Clone",
            text:
                "This is google docs cloneing ,Here build Frontend Partn , using Routing , Local Storege , MUI , React icons , andusing other librery . ",
        },

    ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                   
                    <div className="exp">
                        <h1> Experience</h1>
                        <h4>  ------- 20 March 2023 -to- Present  --------</h4>
                        <h2><FaBriefcase className='job' />   FunctionUp work as a Front-End Trainee</h2>

                    </div>
                    <div className="common">
                        {/* <h3 className="heading">{header.mainHeader}</h3> */}
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="services__box">
                                    <img src={info.image} alt="logo" className='project-img'/>
                                    <div className="services__box-header">{info.heading}</div>

                                    <div className="services__box-p">{info.text}</div>
                                    <div className="git-live">

                                        <div className="services__box-github"><a href={info.github}> <button className='git-btn'><FaGithub/></button></a></div>
                                        <div className="services__box-deployment"><a href={info.deployment}><button className='live-btn'>Live</button></a></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
