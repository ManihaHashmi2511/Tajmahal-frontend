import React, { useEffect, useState } from "react";

const testimonialsText = [
  {
    text: "The flavor and quality are unmatched. These candies bring back sweet memories for the whole family. We can’t get enough!",
  },
  {
    text: "Delicious candies with consistently great taste. Fast delivery and excellent customer service. Tajmahal Foods never disappoints.",
  },
  {
    text: "Absolutely love these sweets. Every piece tastes fresh and perfectly balanced. Tajmahal Foods has become our go-to for celebrations. Highly recommended!",
  },
];

export default function TestimonialAndBelog() {
  const [direction, setDirection] = useState("next");
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setDirection("next");
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonialsText.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid testimonial position-relative pb-3 mb-5">
        <img
          src="src/assets/images/wave-040.png"
          className="wavyTopImg"
          alt=""
        />

        <div className="container py-5">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-3 fw-medium fst-italic textPrimary crumText">
              Testimonial
            </p>
            <h1 className="display-6">What our clients say about our sweets</h1>
          </div>
          <div
            className="owl-carousel mt-5 testimonial-carousel wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="testimonial-carousel">
              {testimonialsText.map((item, index) => {
                let position = "nextSlide";

                if (index === current) {
                  position = "activeSlide";
                } else if (
                  index === current - 1 ||
                  (current === 0 && index === testimonialsText.length - 1)
                ) {
                  position = "prevSlide";
                }

                return (
                  <div
                    key={index}
                    className={`testimonial-item p-4 p-lg-5 ${position}`}
                  >
                    <p className="mb-4">“{item.text}”</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonialsText.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <!-- Blog Start --> */}
      <div className="container-fluid position-relative  ">
        <div className="container py-5">
          <div
            className="mb-5 text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px", margin: "auto" }}
          >
            <p className="fs-3 fw-medium crumText fst-italic textPrimary">
              Our Events
            </p>
            <h1 className="display-6 mb-0 "> Latest Events We Organized</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="src/assets/images/event-1.webp"
                    alt=""
                  />
                </div>
                <div className="blogCaption d-flex align-items-center rounded-bottom p-3">
                  <div className="flex-shrink-0 text-center textPrimary border-end border-white pe-3 me-3">
                    <span>01</span>
                    <span> / </span>
                    <span>2025</span>
                  </div>
                  <a
                    className="h5 text-decoration-none lh-base text-light"
                    href=""
                  >
                    Event's Moments
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="src/assets/images/event-3.webp"
                    alt=""
                  />
                </div>
                <div className="blogCaption d-flex align-items-center rounded-bottom p-3">
                  <div className="flex-shrink-0 text-center textPrimary border-end border-white pe-3 me-3">
                    <span>01</span>
                    <span> / </span>
                    <span>2025</span>
                  </div>
                  <a
                    className="h5 text-decoration-none lh-base text-light"
                    href=""
                  >
                    Event's Moments{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="src/assets/images/event-4.webp"
                    alt=""
                  />
                </div>
                <div className="blogCaption d-flex align-items-center rounded-bottom p-3">
                  <div className="flex-shrink-0 text-center textPrimary border-end border-white pe-3 me-3">
                    <span>01</span>
                    <span> / </span>
                    <span>2025</span>
                  </div>
                  <a
                    className="h5 text-decoration-none lh-base text-light"
                    href=""
                  >
                    Event's Moments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="src/assets/images/wave-40.png"
          className="wavyBottomImg"
          alt=""
        />
      </div>
      {/* <!-- Blog End --> */}
    </>
  );
}
