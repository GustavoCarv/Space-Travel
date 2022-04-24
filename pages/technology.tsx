import Link from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";
import data from "../public/data.json";
import { useState } from "react";
import Image from "next/image";
import capsuleLandscapePic from "../public/assets/technology/image-space-capsule-landscape.jpg";
import capsulePortraitPic from "../public/assets/technology/image-space-capsule-portrait.jpg";

function Technology(): JSX.Element {
  const pageInfo = data.technology;
  const [mainSrc, setMainSrc] = useState<StaticImageData>(capsuleLandscapePic);
  const [info, setInfo] = useState("Launch vehicle");

  console.log(pageInfo);
  const mainContent = pageInfo.map((item, index) => {
    if (item.name === info) {
      return (
        <article key={index} className="crew-info flow">
          <h2 className="fs-400 ff-sans-normal text-blue-light uppercase">
            The Terminology
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
      <main id="main" className="grid-container   grid-container--tech">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> SPACE LAUNCH 101
        </h1>
        {mainContent}
        <div className="number-indicators flex">
          <button className="fs-600" aria-selected="true">
            <span>1</span>
          </button>
          <button className="fs-600" aria-selected="false">
            <span>2</span>
          </button>
          <button className="fs-600" aria-selected="false">
            <span>3</span>
          </button>
        </div>
        <div className="image-container-mobile">
          <Image src={mainSrc} layout="intrinsic" priority={true} />
        </div>
        <div className="image-container-desktop" hidden>
          <Image src={mainSrc} layout="intrinsic" priority={true} />
        </div>
      </main>
    </div>
  );
}

export default Technology;
