import Image from "next/image";
import IMG01 from "../assets/TrainingGraphic-min.jpg";
import Link from "next/link";
import Logo from "../assets/UlsLogo.png";

const ExecutiveSummary = () => {
  const quote =
    '"Definiteness of purpose is the starting point of all achievement"';

  return (
    <section className="executiveSection">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h6 className="title-small text-muted mx-auto" id="about">
              about
            </h6>
          </div>
        </div>

        {/* VISION */}
        <div className="row">
          <div className="col-12 col-lg-10 p-4 mx-auto">
            <h2 className="text-center mb-3 heading">
              our <span>vision</span>
            </h2>
            <ul>
              <li className="lead">
                To contribute in fighting crime and poverty by creating
                employment and uplifting the disadvantaged by allowing them to
                gain and maintain skills.
              </li>
              <li className="lead">
                To achieve excellence in safety measures and quality services.
              </li>
              <li className="lead">
                To be the leading organization in the industry through excellent
                service, advancing empowerment values, in motive and efficient
                industry through training and fair remuneration.
              </li>
              <li className="lead">
                To always be a step ahead of intruders through our partnership
                with a local electronics device manufacturing company, that will
                assure our clients that we well equipped with the latest
                electronic devices set for the job at hand.
              </li>
            </ul>
          </div>
        </div>

        {/* MISSION */}
        <div className="row mt-5">
          <div
            className="col-12 col-lg-10 mx-auto p-4"
            style={{ position: "relative" }}
          >
            <h2 className="heading mb-3 text-center">
              our <span>mission</span>
            </h2>
            <ul>
              <li className="lead">
                To empower our employees to fulfill their aspirations and
                capabilities through exchange of their honest labor.
              </li>
              <li className="lead">
                To build a reputation of managing contracts successfully by
                continually improving our service levels, and constantly meeting
                our customer requirements.
              </li>
            </ul>
          </div>
        </div>
        {/* PHILOSOPHY */}
        <div className="row mt-5">
          <div
            className="col-12 col-lg-10 mx-auto p-4 text-center"
            style={{ position: "relative" }}
          >
            <h2 className="heading mb-3 text-center">
              our <span>philosophy</span>
            </h2>
            <ul>
              <p className="lead ">
                Driven by our core values of integrity and commitment to
                professionalism in our service, creative concepts and the
                integrated team work to deliver, Upper Level Security Services
                will provide a superior service, tailor made as per clients’
                needs.
              </p>
            </ul>
            <p className="quote text-center fst-italic">{quote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
