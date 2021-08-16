import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div class="container" id="enq">
        <div class="row justify-content-center pt-5 mt-5 pb-5">
          <div class="col-md-7">
            <h2>Admission Enquiry</h2>
            <hr class="bg-success" />

            <p class="pb-0 mb-0">
              {" "}
              You can also Contact Us Through Whatsapp And Instagram
            </p>
            <hr />
            <form action="mail.php" method="post">
              <div class="row form-group">
                <label class="col-form-label col-md-4">Name</label>
                <div class="col-md-8">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="row form-group">
                <label for="email" class="col-form-label col-md-4">
                  E-mail
                </label>
                <div class="col-md-8">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="row form-group">
                <label for="options" class="col-form-label col-md-4">
                  Course
                </label>
                <div class="col-md-8">
                  <select
                    class="form-select form-control"
                    name="course"
                    required
                  >
                    <option selected>Select Couse</option>
                    <option value="products">Infant (1-2yrs)</option>
                    <option value="events">Toddlers (3-4yrs)</option>
                    <option value="press">preschool l (4-5yrs)</option>
                    <option value="other">Preschool II (5-6yrs)</option>
                    <option value="other">Primaryschool (7-10yrs)</option>
                  </select>
                </div>
              </div>

              <div class="row form-group">
                <label for="message" class="col-form-label col-md-4">
                  Message
                </label>
                <div class="col-md-8">
                  <textarea
                    name="message"
                    id="message"
                    class="form-control"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="d-flex justify-content-center pt-3 mt-3">
                <input
                  type="submit"
                  name="submit"
                  value="send"
                  class="btn btn-info btn-block btn-send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
