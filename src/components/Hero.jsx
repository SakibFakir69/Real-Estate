


import React from 'react'
import { Navbar } from 'react-bootstrap'

function Hero() {
  return (
    <div className=''>

        <Navbar/>

        <section>

            <div>
                {/* text */}
                <h2 className='fs-1 '>A Home is build  with love  and dreams </h2>
                <p>Real estate farm that makes your dreams true</p>

                <div className=' d-flex' style={{height:"65px",width:"392px",gap:"25px"}}>

                    <button className='btn-color nav-color' style={{height:"65px",width:"191px", borderRadius:"7px"}}>Our Project</button>

                    <button className='nav-color  ' style={{border:"none", backgroundColor:"transparent",height:"65px",width:"191px", borderRadius:"7px"}}>Contact us</button>

                </div>
            </div>

        </section>

      
    </div>
  )
}

export default Hero
