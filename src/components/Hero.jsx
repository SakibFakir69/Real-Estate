



import Navbar from '../shared/navbar'

function Hero() {
  return (
    <div className='hero-h border border-red'>
        <section className=''>
            <Navbar/>
        <section className='d-flex row col-12 gap-5   mt-135 '  >

            <div className='d-flex row col-6  gap-4  ' >
                {/* gap-40px */}
                {/* text */}
                <h2 className='fs-70 text-white'>A Home is build  with love  and dreams </h2>
                <p className='fs-24 sub-head-color'>Real estate farm that makes your dreams true</p>

                <div className=' d-flex button-group' >

                    <button className='btn-color nav-color button-1' >Our Project</button>

                    <button className='nav-color button-2  ' >Contact us</button>

                </div>
            </div>
            {/* image */}
            <div className='col-5 d-none  d-md-block '>

                <img className='mt-n-50' src='pexels-binyaminmellish-106399-removebg-preview.png'/>
            </div>
        </section>
        </section>      
    </div>
  )
}

export default Hero
