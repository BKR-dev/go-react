import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style["header"]}>
      <nav>
        <ul>
          <li>
            <a href="#/">
              <div class="logo"></div>
            </a>

            <a href="#Cluster">
              <button>Cluster</button>
            </a>
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
