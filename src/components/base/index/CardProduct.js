import React from 'react'

const CardProduct = (props) => {
  return (
    <div className='m-2'>
        <a>
            <div className="card" style={{width:"19rem", height:"28rem"}}>
                <img className="card-img-top" style={{width: '18rem', height:'20rem'}} src={props.image} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text price">{props.naming} {props.brand} {props.details}</p>
                    <p className="card-text text-primary numbers">S/. {props.price}</p>
                    
                </div>
            </div>
        </a>
    </div>
  )
}

export default CardProduct