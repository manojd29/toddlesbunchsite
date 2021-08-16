import React from "react";
import heroimg from "../assets/pic1.jpg";
import about from "../assets/pic 5.jpg";
import mission from "../assets/focus.jpg";

class About extends React.Component {
  render() {
    return (
      <section>
      <div class="hero" id="home">
        <div class="hero__image-wrapper">
          <img
            id="hero__image"
            style={{ backdropfilter: "blur(5px)" }}
            src={heroimg}
            alt="heroimg"
          />
        </div>
        <div class="hero__text">
          <br />
          <h2 class="font-weight-bold">Toddles Bunch!</h2>
          <p class="font-weight-bold">
            Montessori <br /> Right Brain Education
          </p>
        
          <a href="#about">
            <button
              style={{
                border: "2px solid #0077b6",
                borderradius: "5px; width: 125px",
              }}
            >
              Learn More
            </button>
          </a>
        </div>
        </div>
    

        <div class="About">
          <div class="container my-5">
            <h2
              class="text-uppercase"
              style={{ color: "#0077b6", fontweight: "700" }}
            >
              About us
            </h2>
            <br />
            <div class="row">
              <div class="col-md-6 text-center">
                <img
                  src={about}
                  class="img-fluid"
                  style={{ boxshadow: "0 0 15px #eee" }}
                  alt="about"
                />
              </div>
              <div class="col-md-6 pt-3">
                <h1 class="h2 mb-4" style={{fontweight: "600"}}>
                  Right Brain Education and Montessori{" "}
                  <span style={{ color: "#0077b6" }} class="font-weight-bold">
                    for Babies 1 year old to 7 year old
                  </span>
                </h1>
                <p
                  class="text-secondary"
                  style={{
                    lineheight: "2; color: rgb(82, 226, 15)",
                    fontweight: "900",
                  }}
                >
                  {" "}
                  TamilNadu's 1st Right Brain Education Program with real time
                  Interactive Activities. Our Aim is to inculate a lifelong love
                  for learning{" "}
                </p>
                <a href="#more">
                  <button
                    style={{
                      border: "2px solid #0077b6",
                      borderradius: "5px",
                      width: "125px",
                    }}
                  >
                    View More
                  </button>
                </a>
              </div>
            </div>

            <div class="About">
              <div class="container my-5">
                <h2
                  class="text-uppercase"
                  style={{ color: "#000305", fontweight: "700" }}
                >
                  Our Mission
                </h2>
                <br />
                <div class="row">
                  <div class="col-md-6 text-center">
                    <img
                      src={mission}
                      class="img-fluid"
                      style={{ boxshadow: "0 0 15px #eee" }}
                      alt=""
                    />
                  </div>
                  <div class="col-md-6 pt-3">
                    <p
                      class="text-secondary"
                      style={{
                        lineheight: "2",
                        color: "rgb(82, 226, 15)",
                        fontweight: "900",
                      }}
                    >
                      {" "}
                      Our current educational system room for right brain
                      development. leaves Very little room for right brain
                      development
                      <br />
                      <br />
                      This can be very challenging for most of the children They
                      start school and immediately face lessons that are meant
                      for only enchancing left brain functions
                      <br />
                      <br />
                      Right brain training is aimed towards very young children
                      in order to strengthen the important functions of right
                      side the of the brain,which will abilities greatly
                      enchance their overall learning abilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
              <div class="col-md-6 pt-3">
                <p
                  class="text-secondary"
                  style={{
                    lineheight: "2",
                    color: "rgb(82, 226, 15)",
                    fontweight: "900",
                  }}
                >
                  {" "}
                  It has been fount that the right hemisphere of the brain
                  develops fastest from the birth upto 10 years old. So this is
                  cruecial period that right brain stimulation and development
                  is most effective.
                </p>
                <br />
              </div>
              </section>
            
          
   
    );
  }
}

export default About;
