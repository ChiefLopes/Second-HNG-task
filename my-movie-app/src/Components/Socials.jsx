import React from "react";
import facebook from "../assets/svgs/facebook.svg";
import instagram from "../assets/svgs/instagram.svg";
import twitter from "../assets/svgs/twitter.svg";
import youtube from "../assets/svgs/youtube.svg";
const Socials = () => {
  return (
    <div className="socials">
      <img className="social" src={facebook}  alt={facebook}></img>
      <img className="social" src={instagram} alt=""></img>
      <img className="social" src={twitter} alt=""></img>
      <img className="social" src={youtube}  alt=""></img>
     
    </div>
  );
};

export default Socials;
