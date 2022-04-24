import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import { useState } from "react";
import Link from "next/link";

const Header = (props: any) => {
  const [isActive, setIsActive] = useState(false);

  const handleMobileMenu = (): void => {
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
          <Link href="/">
            <a>
              <li
                className={"ff-sans-cond uppercase text-white letter-spacing-2"}
              >
                <span aria-hidden="true">00 </span> Home
              </li>
            </a>
          </Link>
          <Link href="/destinations">
            <a>
              <li className="ff-sans-cond uppercase text-white letter-spacing-2">
                <span aria-hidden="true">01 </span> Destination
              </li>
            </a>
          </Link>

          <Link href="/crew">
            <a>
              <li className="ff-sans-cond uppercase text-white letter-spacing-2">
                <span aria-hidden="true">02 </span> Crew
              </li>
            </a>
          </Link>
          <Link href="/technology">
            <a>
              <li className="ff-sans-cond uppercase text-white letter-spacing-2">
                <span aria-hidden="true">03 </span> Technology
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
