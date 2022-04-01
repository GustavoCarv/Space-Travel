import Link from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";
import data from "../public/data.json";
import { useState } from "react";
import Image from "next/image";
import moonPic from "../public/assets/destination/image-moon.png";

const Destinations = () => {
  const [activePage, setActivePage] = useState<string>("");
  const [pageContent, setPageContent] = useState({});

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

  return (
    <div className="body-container destination">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <Link href="#main">
        <a className="skip-to-content sr-only">Skip to content</a>
      </Link>
      <Header changeActivePage={changeActivePage} />
      <main id="main" className="grid-container  grid-container--destination">
        <div>
          <h1 className="numbered-title">
            <span aria-hidden="true">01</span> Pick your destination
          </h1>
          <Image src={moonPic} />
        </div>
        <div>
          <div className=" tab-list underline-indicators flex">
            <button
              aria-selected="true"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Moon
            </button>
            <button
              aria-selected="false"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Mars
            </button>
            <button
              aria-selected="false"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Europa
            </button>
            <button
              aria-selected="false"
              className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-300"
            >
              Titan
            </button>
          </div>
          <article>
            <h2 className="uppercase fs-800 ff-serif text-white d-block">
              Moon
            </h2>
            <p className="fs-400 ff-sans-normal text-blue-light">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
              <div className="flex">
                <div>
                  <h3 className="text-blue-light fs-200 uppercase">Avg. distance</h3>
                  <p className="fs-500 ff-serif uppercase">384,400 km</p>
                </div>
                <div>
                  <h3 className="text-blue-light fs-200 uppercase">Est. travel time</h3>
                  <p className="fs-500 ff-serif uppercase">3 days</p>
                </div>
              </div>
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Destinations;
