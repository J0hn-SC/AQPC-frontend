import React, { useEffect, useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineCloseCircle, AiOutlineShoppingCart} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Cookies from 'js-cookie'
import axios from 'axios'
import logo from '../../helpers/images/tarjeta_grafica_logo.png'
const Item = (props) => {

    return (
    <tr className='align-items-center'>
        <td className=''>
            <img className="card-img-top" style={{width: '8rem', height:'10rem'}} src={props.image} alt="Card image cap"/>
        </td>
        <td className=''>{props.naming} {props.brand} {props.details}</td>
        <td className='' style={{color: '#df1504'}}>{props.price}</td>
        <td className='d-flex'>
            <button className='me-2 border-0 bg-transparent' onClick={()=>props.setAmount(props.index, 1)} ><AiFillPlusCircle size={30}/></button>
            <p className='me-2'>{props.amount}</p>
            <button className='me-2 border-0 bg-transparent'  onClick={()=>props.setAmount(props.index, -1)}><AiFillMinusCircle size={30}/></button>
        </td>
        <td className=''>{props.price}</td>
        <td className=''>
            <button className='border-0 bg-transparent'><AiOutlineCloseCircle size={30}/></button>
        </td>
    </tr>
    )
}

export default Item