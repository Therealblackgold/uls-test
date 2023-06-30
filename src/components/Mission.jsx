import MissionGraphic1 from "../assets/MissionGraphic1-min.jpg";
import Ellipse from "../assets/Ellipse37.png";
import GraphicBronze from "../assets/GraphicBronze-min.png";
import GraphicCar from "../assets/GraphicCar-min.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import IMG1 from "../assets/MissionGraphic1-min.jpg";
import IMG2 from "../assets/TrainingGraphic-min.jpg";
import Link from "next/link";
import Logo from "../assets/UlsLogo.png";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="aboutSection"
      id="mission"
      // style={{ background: "#F9F9F9" }}
    >
      <div className="container">
        {/* ABOUT IMAGE */}
        <div className="row shadow rounded bg-white">
          <div className="col-lg-4 mx-auto p-4">
            <div className="box-vision text-center">
              <Image src={IMG1} alt="mission-graphic-car" loading="lazy" />
              <div className="graphic d-none d-lg-flex"></div>
            </div>
          </div>

          {/* ABOUT CONTENT  START*/}
          <div className="col-lg-8 mx-auto p-4" data-aos="fade-up">
            {/* Vision row */}
            <div className="row">
              <div className="col">
                <h2 className="text-center heading mb-3" data-aos="fade-down">
                  our <span>vision</span>
                </h2>
                <ul>
                  <li className="lead">
                    To contribute in fighting crime and poverty by creating
                    employment and uplifting the disadvantaged by allowing them
                    to gain and maintain skills.
                  </li>
                  <li className="lead">
                    To achieve excellence in safety measures and quality
                    services.
                  </li>
                  <li className="lead">
                    To be the leading organization in the industry through
                    excellent service, advancing empowerment values, in motive
                    and efficient industry through training and fair
                    remuneration.
                  </li>
                  <li className="lead">
                    To always be a step ahead of intruders through our
                    partnership with a local electronics device manufacturing
                    company, that will assure our clients that we well equipped
                    with the latest electronic devices set for the job at hand.
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission row */}
            <div className="row">
              <div className="col">
                <h2 className="text-center heading" data-aos="fade-down">
                  our <span>mission</span>
                </h2>
                <ul>
                  <li className="lead">
                    To empower our employees to fulfill their aspirations and
                    capabilities through exchange of their honest labor.
                  </li>
                  <li className="lead">
                    To build a reputation of managing contracts successfully by
                    continually improving our service levels, and constantly
                    meeting our customer requirements.
                  </li>
                </ul>
              </div>
            </div>

            {/* Philosophy row */}
            <div className="row">
              <div className="">
                <h2 className="text-center heading" data-aos="fade-down">
                  our <span>philosophy</span>
                </h2>
                <ul>
                  <li className="lead">
                    To empower our employees to fulfill their aspirations and
                    capabilities through exchange of their honest labor.
                  </li>
                  <li className="lead">
                    To build a reputation of managing contracts successfully by
                    continually improving our service levels, and constantly
                    meeting our customer requirements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ABOUT CONTENT END */}
        </div>
      </div>
    </section>
  );
};

export default Mission;
