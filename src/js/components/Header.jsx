import { useState } from "react";
import menuIcon from "/media/icons/hamburger-menu.svg";
import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const openMobileNav = () => {
    setNavIsOpen(true);
  };

  const closeMobileNav = () => {
    setNavIsOpen(false);
  };

  return (
    <header className="header border-sm section section--inline">
      <Logo />

      <Button
        variant=""
        utilityClasses="btn--round border-sm btn--icon header_navbar-open w-35px h-35px"
        onClick={openMobileNav}
      >
        <img src={menuIcon} alt="" />
      </Button>

      {/* NAV */}
      <div className={`header_navbar ${navIsOpen ? "open" : ""}`}>
        <Button
          variant="primary"
          utilityClasses="btn--round btn--icon w-75px h-75px header_navbar-close"
          onClick={closeMobileNav}
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

      {/* MENU */}
      <div className="header_menu">
        <Button variant="tertiary">Contact Us</Button>
      </div>
    </header>
  );
}
