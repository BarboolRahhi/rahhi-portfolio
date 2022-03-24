import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="app__social-icon">
        <BsInstagram></BsInstagram>
      </div>
      <div className="app__social-icon">
        <FaGithub></FaGithub>
      </div>
      <div className="app__social-icon">
        <FaLinkedin></FaLinkedin>
      </div>
      <div className="app__social-line"></div>
    </div>
  );
};

export default SocialMedia;
