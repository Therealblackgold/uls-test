import Image from "next/image";
import IMG01 from "../assets/TrainingGraphic-min.jpg";
import Link from "next/link";
import Logo from "../assets/UlsLogo.png";

const ExecutiveSummary = () => {
  const string1 =
    '"I am not a product of my circumstances. I am a product of my decisions"';

  return (
    <section className="executiveSection">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h6 className="title-small text-muted mx-auto" id="intro">
              Introduction
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-10 p-4 mx-auto text-center text-dark">
            <h2 className="text-center mb-3 heading">
              Executive <span> Summary</span>
            </h2>
            <p className="lead text-dark" data-aos="fade-up">
              Upper Level Security is a 100% blacked owned company with a Level
              three (3) BEE certification.
            </p>
            <p className="lead text-dark" data-aos="fade-up">
              In the current political climate, with increasing fears of
              criminal activity, and the current economic climate, where
              unemployment is ever increasing and many young people are
              resorting to crime to fulfill their financial needs, every
              business must be protected by an acute security company which is
              dedicated and well prepared to prevent crime.
            </p>
            <p className="lead text-dark" data-aos="fade-up">
              Providing the ultimate in customer services and satisfaction along
              with building long term relationships with our clients is the
              cornerstone of our business. Upper Level Security has a reputation
              of completing its projects professionally, in time and within the
              specified budget. We specialize in all aspects of security
              including guarding division and investigations.
            </p>
            <p className="lead text-dark" data-aos="fade-up">
              The company strongly emphasizes the “satisfaction guaranteed”
              motto and works on a collaborative basis with staff and clients
            </p>
          </div>
        </div>

        {/* HISTORY */}
        <div className="row mt-5">
          <div
            className="col-12 col-lg-10 mx-auto p-4 text-center"
            style={{ position: "relative" }}
          >
            <h2 className="heading mb-3 text-center">
              our <span>history</span>
            </h2>
            <p className="lead text-dark" data-aos="fade-up">
              After realizing that in this industry, every company is doing
              things the same way, lack of innovation in the industry was the
              birth of Upper Level Security.
            </p>
            <p className="lead text-dark" data-aos="fade-up">
              The founder of the company (Mohau Richard Mokoena) started working
              in the security industry as a security guard, thats when the
              desire to improve the standard of private security was realised,
              and as a strong believer in trustworthy and honest customer
              service, things played out.
            </p>
            <p className="lead text-dark" data-aos="fade-up">
              The need for that service was realized and Upper Level Security
              came to be.
            </p>
            <p className="lead text-dark" data-aos="zoom-in">
              Our previous clients include big and small organizations whom that
              we have served with pride without compromising the standard of
              service because safety is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
