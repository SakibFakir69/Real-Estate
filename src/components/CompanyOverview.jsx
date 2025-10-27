// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function CompanyOverview() {
  return (
    <div className=" company-box-height " style={{ marginTop: "96px" }}>
      <section className="d-flex flex-column flex-lg-row justify-content-center align-items-center mx-auto  gap-174">
        <div className="company-box-height">
          <img
            className="company-img "
            src="pexels-olga-neptuna-1090543-2078774 1.png"
          />
        </div>
        {/* text */}

        <div

          

          className="d-flex flex-column  justify-content-md-center   rounded company-text gap-40-company mx-auto text-center company-mt"
        >
          <h3 className="fw-bold fs-44-company">
            Award winning real estate company in Dubai
          </h3>

          <p className="fs-24">
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
            ornare magna.
          </p>

          <div className="color-bg d-flex row col-12 p-1 overview-box mx-auto ">

            <div className="col-md-6 text-sm-center">
            <h3 className="text-white text-nowrap text-center text-md-center">YEARS EXPERIENCE</h3>

              <h2 className="color-text fw-bold fs-34 mt-n-10 text-center me-5">
                20y
              </h2>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start text-sm-center ">
              <h3 className="text-white text-nowrap">ONGOING PROJECTS</h3>
              <h2 className="color-text fw-bold fs-34 mt-n-10">10+</h2>
            </div>

            <div className="col-md-6 text-sm-center">
              <h3 className="text-white text-nowrap text-center text-md-center">
                PREVIOUS PROJECTS
              </h3>
              <h2 className="color-text fw-bold fs-34 mt-n-10 text-center">
                25+
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyOverview;
