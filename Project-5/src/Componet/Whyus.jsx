import React from 'react'

export default function Whyus() {
  return (
    <>
     <section
          id="why-us"
          className="section why-us light-background"
          data-builder="section"
        >
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
                <div
                  className="content px-xl-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>
                    <span>Eum ipsam laborum deleniti </span>
                    <strong>velit pariatur architecto aut nihil</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>

                <div
                  className="faq-container px-xl-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="faq-item faq-active">
                    <h3>
                      <span>01</span> Non consectetur a erat nam at lectus urna
                      duis?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  <div className="faq-item">
                    <h3>
                      <span>02</span> Feugiat scelerisque varius morbi enim nunc
                      faucibus a pellentesque?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>
                      <span>03</span> Dolor sit amet consectetur adipiscing elit
                      pellentesque?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 order-1 order-lg-2 why-us-img">
                <img src="./why-us.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
