/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "../assets/UlsLogo.png";
// import { Link } from "react-router-dom";
import IMG08 from "../assets/TrainingGraphic-min.jpg";
import IMG20 from "../assets/mobile/IMG20.png";
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  const string1 =
    '"I am not a product of my circumstances. I am a product of my decisions"';

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="intro"
      className="introSection py-5"
      style={{ background: "#F3F3F3", marginTop: "-3rem" }}
    >
      <div className="container">
        <div className="row">
          {/* item 1 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span>
                <i className="bi bi-shield-slash-fill"></i>
              </span>
              <h3>Home Security</h3>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="">Read More</Link>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span>
                <i className="bi bi-shield-slash-fill"></i>
              </span>
              <h3>Home Security</h3>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="">Read More</Link>
            </div>
          </div>
        </div>
        {/* End row */}
        <div className="row">
          {/* item 1 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span>
                <i className="bi bi-shield-slash-fill"></i>
              </span>
              <h3>Home Security</h3>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="">Read More</Link>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span>
                <i className="bi bi-shield-slash-fill"></i>
              </span>
              <h3>Home Security</h3>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
