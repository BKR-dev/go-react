import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style["header"]}>
      <nav>
        <ul>
          <logo>
            <a href="#/">
              <img src="./fake-logo.png"></img>
            </a>
          </logo>
          <li>
            <nav-item>
              <a href="#Cluster">Cluster</a>
            </nav-item>
          </li>
          <li>
            <nav-item>
              <a href="#Deployments">Deployments</a>
            </nav-item>
          </li>
          <li>
            <nav-item>
              <a href="#Applications">Applications</a>
            </nav-item>
          </li>
          <li>
            <nav-item>
              <a href="#Networks">Networks</a>
            </nav-item>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
