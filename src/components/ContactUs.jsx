import React from "react";

function ContactUs() {
  return (
    <div className="mt-97 bg-color g-2" style={{marginTop:"96px"}}>

      <div className=" border border-primary">
        <div className="d-flex  flex-column text-center gap-16">
          <h2 className="fs-44 fw-bold text-white mt-114">Contact Us</h2>
          <p className="fs-24 sub-head-color">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
        </div>
        <div
          className="d-flex flex-column align-content-center justify-content-center  contact-m-l-r "
        >
          <div className="container mt-3">
            
            <div className="row gx-4 " style={{rowGap:"18px"}} >

              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="form-control bg-transparent input-height text-white fs-24"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="form-control bg-transparent input-height text-white fs-24"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="form-control bg-transparent input-height text-white fs-24"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="form-control bg-transparent input-height text-white fs-24"
                />
              </div>
              <div className="col-12">
                <input
                  placeholder="Enter your message"
                  className="form-control bg-transparent input-message text-white fs-24  "
                ></input>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4 mb-5">
              <button
                className="btn-color text-white fs-24 contact-button"

              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
