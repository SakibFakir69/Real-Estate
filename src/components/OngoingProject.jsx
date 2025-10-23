import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

function OngoingProject() {
  return (
    <div className="slider-height mt-82 bg-color">
      <section className="d-flex flex-column gap-40">
        {/* text */}

        <div className="d-flex gap-16 mt-100 text-center d-flex flex-column gap-16">
          <h2 className="text-white fs-44">Ongoing projects</h2>
          <p className="fs-24 sub-head-color fs-24">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
        </div>
        {/* slider */}
        <div className="">
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-slider-width"
          >
            <SwiperSlide>
                opjm
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default OngoingProject;
