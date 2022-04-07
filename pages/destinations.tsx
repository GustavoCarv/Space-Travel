import Link from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";
import data from "../public/data.json";
import { useState } from "react";
import Image from "next/image";
import moonPic from "../public/assets/destination/image-moon.png";
import marsPic from "../public/assets/destination/image-mars.png";
import europaPic from "../public/assets/destination/image-europa.png";
import titanPic from "../public/assets/destination/image-titan.png";

function Destinations(): JSX.Element {
  const pageInfo = data.destinations;
  const [activePage, setActivePage] = useState<string>("");
  const [pageContent, setPageContent] = useState({});

  const [mainSrc, setMainSrc] = useState<StaticImageData>(moonPic);
  const [info, setInfo] = useState("Moon");
  const variavel = console.log(variavel);

  const mainContent = pageInfo.map((item, index) => {
    if (item.name === info) {
      return (
        <article key={index} className="destination-info">
          <h2 className="uppercase fs-800 ff-serif text-white d-block">Moon</h2>
          <p className="fs-400 ff-sans-normal text-blue-light">
              {item.description}
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-blue-light fs-200 uppercase">
                Avg. distance
              </h3>
              <p className="fs-500 ff-serif uppercase">{item.distance}</p>
            </div>
            <div>
              <h3 className="text-blue-light fs-200 uppercase">
                Est. travel time
              </h3>
              <p className="fs-500 ff-serif uppercase">{item.travel}</p>
            </div>
          </div>
        </article>
      );
    }
  });

  const changeActivePage = (page: string) => {
    switch (page) {
      case "destinations":
        setPageContent(data.destinations);
        break;
      case "crew":
        setPageContent(data.crew);
        break;
      case "technology":
        setPageContent(data.technology);
        break;
    }
  };

  const handleActivePicture = (_src: StaticImageData) => {
    setMainSrc(_src);
  };

  return (
    <div className="body-container destination">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <Link href="#main">
        <a className="skip-to-content sr-only">Skip to content</a>
      </Link>
      <Header changeActivePage={changeActivePage} />
      <main id="main" className="grid-container   grid-container--destination">
        <div>
          <h1 className="numbered-title">
            <span aria-hidden="true">01</span> Pick your destination
          </h1>
          <div className="image-container-mobile">
            <Image src={mainSrc} layout="responsive" priority={true} />
          </div>
        </div>
        <div>
          <div className=" tab-list underline-indicators flex">
            <button
              onClick={() => handleActivePicture(moonPic)}
              aria-selected="true"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Moon
            </button>
            <button
              onClick={() => handleActivePicture(marsPic)}
              aria-selected="false"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Mars
            </button>
            <button
              onClick={() => handleActivePicture(europaPic)}
              aria-selected="false"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Europa
            </button>
            <button
              onClick={() => handleActivePicture(titanPic)}
              aria-selected="false"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Titan
            </button>
          </div>
          {mainContent}
        </div>
      </main>
    </div>
  );
}

export default Destinations;
