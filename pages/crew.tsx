import Link from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";
import data from "../public/data.json";
import { useState } from "react";
import Image from "next/image";
import douglaPic from "../public/assets/crew/image-douglas-hurley.png";
import markPic from "../public/assets/crew/image-mark-shuttleworth.png";
import victorPic from "../public/assets/crew/image-victor-glover.png";
import anoushehPic from "../public/assets/crew/image-anousheh-ansari.png";

function Crew(): JSX.Element {
  const pageInfo = data.crew;
  const [mainSrc, setMainSrc] = useState<StaticImageData>(douglaPic);
  const [info, setInfo] = useState("Douglas Hurley");

  const mainContent = pageInfo.map((item, index) => {
    if (item.name === info) {
      return (
        <article key={index} className="crew-info flow">
          <h2 className="fs-600 ff-serif uppercase">{item.role}</h2>
          <p className="uppercase fs-700 ff-serif text-white d-block">
            {item.name}
          </p>
          <p className="fs-400 ff-sans-normal text-blue-light">{item.bio}</p>
        </article>
      );
    }
  });

  const handleActivePicture = (_src: StaticImageData) => {
    setMainSrc(_src);
  };

  const handleActiveContent = (_member: string) => {
    setInfo(_member);
  };

  const handleImageAndContent = (_src: StaticImageData, _member: string) => {
    handleActivePicture(_src);
    handleActiveContent(_member);
  };

  return (
    <div className="body-container crew">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <Link href="#main">
        <a className="skip-to-content sr-only">Skip to content</a>
      </Link>
      <Header />
      <main id="main" className="grid-container   grid-container--crew">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>
        {mainContent}
        <div className="dot-indicators flex">
          <button
            aria-selected={info === "Douglas Hurley"}
            onClick={() => handleImageAndContent(douglaPic, "Douglas Hurley")}
          >
            <span className="sr-only">The commander</span>
          </button>
          <button
            aria-selected={info === "Mark Shuttleworth"}
            onClick={() => handleImageAndContent(markPic, "Mark Shuttleworth")}
          >
            <span className="sr-only">The mission specialist</span>
          </button>
          <button
            aria-selected={info === "Victor Glover"}
            onClick={() => handleImageAndContent(victorPic, "Victor Glover")}
          >
            <span className="sr-only">The pilot</span>
          </button>
          <button
            aria-selected={info === "Anousheh Ansari"}
            onClick={() =>
              handleImageAndContent(anoushehPic, "Anousheh Ansari")
            }
          >
            <span className="sr-only">The crew enginner</span>
          </button>
        </div>
        <div className="image-container-mobile">
          <Image src={mainSrc} layout="intrinsic" priority={true} />
        </div>
      </main>
    </div>
  );
}

export default Crew;
