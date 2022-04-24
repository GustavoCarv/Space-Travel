import Link from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";
import data from "../public/data.json";
import { useState } from "react";
import Image from "next/image";
import capsuleLandscapePic from "../public/assets/technology/image-space-capsule-landscape.jpg";
import capsulePortraitPic from "../public/assets/technology/image-space-capsule-portrait.jpg";
import vehicleLandscapePic from "../public/assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortraitPic from "../public/assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortPortraitPic from "../public/assets/technology/image-spaceport-portrait.jpg";
import spacePortLandscapePic from "../public/assets/technology/image-spaceport-landscape.jpg";

function Technology(): JSX.Element {
  const pageInfo = data.technology;
  const [mainSrc, setMainSrc] = useState<StaticImageData>(capsuleLandscapePic);
  const [desktopMainSrc, setDesktopMainSrc] =
    useState<StaticImageData>(capsulePortraitPic);
  const [info, setInfo] = useState("Launch vehicle");

  const mainContent = pageInfo.map((item, index) => {
    if (item.name === info) {
      return (
        <article key={index} className="tech-info flow">
          <h2 className="fs-400 ff-sans-normal text-blue-light uppercase">
            The Terminology...
          </h2>
          <p className="uppercase fs-700 ff-serif text-white d-block">
            {item.name}
          </p>
          <p className="fs-400 ff-sans-normal text-blue-light">
            {item.description}
          </p>
        </article>
      );
    }
  });

  const handleActivePortraitPicture = (_src: StaticImageData) => {
    setMainSrc(_src);
  };
  const handleActiveLandscapePicture = (_src: StaticImageData) => {
    setDesktopMainSrc(_src);
  };

  const handleActiveContent = (_member: string) => {
    setInfo(_member);
  };

  const handleImageAndContent = (
    _src: StaticImageData,
    _deskSrc: StaticImageData,
    _member: string
  ) => {
    handleActivePortraitPicture(_src);
    handleActiveLandscapePicture(_deskSrc);
    handleActiveContent(_member);
  };

  return (
    <div className="body-container tech">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <Link href="#main">
        <a className="skip-to-content sr-only">Skip to content</a>
      </Link>
      <Header />
      <main id="main" className="grid-container   grid-container--tech flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> SPACE LAUNCH 101
        </h1>
        {mainContent}
        <div className="number-indicators flex">
          <button
            aria-selected={info === "Launch vehicle"}
            onClick={() => {
              handleImageAndContent(
                capsuleLandscapePic,
                capsulePortraitPic,
                "Launch vehicle"
              );
            }}
          >
            <span>1</span>
          </button>
          <button
            aria-selected={info === "Spaceport"}
            onClick={() => {
              handleImageAndContent(
                vehicleLandscapePic,
                vehiclePortraitPic,
                "Spaceport"
              );
            }}
          >
            <span>2</span>
          </button>
          <button
            aria-selected={info === "Space capsule"}
            onClick={() => {
              handleImageAndContent(
                spacePortLandscapePic,
                spacePortPortraitPic,
                "Space capsule"
              );
            }}
          >
            <span>3</span>
          </button>
        </div>
        <div className="image-container-mobile">
          <Image src={mainSrc} layout="intrinsic" priority={true} />
        </div>
        <div className="image-container-desktop">
          <Image src={desktopMainSrc} layout="intrinsic" priority={true} />
        </div>
      </main>
    </div>
  );
}

export default Technology;
