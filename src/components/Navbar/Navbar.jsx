import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#practise"
        onClick={() => setActive("#practise")}
        className={active === "#practise" ? "active" : ""}
      >
        <MdOutlineSportsVolleyball />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
