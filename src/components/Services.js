import React from "react";
import {
    FaGithub,
    FaCamera,
    FaCircleNotch,
    FaApple,
    FaFileVideo,
    FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
    const [header] = React.useState({
        mainHeader: "Portfolio",
        subHeading: "My Projects",
        text:
            " Hii This is my Projects on web devlopments",
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <FaGithub className="commonIcons" />,
            image: "https://in.images.search.yahoo.com/search/images?p=image&fr=mcafee&type=E210IN826G0&imgurl=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2015%2F12%2FNature-Lake-Bled.-Desktop-background-image.jpg#id=0&iurl=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2015%2F12%2FNature-Lake-Bled.-Desktop-background-image.jpg&action=click",
            heading: "www.thoughtcrafters.in - ",
            github: "https://github.com/ashish20013/ThoughtCrafters ",
            text:
                "Hii I this is Currently Working Software Company Static Website in React ",
        },
        
        {
            id: 2,
            image : " ",
            heading: "KanBan Project ",
            github: " https://github.com/ashish20013/KanBan-Project",
            deployment: "https://thisiskanbanprojects.netlify.app ",
            text:
                "Hello this is kanban projects based on react",
        },
        
        {
            id: 3,
            image: " ",
            github: " https://github.com/ashish20013/AK-Gym.git",
            deployment: " ",
            heading: "Gym Website",
            text:
                "Build a Gym Website in React  ",
        },
        {
            id: 4,
            image: " ",
            github: "https://github.com/ashish20013/Twitter-Clone-Project ",
            deployment: " ",
            heading: "Twitter Clone",
            text:
                "this is twitter cloneing in react  ",
        },
        {
            id: 3,
            image: " ",
            github: "https://github.com/ashish20013/Google-Docs-Projects ",
            deployment: " ",
            heading: "Google Docs Clone",
            text:
                "This is google docs cloneing  ",
        },
       
    ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="services__box">
                                    {info.image}
                                    <div className="services__box-header">{info.heading}</div>
                                    <div className="services__box-github">{info.github}</div>
                                    <div className="services__box-deployment">{info.deployment}</div>
                                    <div className="services__box-p">{info.text}</div>
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
