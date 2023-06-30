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
    <div id="intro" className="introSection py-5">
      <div className="container">
        <div className="row">
          {/* item 1 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span className="shadow">
                <i class="bi bi-building-lock"></i>
              </span>
              <h3>Guarding Division</h3>
              <ul className="lead text-muted">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </ul>
              <Link href="">Read More</Link>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span className="shadow">
                <i class="bi bi-person-lock"></i>
              </span>
              <h3>Risk Management</h3>
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
              <span className="shadow">
                <i class="bi bi-person-video3"></i>
              </span>
              <h3>Off-Site Monitoring</h3>
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
              <span className="shadow">
                <i class="bi bi-pc-display-horizontal"></i>
              </span>
              <h3>Electronic Security</h3>
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
              <span className="shadow">
                <i class="bi bi-person-vcard"></i>
              </span>
              <h3>Protection & Assessment</h3>
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
              <span className="shadow">
                <i class="bi bi-camera-video"></i>
              </span>
              <h3>Online CCTV Security</h3>
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
