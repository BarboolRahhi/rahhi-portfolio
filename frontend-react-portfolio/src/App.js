import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

import { Navbar } from "./components";

import "./App.scss";
import SocialMedia from "./components/SocialMedia";

export const App = () => {
  return (
    <div className="app">
      <div className="app__social-container">
        <SocialMedia />
      </div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};
