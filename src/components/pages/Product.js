import React from 'react'
import imagen from '../../helpers/images/tarjeta_grafica_logo.png'
const Product = (props) => {
  
  return (
    <div className='container-md'>
        <hr></hr>
        <div className='d-flex justify-content-center'>
            <div className='mx-5'>
                <img className="card-img-top" style={{width: '18rem', height:'20rem'}} src={imagen} alt="Card image cap"/>
            </div>
            <div className='p-5 mx-5'>
                <p className='fw-bold'>Name</p>
                <p className='text-primary'>Precio</p>
                <p>Details</p>
                <p>Brand</p>
                <p>Version</p>
                <p>Description</p>
                <hr></hr>
                <button className='btn btn-primary rounded p-3 text-white'>Comprar por whatsapp</button>
            </div>
        </div>
        
    </div>
  )
}

export default Product