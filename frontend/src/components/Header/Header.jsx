import { Link } from "react-router-dom";
import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style["header"]}>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div className="overlay">
                <div className="logo">
                  <img src="./fake-logo.png"></img>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="dashboard">
              <button>Dashboard</button>
            </Link>
          </li>
          <li>
            <Link to="#Cluster">
              <button>Cluster</button>
            </Link>
          </li>
          <li>
            <a href="#Deployments">
              <button>Deployments</button>
            </a>
          </li>
          <li>
            <a href="#Applications">
              <button>Applications</button>
            </a>
          </li>
          <li>
            <a href="#Networks">
              <button>Networks</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
