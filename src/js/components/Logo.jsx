import logo from "/media/app-logo.svg";

export default function Logo() {
  return (
    <div className="d-flex flex-center">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
