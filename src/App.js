import React from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Projects from "./components/project/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
