import React from "react";
import course from "../assets/image2.jpg";
import course1 from "../assets/courses.png";
import oneyr from "../assets/1-2yr.jpg";
import twoyr from "../assets/2-4yr.jpg";
import fouryr from "../assets/4-5yers.webp";
import fiveyr from "../assets/5-6years.webp";
import tenyr from "../assets/10yr.jpg";
// import course1 from "../assets/courses.png";
// import course1 from "../assets/courses.png";
// import course1 from "../assets/courses.png";

class Courses extends React.Component {
  render() {
    return (
      <section>
        <div class="About" id="course">
          <div class="container my-5">
            <h4 style={{ color: "#000305", fontweight: "700" }}>
              Why to start right brain training as young as one year old?
            </h4>
            <br />
            <br />
            <div class="row">
              <div class="col-md-6 text-center">
                <img
                  src={course}
                  class="img-fluid"
                  style={{
                    boxshadow: "0 0 15px #eee",
                    width: "350px",
                    height: "280px",
                  }}
                  alt="course"
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
                  It has been fount that the right hemisphere of the brain
                  develops fastest from the birth upto 10 years old. So this is
                  cruecial period that right brain stimulation and development
                  is most effective.
                </p>
                <br />
              </div>
            </div>

            <div class="About" id="course">
              <div class="container my-5">
                <h2
                  class="text-uppercase"
                  style={{ color: "#000305", fontweight: "700" }}
                >
                  Courses
                </h2>
                <br />
                <br />
                <div class="row">
                  <div class="col-md-6 text-center">
                    <img
                      src={course1}
                      class="img-fluid"
                      style={{ boxshadow: "0 0 15px #eee", height: "280px" }}
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
                      Every childhood education methodology encourages Creative
                      exploration and analytical thanking in a firm-filled
                      learning environment
                      <br />
                      <br />
                      We nurture your child to be confident sharp-thinker with
                      excellent memory and strong mentality.
                    </p>
                    <br />
                  </div>
                </div>

                <h3 style={{ color: "#000305", fontweight: "700" }}>
                  <br />
                  Infant And Toddler Course(1-4)Years
                </h3>
                <br />
                <p
                  class="text-secondary"
                  style={{
                    lineheight: "2",
                    color: "rgb(82, 226, 15)",
                    fontweight: "900",
                  }}
                >
                  {" "}
                  For this course, We focus on stimulating and development the
                  right brain during crucial Period (6 months - 4 years) with
                  vast input of Knowlegde and activities.
                </p>
                <div class="bodys">
                  <div class="card">
                    <div class="card__body">
                      <img src={oneyr} alt="" class="image" />

                      <h2 class="title">Infant</h2>
                      <p class="description">
                        {" "}
                        1-2 Years Duration(50 minutes per session)
                      </p>
                    </div>
                    <a href="#enq">
                      {" "}
                      <button
                        style={{
                          border: "2px solid #0077b6",
                          borderradius: "5px",
                          width: "100%",
                        }}
                      >
                        Book Addmission
                      </button>
                    </a>
                  </div>

                  <div class="card">
                    <div class="card__body">
                      <img src={twoyr} alt="" class="image" />
                      <h2 class="title">Toddlers</h2>
                      <p class="description">
                        {" "}
                        3-4 Years Duration(60 minutes per session)
                      </p>
                    </div>
                    <a href="#enq">
                      {" "}
                      <button
                        style={{
                          border: "2px solid #0077b6",
                          borderradius: "5px",
                          width: "100%",
                        }}
                      >
                        Book Addmission
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="About" id="course">
            <div class="container my-5">
              <div class="row">
                <div class="col-md-6 text-center"></div>
                <div class="col-md-6 pt-3"></div>
              </div>

              <h3 style={{ color: "#000305", fontweight: "700" }}>
                <br />
                Preschool Course(5-6)Years
              </h3>
              <br />
              <p
                class="text-secondary"
                style={{
                  lineheight: "2",
                  color: "rgb(82, 226, 15)",
                  fontweight: "900",
                }}
              >
                {" "}
                In preschool course they develop the right brain abilities, and
                also put focus on the left brain through activities, We also
                focus on encouraging output from the children and promote
                independent learning as well as confidence.
                <br /> This is also where children first learn about in
                dependence, as they will attend classes on their own interest.
                They will also get better sense of responsibility. We try to
                keep things light and fun to keep our young students engaged in
                every lesson{" "}
              </p>
              <div class="bodys">
                <div class="card">
                  <div class="card__body">
                    <img src={fouryr} alt="" class="image" />

                    <h2 class="title">Preschool - l </h2>
                    <p class="description">
                      {" "}
                      Age 4-5 Years Duration(70 minutes per session)
                    </p>
                  </div>
                  <a href="#enq">
                    {" "}
                    <button
                      style={{
                        border: "2px solid #0077b6",
                        borderradius: "5px",
                        width: "100%",
                      }}
                    >
                      Book Addmission
                    </button>
                  </a>
                </div>

                <div class="card">
                  <div class="card__body">
                    <img src={fiveyr} alt="" class="image" />
                    <h2 class="title">Preschool - ll</h2>
                    <p class="description">
                      {" "}
                      Age 5-6 Years Duration(90 minutes per session)
                    </p>
                  </div>
                
                <a href="#enq">
                  {" "}
                  <button
                    style={{
                      border: "2px solid #0077b6",
                      borderradius: "4px",
                      width: "100%",
                    }}
                  >
                    Book Addmission
                  </button>
                </a>
              </div>
            </div>
            </div>
          

          <div class="About" id="courses">
            <div class="container my-5">
              <div class="row">
                <div class="col-md-6 text-center"></div>
                <div class="col-md-6 pt-3"></div>
              </div>

              <h3 style={{ color: "#000305", fontweight: "700" }}>
                <br />
                Primary Course
              </h3>
              <br />
              <p
                class="text-secondary"
                style={{
                  lineheight: "2",
                  color: "rgb(82, 226, 15)",
                  fontweight: "900",
                }}
              >
                {" "}
                In the primary Course, we also focus on nurturing children's
                speed reading, Hado reading listening comprehension. Develop
                skill sets and abilities not acquired through mainstream Primary
                education.
                <br />
                Incorporate contents from the latest MOE Primary curriculum as
                fun reinforcement.
                <br />
                The Methods used are more advanced and driven towards gaining
                academic knowlege.
                <br />
                <b>
                  Being 70 - 90 minutes long the classes are effective in
                  improving concentration
                </b>
              </p>
              <div class="bodys">
                <div class="card">
                  <div class="card__body">
                    <img src={tenyr} alt="" class="image" />

                    <h2 class="title">Primary</h2>
                    <p class="description">
                      {" "}
                      Age 7-10 Years Duration(90 minutes per session)
                    </p>
                  </div>
                  <a href="#contact">
                    {" "}
                    <button
                      style={{
                        border: "2px solid #0077b6",
                        borderradius: "3px",
                        width: "100%",
                      }}
                    >
                      Book Appointment
                    </button>
                  </a>
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

export default Courses;
