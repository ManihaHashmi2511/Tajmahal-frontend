import { div } from "framer-motion/client";
import React from "react";

const EventsSection = () => {
  return (
    <div>
      {/* Heading */}
      <div className="container">
        <div
          className="mb-5 text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          <div className="d-flex gap-3  justify-content-center align-items-center">
            <img
              src="/images/L-side-line-1.png"
              className="img-fluid sideLine"
            />
            <p className="fs-3 fw-bold fst-italic textPrimary crumText">
              Our Events
            </p>
            <img
              src="/images/R-side-line-1.png"
              className="img-fluid sideLine"
            />
          </div>
          <h1 className="display-6 mb-0 "> Latest Events We Organized</h1>
        </div>
      </div>

      <section className="events-section container-fluid py-4 mb-5">
        <div className="container-fluid">
          <div className="row align-items-center g-5 justify-content-center flex-lg-row-reverse">
            {/* Video (RIGHT - 60%) */}
            <div className="col-lg-7 order-last order-lg-first">
              <div className="video-wrapper">
                <video
                  src="/video/event_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Content (LEFT - 40%) */}
            <div className="col-lg-4">
              <div className="event-content">
                <h3 className="fw-medium">
                  Chamber of
                  <span className=""> Commerce</span>
                </h3>
                <p className="fs-4 text-white">
                  <span>Confectionary</span> Conference Meeting
                </p>

                {/* <button className="event-btn">
                Explore Events →
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsSection;
