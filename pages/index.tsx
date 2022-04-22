import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Header from "../src/components/Header";
import data from "../public/data.json";
import { useState } from "react";

const Home: NextPage = () => {

  return (
    <div className="body-container home">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <Link href="#main">
        <a className="skip-to-content sr-only">Skip to content</a>
      </Link>
      <Header />
      <main id="main" className="grid-container--home  grid-container">
        <div>
          <h1>
            <span className="text-blue-light uppercase letter-spacing-1 fs-500 ff-sans-cond">
              So, you want to travel to
            </span>
            <span className="uppercase text-white fs-900 ff-serif d-block ">
              Space
            </span>{" "}
          </h1>
          <p className="fs-400 ff-sans-normal text-blue-light">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="reset">
          <Link href="/design-system">
            <a className="large-button uppercase ff-serif text-blue-dark bg-white fs-600 grid grid-center">
              Explore
            </a>
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Home;
