import React from "react";
import facebook from "../assets/svgs/facebook.svg";
import instagram from "../assets/svgs/instagram.svg";
import twitter from "../assets/svgs/twitter.svg";
import youtube from "../assets/svgs/youtube.svg";
const Socials = () => {
  return (
    <div className="socials">
      <img className="facebook" src={facebook}  alt={facebook}></img>
      <img className="instagram" src={instagram} alt=""></img>
      <img className="twitter" src={twitter} alt=""></img>
      <img className="facebook" src={youtube}  alt=""></img>
     
    </div>
  );
};

export default Socials;
