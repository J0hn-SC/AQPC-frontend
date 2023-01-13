import React from 'react'
import imagen from './img/tarjeta1.jpg'
const CardProducto = (props) => {
  return (
    <div>
        <a>
            <div className="card" style={{width: '18rem',height:'22rem'}}>
                <img className="card-img-top" style={{width: '18rem', height:'20rem'}} src={imagen} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.details}</p>
                    
                </div>
            </div>
        </a>
    </div>
  )
}

export default CardProducto