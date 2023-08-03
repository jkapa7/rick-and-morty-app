import { SearchBar } from "./SearchBar";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
