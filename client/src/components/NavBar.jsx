import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className={styles.nav}>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>

      <div>
        <Link to={"/about"}>
          <button>About</button>
        </Link>
      </div>

      <div>
        <Link to={"/favorites"}>
          <button>Favorites</button>
        </Link>
      </div>

      <Link to="/">
        <button onClick={props.logout}>Log Out</button>
      </Link>
    </div>
  );
};

export default NavBar;
