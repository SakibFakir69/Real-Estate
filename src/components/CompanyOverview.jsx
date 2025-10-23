// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function CompanyOverview() {
  return (
    <div className="mt-98 company-box-height ">
      <section className="d-flex gap-174 ">

        <div className="">
          <img
            className="company-img"
            src="pexels-olga-neptuna-1090543-2078774 1.png"
          />
        </div>
        {/* text */}
        <div className="d-flex flex-column  rounded company-text gap-40">
          <h3 className="fw-bold fs-44">
            Award winning real estate company in Dubai
          </h3>

          <p className=" fs-24">
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
            ornare magna.
          </p>

          <div
            className="color-bg d-flex row col-12 p-1"
            style={{ width: "553px", height: "165px" }}
          >
            <div className="col-6 ">
              <h3 className="fw-bold fs-24 text-white">YEARS EXPERIENCE</h3>
              <h2 className="color-text fw-bold fs-34 mt-n-10 text-center me-5">
                20y
              </h2>
            </div>

            <div className="col-6 ">
              <h3 className="fw-bold fs-24 text-white">ONGOING PROJECTS</h3>
              <h2 className="color-text fw-bold fs-34 text-center mt-n-10">
                10+
              </h2>
            </div>
            <div className="col-6 ">
              <h3 className="fw-bold fs-24 text-white">PREVIOUS PROJECTS</h3>
              <h2 className="color-text fw-bold fs-34 mt-n-10 text-center">
                25+
              </h2>
            </div>
          </div>
        </div>

        {/* slider */}
       

      </section>
    </div>
  );
}

export default CompanyOverview;
