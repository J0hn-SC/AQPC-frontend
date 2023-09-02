import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../helpers/images/tarjeta_grafica_logo.png'
const Header = () => {
    
    const [sessionActive, setSessionActive] = useState(false);
    const [user, setUser] = useState({
        id_user: 0,
        given_name: '',
        family_name: '',
        email: ''
    });
    const cerrarSesion = (e) =>{
        Cookies.set('user','')
        Cookies.set('products','')
        setSessionActive(false);
    }
    useEffect(()=>{
        let stringUser = Cookies.get('user');
        if(stringUser && stringUser.length > 0) {
            const arrayUser = stringUser.split(',');
            setUser({
                id_user: arrayUser[0],
                given_name:arrayUser[1],
                family_name:arrayUser[2],
                email: arrayUser[3]
            });
            setSessionActive(true);
        }
    },[])
  return (
    <section>
        <div className='d-flex justify-content-around align-items-center'>
            <div id='logo' className=''>
                <img src={logo} className="tarjeta-logo" alt="logo" width='150px' height="120px"/>
            </div>
            <div id='searcher' className='col-5 d-flex justify-content-center'>
                
                <div className="container-fluid">
                    <form className="d-flex">
                    <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn color-1 text-white" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div id='social-media' className='col-4'>
                <div className='d-flex justify-content-center m-3'>
                    {sessionActive?<div className="dropdown">
                    <button className="btn color-1 text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Hola, {user.given_name} {user.family_name}</button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" >Home</button></li>
                        <li><button className="dropdown-item" >Cambiar usuario</button></li>
                        <li><button className="dropdown-item" onClick={cerrarSesion}>Cerrar Sesion</button></li>
                    </ul>
                    </div>
                    :<NavLink to="/login" className="btn color-1 rounded mx-1 text-white">Login</NavLink>
                    }
                    <NavLink to="/register" className="btn color-1 rounded mx-1 text-white">Register</NavLink>
                    <a href='https://www.youtube.com/watch?v=8cekFRcdfxE&list=RDMMOfrbxBevn44&index=14'
                    className='btn rounded mx-1 text-white'
                    target='_blank'rel="noreferrer" 
                    style={{backgroundColor: '#FF0042'}}>
                        Youtuve
                    </a>

                    <a href='https://www.facebook.com/'
                    className='btn rounded mx-1 text-white'
                    target='_blank'rel="noreferrer"
                    style={{backgroundColor: '#4254DB'}}>
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header