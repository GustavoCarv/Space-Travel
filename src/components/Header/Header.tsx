import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import { useState } from "react";

type Props = {
  changeActivePage: (page: string) => void;
}
const Header = (props:Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleMobileMenu = (): void => {
    console.log(isActive);
    setIsActive(!isActive);
  };


  return (
    <header className=" primary-header flex ">
      <div className="logo">
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
            <span aria-hidden="true">00 </span> Home
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2" onClick={() => {props.changeActivePage("destinations")}}>
            <span aria-hidden="true">01 </span> Destination
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <span aria-hidden="true">02 </span> Crew
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <span aria-hidden="true">03 </span> Technology
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
