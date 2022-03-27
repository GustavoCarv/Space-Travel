import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMobileMenu = (): void => {
    console.log(isActive);
    setIsActive(!isActive);
  };
  return (
    <header className="flex ">
      <div>
        <Image src={logo} alt="logo"></Image>
      </div>
      <button
        className={"mobile-nav-toggle" + (isActive ? " is--active" : "")}
        onClick={handleMobileMenu}
        aria-controls="primary-navigation"
      >
        <span
          className="sr-only menu-mobile"
          aria-expanded={isActive ? "true" : "false"}
        >
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={
            "flex primary-navigation underline-indicators" +
            (isActive ? " is--active" : "")
          }
        >
          <li className="active ff-sans-cond uppercase text-white letter-spacing-2">
            <span>00 </span> Home
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <span>01 </span> Destination
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <span>02 </span> Crew
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <span>03 </span> Technology
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
