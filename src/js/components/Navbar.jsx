import { useState } from "react";
import Button from "./Button";
import menuIcon from "/media/icons/hamburger-menu.svg";

export default function Navbar({className: navClass}) {
  const [status, setStatus] = useState("close");

  const closeNavbar = () => {
    setStatus("close");
  };
  const openNavbar = () => {
    setStatus("open");
  };

  return (
    <div className="">
      <Button
        variant=""
        utilityClasses="btn--round border-sm btn--icon header_navbar-open w-35px h-35px"
        onClick={openNavbar}
      >
        <img src={menuIcon} alt="" />
      </Button>
      
      <div className={`${navClass} ${status == "open"&& "open"}`}>
        <Button
          variant="primary"
          utilityClasses="btn--round btn--icon w-75px h-75px header_navbar-close"
          onClick={closeNavbar}
        >
          &times;
        </Button>

        <nav className={`nav`}>
          <a className="nav_item active" href="">
            Home
          </a>
          <a className="nav_item" href="">
            About Us
          </a>
          <a className="nav_item" href="">
            Properties
          </a>
          <a className="nav_item" href="">
            Services
          </a>
        </nav>
      </div>
    </div>
  );
}
