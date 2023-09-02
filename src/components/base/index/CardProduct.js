import React, { useState } from 'react'
import Cookies from 'js-cookie'
const CardProduct = (props) => {
  const [stateBuy, setStateBuy] = useState(props.data.bought);
  return (
    <div className='m-2'>
            <div className="card p-1" style={{width:"19rem", height:"35rem"}}>
              <a href='https://www.youtube.com/' className='text-decoration-none'>
                <img className="card-img-top" style={{width: '18rem', height:'20rem'}} src={props.data.image} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text price">{props.data.naming} {props.data.brand} {props.data.details}</p>
                    <p className="card-text text-primary numbers">S/. {props.data.price}</p>
                </div>
              </a>
              <a href={props.data.url} target='_blank'rel="noreferrer"  className='btn color-1 rounded mb-2 text-white'>Pedir Whatsapp</a>
              {!stateBuy?  <button onClick={()=>{
                props.add_product_shopping_cart(props.data, props.index)
                setStateBuy(!stateBuy)
              }} className='btn color-1 rounded text-white'>Comprar Online</button>:
              <button onClick={()=>{
                props.remove_product_shopping_cart(props.data, props.index)
                setStateBuy(!stateBuy)
                }} className='btn color-2 rounded text-white'>En el carrito</button>}
            </div>
        
    </div>
  )
}

export default CardProduct