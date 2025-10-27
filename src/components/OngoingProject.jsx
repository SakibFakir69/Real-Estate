import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { BiArrowFromLeft, BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { SlArrowLeft } from "react-icons/sl";

function OngoingProject() {
  return (
    <div className="  bg-color  p-4 ongoing-porject-mt" >
      <section
        className="d-flex flex-column"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        {/* text */}

        <div className="d-flex gap-16 text-center d-flex flex-column gap-16">
          <h2 className="text-white fs-44">Ongoing projects</h2>
          <p className="fs-24 sub-head-color fs-24">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
        </div>
        {/* slider */}

       
      </section>
    </div>
  );
}

export default OngoingProject;




//  <div
//           className="d-flex align-content-center justify-content-center"
//           style={{ marginTop: "40px" }}
//         >
//           <SlArrowLeft
//             size={50}
//             color="white"
//             style={{ marginTop: "60px", marginRight: "10px" }}
//           />

//           <div className="" style={{ height: "212px" }}>
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={0}
//               slidesPerView={1}
//               breakpoints={{
//                 768: {
//                   slidesPerView: 1,
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                 },
//               }}
//               navigation={true}
//               onSlideChange={() => console.log("slide change")}
//               onSwiper={(swiper) => console.log(swiper)}
//               className="swiper-slider-width"
//               style={{ marginTop: "-20px" }}
//             >
//               <SwiperSlide
//                 className="position-relative "
//                 style={{
//                   overflow: "visible",
//                   height: "209px",
//                   marginRight: "50px",
//                 }}
//               >
//                 <div>
//                   <img
//                     src="pexels-pixabay-53610 1.png"
//                     className="img-fluid  slider-img"
//                     alt="Vintage Village"
//                   />
//                 </div>

//                 {/* box */}
//                 <div className="text-center border btn-color position-absolute d-flex flex-column justify-content-center align-items-center rounded slider-img-box">
//                   <h2 className="fs-24 text-white m-0">Vintage Village</h2>
//                   <p className=" m-0 sub-head-color">Dhaka</p>
//                 </div>
//               </SwiperSlide>

//               <SwiperSlide
//                 className="position-relative "
//                 style={{ overflow: "visible", height: "209px" }}
//               >
//                 <div>
//                   <img
//                     src="pexels-pixabay-53610 1.png"
//                     className="img-fluid  slider-img"
//                     alt="Vintage Village"
//                   />
//                 </div>

//                 {/* box */}
//                 <div className="text-center border btn-color position-absolute d-flex flex-column justify-content-center align-items-center rounded  slider-img-box">
//                   <h2 className="fs-24 text-white m-0">Vintage Village</h2>
//                   <p className=" m-0 sub-head-color">Dhaka</p>
//                 </div>
//               </SwiperSlide>

//               <SwiperSlide
//                 className="position-relative "
//                 style={{ overflow: "visible", height: "209px" }}
//               >
//                 <div>
//                   <img
//                     src="pexels-pixabay-53610 1.png"
//                     className="img-fluid  slider-img"
//                     alt="Vintage Village"
//                   />
//                 </div>

//                 {/* box */}
//                 <div className="text-center border btn-color position-absolute d-flex flex-column justify-content-center align-items-center rounded  slider-img-box">
//                   <h2 className="fs-24 text-white m-0">Vintage Village</h2>
//                   <p className=" m-0 sub-head-color">Dhaka</p>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>

//           <SlArrowLeft
//             size={50}
//             color="white"
//             style={{ marginTop: "60px", rotate: "180deg" }}
//           />
//         </div>