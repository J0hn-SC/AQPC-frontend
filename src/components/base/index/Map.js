import React from 'react'

const Map = () => {
  return (
    <section>
        <div className='d-flex m-2'>
            <div className='col-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30620.228314212414!2d-71.55872025130557!3d-16.397961896149756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b011d97c0bf%3A0xe56c6d9a3bb52869!2sUniversidad%20Nacional%20de%20San%20Agustin%20de%20Arequipa%20-%20UNSA!5e0!3m2!1ses-419!2spe!4v1673484509976!5m2!1ses-419!2spe" 
                width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-6 p-5'>
                <div className='d-inline-block'>
                    <div className='py-2'>
                        <span className='fs-4 fw-bold'>Tienda Principal</span>
                    </div>
                    <hr></hr>
                    <div className='py-2'>
                        <span className='fs-3 fw-bold'>Pasaje, Acisclo Villarán 331 Sótano 1 "Galería la Once"</span>
                    </div>
                    <div className='py-2'>
                        <span className='fs-5'>Atención al cliente de Lunes a Sábado 9am a 6pm Domingo 10am a 3pm</span>
                    </div>
                    <div className='py-2'>
                        <span className='fs-5'>Cercado de Arequipa - Peru</span>
                    </div>
                    <div id='whatsapp-numbers' className='d-block'>
                        <a className='d-block my-2 btn btn-primary text-decorator-none'><span className='text-white'>Whatsapp 913935368</span></a>
                        <a className='d-block my-2 btn btn-primary text-decorator-none'><span className='text-white'>Whatsapp 913935368</span></a>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Map