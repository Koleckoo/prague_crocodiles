import "./Footer.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Prague Crocodiles
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        {/* <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li> */}
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="footer__socials">
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

      <div className="footer__copyright">
        <small>Copyright &copy; Jan Illetško</small>
      </div>
    </footer>
  );
}
