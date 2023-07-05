import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "Hii, I am Ashish Kumar Yadav",
    text:
      "I am a Professional Web Developer, Specialised & Experienced in React ",
    // image: "/images/ashish-portfolio-img.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href="https://www.linkedin.com/in/ashish-yadav-057409178"> <FaLinkedin className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com> </li>"> <FaFacebookF className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ashishk892"><FaTwitter className="headerIcon" /></a>
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href=" https:// resume links" className="btn btn-outline">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              {/* <img src={state.image} alt="man"/> */}
              <img src="/images/ashish-portfolio1.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
