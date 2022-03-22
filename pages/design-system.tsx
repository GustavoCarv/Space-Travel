import type { NextPage } from "next";
import Link from "next/link";

const styles: { [key: string]: React.CSSProperties } = {
  boxStyle: {
    padding: `3rem 1rem 1rem`,
    border: `1px solid white`,
  },
  flexGlow: {
    flexGrow: 1,
  },
  flexBasis: {
    flexBasis: `100%`,
  },
  marginBlock: {
    marginBlock: "4rem",
  },
};

const DesignSystem: NextPage = () => {
  return (
    <div className="container">
      <h1>Design system</h1>

      <section id="colors">
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>
        <div className="flex ">
          <div style={styles.flexGlow}>
            <div className="bg-blue-dark text-white" style={styles.boxStyle}>
              #0B0D17
            </div>
            <p>
              <span className="text-blue-light">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-blue-light">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div style={styles.flexGlow}>
            <div
              className="bg-blue-light text-blue-dark"
              style={styles.boxStyle}
            >
              #D0D6F9
            </div>
            <p>
              <span className="text-blue-light">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-blue-light">HSL</span> 231°, 77%, 90%
            </p>
          </div>
          <div style={styles.flexGlow}>
            <div className="bg-white text-blue-dark" style={styles.boxStyle}>
              #FFFFFF
            </div>
            <p>
              <span className="text-blue-light">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-blue-light">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>
      <section className="flow" id="typography" style={styles.marginBlock}>
        <h2 className="numbered-title">
          <span>02 </span>Typography
        </h2>
        <div className="flex">
          <div className="flow" style={styles.flexBasis}>
            <div>
              <p className="text-blue-light ">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 ff-serif uppercase">Earth</p>
            </div>
            <div>
              <p className="text-blue-light">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 ff-serif uppercase">Venus</p>
            </div>
            <div>
              <p className="text-blue-light">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-blue-light">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 ff-serif uppercase">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-blue-light">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-blue-light fs-500 ff-sans-cond uppercase letter-spacing-1">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div className="flow" style={styles.flexBasis}>
            <div>
              <p>Subheading 1 - Bellefair Regular - 28px</p>
              <p className="ff-serif fs-500">384,400 km</p>
            </div>
            <div>
              <p>
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="ff-sans-cond fs-200 letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p>
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="ff-sans-cond fs-300 letter-spacing-2">Europa</p>
            </div>
            <div>
              <p>Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flow" id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        <div>
          <nav>
            <ul className="primary-navigation underline-indicators flex">
              <li className="active">
                <a className="uppercase text-white letter-spacing-2" href="#">
                  <span>01</span>Active
                </a>{" "}
              </li>
              <li>
                <a className="uppercase text-white letter-spacing-2" href="#">
                  <span>02</span>Hovered
                </a>{" "}
              </li>
              <li>
                <a className="uppercase text-white letter-spacing-2" href="#">
                  <span>03</span>Idle
                </a>{" "}
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex" style={styles.marginBlock}>
          <div>
            <Link href="/">
              <a className="large-button uppercase ff-serif text-blue-dark bg-white fs-600 grid grid-center">
                Explore
              </a>
            </Link>
          </div>
          <div className="indicators-container flex">
            <div className=" tab-list underline-indicators flex">
              <button
                aria-selected="true"
                className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-400"
              >
                Moon
              </button>
              <button
                aria-selected="false"
                className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-400"
              >
                Mars
              </button>
              <button
                aria-selected="false"
                className="small-button uppercase bg-blue-dark ff-serif text-blue-light letter-spacing-2 fs-400"
              >
                Europa
              </button>
            </div>

            <div className="dot-indicators flex">
              <button aria-selected="true">
                <span className="sr-only">Slide title</span>
              </button>
              <button aria-selected="false">
                <span className="sr-only">Slide title</span>
              </button>
              <button aria-selected="false">
                <span className="sr-only">Slide title</span>
              </button>
            </div>

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
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;
