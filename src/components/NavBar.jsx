import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Link to="/">
          <img src="/rick.svg" />
        </Link>
      </div>

      <div>
        <Link to="/">
          <a>Home</a>
        </Link>

        <Link to="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
