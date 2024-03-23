import Button from "./Button";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {

  return (
    <header className="header border-sm section">
      <Logo />

      <Navbar className="header_navbar" isOpen={false}/>

      <div className="header_menu">
        <Button variant="tertiary">Contact Us</Button>
      </div>
    </header>
  );
}
