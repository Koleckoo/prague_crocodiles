import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.facebook.com/dodgeballprague/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook />
      </a>
      <a
        href="https://www.instagram.com/dodgeball_prague/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
}
