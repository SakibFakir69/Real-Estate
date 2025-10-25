import React from "react";

function Footer() {
  return (
    <div className="mt-97">
      <section className="row d-flex justify-content-around ">
        <div className="col-4  d-flex gap-31 flex-column">
          <h1 className="fs-36 fw-bold">Company</h1>

          <p className="footer-p">Dhaka, 1203, Mirpur</p>
          <p className="footer-p">Build your dream house</p>
          <p className="footer-p">+170345435</p>
          <p className="footer-p">Sakib@gmail.com</p>
        </div>

        <div className="col-4  d-flex gap-31 flex-column  align-items-center">
          <h1 className="fs-36 fw-normal">Services</h1>

          <div className="" style={{marginRight:"90px"}} >

            <p className="footer-p">Building</p>
            <p className="footer-p">Conslting</p>
            <p className="footer-p">Design</p>
          </div>
        </div>

        <div className="col-4  d-flex gap-31 flex-column " >

          <h1 className="fs-36 text-end fw-normal">Social Media</h1>

          <div className="text-center " >
            <p className="footer-p">Facebook</p>
            <p className="footer-p" style={{marginRight:"50px"}}>X</p>
            <p className="footer-p">Linkedin</p>
          </div>

        </div>

      </section>

      <div className="mt-82">
        <h3 className="text-center m-b-32 fs-24 fw-bold">
          Company property LTD
        </h3>
      </div>
    </div>
  );
}

export default Footer;
