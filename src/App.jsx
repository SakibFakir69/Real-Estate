import "bootstrap/dist/css/bootstrap.css";
import Hero from "./components/Hero";
import CompanyOverview from "./components/CompanyOverview";
import OngoingProject from "./components/OngoingProject";

function App() {
  return (
    <div className="border main-color">

      <section className="color-bg">
        <section className="width-1276 border border-primary mx-auto ">
          <Hero />
        </section>
      </section>

      <section className="width-1276 border border-primary mx-auto">
        <CompanyOverview/>
        <OngoingProject/>

      </section>


    </div>
  );
}

export default App;
