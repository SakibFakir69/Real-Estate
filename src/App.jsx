import 'bootstrap/dist/css/bootstrap.css';
import Hero from './components/Hero';
import Navbar from './shared/navbar';
function App() {
  return (
    <div className='border color-bg h-100'>

     
      <section className='mr-ml-80 border border-red  '>

       <div className='' style={{marginTop:"82px"}}>
         <Navbar />
       </div>

     
        <Hero/>
    
      </section>

    </div>
  );
}

export default App;
