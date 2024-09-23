import React from 'react'

export default function Skillss() {
  return (
    <>
    <section id="skills" className="skills section">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <img src="./skills.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptas
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="skills-content skills-animation">
                  <div className="progress">
                    <span className="skill">
                      <span>HTML</span> <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <span>CSS</span> <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <span>JavaScript</span> <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <span>Photoshop</span> <i className="val">55%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
