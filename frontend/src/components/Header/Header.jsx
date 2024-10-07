import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style["header"]}>
      <nav>
        <ul>
          <li>
            <a href="#/">
              <div class="overlay">
                <div class="logo">
                  <img src="./fake-logo.png"></img>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#Dashboard">
              <button>Dashboard</button>
            </a>
          </li>
          <li>
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
