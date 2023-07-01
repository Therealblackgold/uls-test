/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const Featured = () => {
  const string1 =
    '"I am not a product of my circumstances. I am a product of my decisions"';

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="featured" className="introSection py-5">
      <div className="container">
        <div className="row">
          {/* item 1 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span className="shadow">
                <i class="bi bi-building-lock"></i>
              </span>
              <h3>Guarding Division</h3>
              <p className="lead">
                We provide armed and unarmed guards for various needs, including
                a tactical reaction unit for rapid response. Specialize in
                securing functions, events, and even specially trained mining
                guards. Our services also extend to VIP/executive guarding and
                protecting national key points.
              </p>
              <Link href="/services" aria-label="services">
                view services
              </Link>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span className="shadow">
                <i class="bi bi-person-lock"></i>
              </span>
              <h3>Risk Management</h3>
              <p className="lead">
                Risk analysis is crucial for a security company. It involves
                assessing threats to property, events, staffing, surveillance,
                conducting integrity checks, and implementing measures for
                effective asset protection, ensuring comprehensive security
                solutions.
              </p>
              <Link href="/services" aria-label="services">
                view services
              </Link>
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
              <p className="lead">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="/services" aria-label="services">
                view services
              </Link>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span className="shadow">
                <i class="bi bi-pc-display-horizontal"></i>
              </span>
              <h3>Electronic Security</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="/services" aria-label="services">
                view services
              </Link>
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
              <p className="lead">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="/services" aria-label="services">
                view services
              </Link>
            </div>
          </div>

          {/* item 2 */}
          <div className="col-lg-6">
            <div className="box-feat">
              <span className="shadow">
                <i class="bi bi-camera-video"></i>
              </span>
              <h3>Online CCTV Security</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri
                fabulas expetenda ei pro. Sed vero assentior ad, est vide liber
              </p>
              <Link href="/services" aria-label="services">
                view services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
