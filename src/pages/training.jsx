import AnimatePage from "../components/AnimatePage";
import TrainingGraphicChart from "../assets/TrainingGraphicChart.png";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Image from "next/image";
import IMG04 from "../assets/img-04-min.jpg";
import IMG05 from "../assets/gallery/cars05-min.jpg";
import IMG06 from "../assets/gallery/cars04-min.jpg";
import IMG07 from "../assets/gallery/cars15-min.jpg";

const Training = () => {
  const quote = '"Avoiding danger is no safer in the long run than exposure."';
  return (
    <AnimatePage>
      <Header />
      <section
        className="training"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div className="container">
          <div className="row">
            {/* CONTENT */}
            <div className="col-lg-8 mx-auto text-center">
              <motion.h2
                className="heading mb-3"
                initial={{ y: "-50px" }}
                animate={{ y: "0px" }}
              >
                RECRUITMENT & <span>TRAINING</span>
              </motion.h2>
              <div className="training-content">
                <p className="lead">
                  In order to improve security services, we as a company must be
                  well-structured by ensuring every staff member/ security
                  officer undergoes the proper training and recruitment
                  procedure.
                </p>
                <p className="lead">
                  All security personnel as a condition of employment, must be
                  fully conversant and must abide by the regulations as set out
                  by the Private Security Regulatory Authority.
                </p>
                <p className="quote text-dark">{quote}</p>
                <Image
                  src={TrainingGraphicChart}
                  alt="Upper Level Security, Security company in Brakpan"
                  className="mt-3"
                  style={{ width: "20rem" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mx-auto mt-5">
              <Image
                src={IMG04}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ borderRadius: "20px" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="row">
            {/* ANTI-BRIBERY POLICY */}
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="heading text-center mt-5">
                ANTI-BRIBERY <span>POLICY</span>
              </h2>
              <p className="lead">
                We give out incentive bonuses to our employees for information
                that can lead to convictions/ crime prevention and arrests.
                Including but not limited to any form of bribery attempts.
              </p>
              <p className="quote text-dark mb-5">
                Our success depends on recruiting the right person for the job.
                It is therefore imperative that each officer be matched to the
                client’s requirements and expectations.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-center mx-auto mb-3 mb-lg-0">
              <Image
                src={IMG07}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ borderRadius: "20px" }}
                loading="lazy"
              />
            </div>
            <div className="col-md-4 text-center mx-auto mb-3 mb-lg-0">
              <Image
                src={IMG05}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ borderRadius: "20px" }}
                loading="lazy"
              />
            </div>
            <div className="col-md-4 text-center mx-auto mb-3 mb-lg-0">
              <Image
                src={IMG06}
                alt="Upper Level Security, Security company in Brakpan"
                style={{ borderRadius: "20px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatePage>
  );
};

export default Training;
