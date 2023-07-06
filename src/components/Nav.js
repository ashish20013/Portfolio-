import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
const Nav = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="/images/logo.png" alt="logo" />
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
        

                            <li>
                                <a href=""> <Link to="/">Home</Link></a>
                            </li>
                            
                            <li>
                               <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a href=""><Link to="/skill">Skills</Link></a>
                            </li>
                            <li>
                                <a href="">Porject</a>
                            </li>
                            
                            <li>
                                <a href="ashishky892@gmail.com"><Link to="contact">Contact</Link></a>
                            </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    );
};

export default Nav;
