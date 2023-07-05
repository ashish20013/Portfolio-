import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
// import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Skill  from "./components/Skils";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
      <Skill/>
      <About />
      {/* <Prices /> */}
      <Contact />
    </div>
  );
}

export default App;
