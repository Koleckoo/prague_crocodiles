import "./Header.css";
import LOGO from "../../assets/logo.png";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h1>Welcome to our page</h1>
        <HeaderSocials />
        <img src={LOGO} alt="me" className="logo" />
        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
}
