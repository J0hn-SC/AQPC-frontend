import React from 'react'
import CardProducto from './CardProducto'
import imagen from './img/tarjeta1.jpg'
const List = () => {
  return (
    <section className='my-5'>
        <div className='d-flex justify-content-center my-4'>
            <span className='title text-primary'>Computadoras ideales para el estudio</span>
        </div>
        <div className='d-flex mx-5 d-block'>
            <CardProducto image={imagen} name={'Computadora blabla bla'} price={1799} details={'es una mu buena pc'}></CardProducto>

        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-primary text-white'>Ver todo</button>
        </div>
        
    </section>
  )
}

export default List