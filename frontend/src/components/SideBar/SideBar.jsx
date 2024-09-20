import style from "./SideBar.module.scss";
import {
  Settings,
  UserAvatar,
  ArrowLeft,
  ArrowRight,
} from "@carbon/icons-react";
import { useState } from "react";

function SideBar() {
  const [isExpanded, setExpanded] = useState(false);
  if (!isExpanded)
    return (
      <div onClick={() => setExpanded((prev) => !prev)}>
        {isExpanded ? <ArrowLeft /> : <ArrowRight />}
      </div>
    );

  return (
    <nav className={style["side-bar"]}>
      <div
        className="toggleSideBar"
        style={{ transition: "all 1s ease-in-out" }}
      >
        <ArrowLeft />
      </div>

      <a href="/settings">
        <Settings />
      </a>
      <a href="/user">
        <UserAvatar />
      </a>
    </nav>
  );
}

export default SideBar;
