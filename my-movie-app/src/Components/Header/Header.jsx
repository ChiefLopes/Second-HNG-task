import React from "react";
import "./Header.css";
import poster from '../../assets/images/Poster.png'
import menu from "../../assets/images/Menu.png"
import tv from "../../assets/images/tv.png"


const Header = () => {
    return (
      <header id="homeHeader" > 
      <nav className="horizontal">
        <div className="logo horizontal">
          <img src={tv} alt="" />
          <p>MovieBox</p>
        </div>
        <div className="search-form">
          <input type="text" placeholder="What do want to watch?"  />
        </div>
        <div className="menu horizontal">
          <p>Sign in</p>
          <img src={menu} alt="" />
        </div>
      </nav>
      <div className="content">
        <h1>John wick: 3 parabellum</h1>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button>WATCH TRAILER</button>
      </div>
    </header>
  );
};

export default Header;
