



function Testimonial() {
  return (
    <div className='mt-97 '>
        <section>
            <div className='d-flex flex-column gap-16 text-center'>

                <h2 className='text-black fs-md-44 fs-40'>Few smiles and comment</h2>

                <p className='fs-md-24 fs-20'>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            </div>
            {/* box */}
            <div className='gap-165 d-flex mt-top'>

                <div >
                    <img style={{width:"620px",height:"420px"}} 
                    className="testimonal-img"
                    src='pexels-juanpphotoandvideo-1139743 1.png'/>

                </div>

                <div className='d-flex flex-column borde gap-40 '>

                    <h2 className='fs-36 text-black fw-bold flex-column d-flex gap-3'>

                        <p className='qoute text-color ' style={{height:"10px",width:"10px"}}>"</p>
                        
                        Dream house isn’t dream anymore</h2>
 
                    <p className='fs-24'>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.

                        <p className='qoute text-color ' style={{height:"10px",width:"10px",marginTop:"-20px"}}>"</p>
                    </p>
                    <div>
                        <h3>Brooklyn Simmons</h3>
                        <p>Artist</p>
                    </div>

                </div>

            </div>

        </section>
      
    </div>
  )
}

export default Testimonial
