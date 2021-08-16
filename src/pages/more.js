import React from "react";
import image3 from "../assets/image3.jpg";

import image1 from "../assets/image1.jpg";

class More extends React.Component {
  render() {
    return (
      <section>
        <div class="section_all bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section_title_all text-center">
                  <br />
                  <h4 class="font-weight-bold">
                    What is{" "}
                    <span class="text-custom">Right Brain Education ?</span>
                  </h4>
                  <div class="">
                    <i class=""></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row vertical_content_manage mt-5">
              <div class="col-lg-6">
                <div class="about_header_main mt-3">
                  <div class="about_icon_box">
                    <p class="text_custom font-weight-bold">
                      Right Brain Eductation
                    </p>
                  </div>
                  <p class="text-muted mt-3">
                    {" "}
                    Right Brain Programs consists of activities and programs
                    that employs early learning methods to stimulate and nuture
                    the right side hemisphere of the brain.
                    <br />
                    Right hemisphere of the brain develops fast from birth to
                    age of 6 years.Around at the age of 6 Months to 6 age, 3.80
                    % of brain is formed.At the age of 7, 90% of brain is
                    developed.
                    <br />
                    Humans have a very small window to extract the unadulterated
                    potential of the right brain.
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="img_about mt-3">
                  <img
                    style={{ height: "300px", width: "300px" }}
                    src={image3}
                    alt=""
                    class="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <center>
              <br />
              <h3 class="font-weight-bold">
                Benifits Of
                <span class="text-custom"> Right Brain Education </span>
              </h3>
              <br />
             
            </center>

            <div class="black-section-bg">
              <div class="container-fluid">
                <div class="row align-items-center g-0">
                  <img 
                  src={image1}
                  class="col-12 col-md-6 leftRightImageBlock order-1"
                  alt = "image"
                  />

                  <div class="col-12 col-md-6 order-2">
                    <div class="leftRightTextBlock p-5 mr-md-auto text-start">
                      <h2 class="heading">Who We Are ?</h2>
                      <p class="custom-para para-bottom">
                        Right-brain oriented learners are visual. They focus on
                        holistic concepts rather than details, tend to be
                        unstructured and impulsive, and are usually very
                        creative, often demonstrating proficiency in art or
                        music. These child do not enjoy working independently;
                        they learn best from discussion, interaction,
                        cooperation and involvement with whatever they are
                        learning. Right-brained children think in pictures
                        rather than words, generally have a good sense of
                        spatial orientation (but not a good sense of time), and
                        are attuned to emotions. These children prefer the main
                        idea to the details, and often learn in spurts rather
                        than in a steady sequence. Right-brain oriented learners
                        often come to conclusions intuitively, without knowing
                        the steps by which they got to the answer, and often
                        prefer a visual and/or kinesthetic teaching style. It is
                        not uncommon for right-brain oriented children to be
                        “late bloomers” academically.
                      </p>

                      <a href="https://wa.me/917904639557">
                        {" "}
                        <button
                          style={{
                            border: "2px solid #0077b6",
                            borderradius: "5px",
                            width: "125px",
                          }}
                        >
                          Join Us
                        </button>
                      </a>
                  
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </section>
    );
  }
}

export default More;
