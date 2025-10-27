import "bootstrap/dist/css/bootstrap.css";
import Hero from "./components/Hero";
import CompanyOverview from "./components/CompanyOverview";
import OngoingProject from "./components/OngoingProject";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import Footer from "././shared/Footer";

//  <section className="width-1276  border border-primary mx-auto ">
//           <Hero />
//         </section>

// <section className=" border border-primary mx-auto">
//   <CompanyOverview/>
//   <OngoingProject/>
//   <Testimonial/>
//   <ContactUs/>
//   <Footer/>

// </section>
function App() {
  return (
    <div className=" main-color">
      <div className="   mx-auto">

        <div className="main-color mx-auto" >

          <section className="bg-color ">
            <Hero />
          </section>

         <div className="margin-on-app" 

         >

           <CompanyOverview />
          <OngoingProject />
          <Testimonial />
          <ContactUs />
          <Footer />
         </div>


        </div>
      </div>
    </div>
  );
}

export default App;
