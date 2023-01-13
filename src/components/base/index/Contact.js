import React from 'react'

const Contact = () => {
  return (
    <section>
        <div className='container-fluid d-flex text-center justify-center py-2 px-4 bg-light'>
            <div id='details' className='col-10'>
                <div className="justify-content-start d-flex">
                    <span className='px-2 text-muted'>Lunes a sabado de 9am a 6pm |</span>
                    <span className='px-2 text-muted'>Domingo 10am a 3pm |</span>
                    <span className='px-2 text-muted'>Pasaje, Acisclo Villarán 331  Sótano 1</span>
                </div>
            </div>
            <div id='numero-whatsapp' className='col-2'>
                <a href='https://www.youtube.com/'  className='btn btn-primary rounded text-decoration-none d-inline py-1' style={{fontFamily: "Times New Roman",height:30}}>
                    <span className='text-center numbers text-white px-2'>
                        Llamar al  
                    </span>
                    <span className='text-center numbers text-white'>913935368</span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact