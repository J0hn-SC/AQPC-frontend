import React from 'react'
import logo from '../../../helpers/images/tarjeta_grafica_logo.png'
const Header = () => {
  return (
    <section>
        <div className='d-flex row align-items-center p'>
            <div id='logo' className='col-3'>
                <img src={logo} className="tarjeta-logo" alt="logo" width='150px' height="120px"/>
            </div>
            <div id='searcher' className='col-6'>
                
                <div className="container-fluid">
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary text-white" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div id='social-media' className='col-3'>
                <div className='m-3'>
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