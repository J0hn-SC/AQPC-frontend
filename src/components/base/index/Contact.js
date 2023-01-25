import React from 'react'

const Contact = () => {
  return (
    <section>
        <div className='container-fluid d-flex text-center justify-center py-2 px-4 bg-light'>
            <div id='details' className='col-10'>
                <div className="d-flex justify-content-start ">
                    <span className='px-2 text-muted ltr-2 fs-6'>Lunes a sabado de 9am a 6pm |</span>
                    <span className='px-2 text-muted ltr-2 fs-6'>Domingo 10am a 3pm |</span>
                    <span className='px-2 text-muted ltr-2 fs-6'>Pasaje, Acisclo Villarán 331  Sótano 1</span>
                </div>
            </div>
            <div id='numero-whatsapp' className='col-2'>
                <a href='https://api.whatsapp.com/send?phone=51913935368&text=Hola!%20estoy%20interesado%20en%20sus%20productos%F0%9F%A4%94%F0%9F%A4%94'  
                className='btn color-1 rounded text-decoration-none d-inline py-1' style={{fontFamily: "Times New Roman",height:30}}
                target='_blank'rel="noreferrer" 
                >
                    <span className='text-center ltr-2 text-white px-2 fs-6'>
                        Llamar al 913935368
                    </span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact