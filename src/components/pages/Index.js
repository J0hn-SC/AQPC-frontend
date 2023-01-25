import React from 'react'

import Carousel from '../base/index/Carousel'
import Contact from '../base/index/Contact'
import Footer from '../base/index/Footer'
import Header from '../base/index/Header'
import List from '../base/index/List'
import Map from '../base/index/Map'
const Index = () => {
  return (
    <>
        <header id='header'>
            <Contact></Contact>
            <Header></Header>
        </header>
        <nav className="d-flex justify-content-center py-0 color-1">
            <ul className="nav nav-pills ">
                <li className="nav-item"><a href="https://www.facebook.com/" className="nav-link text-white px-5 py-3 title" aria-current="page">HOME</a></li>
                <li className="nav-item"><a href="https://www.facebook.com/" className="nav-link text-white px-5 py-3 title">PROCESADORES</a></li>
                <li className="nav-item"><a href="https://www.facebook.com/" className="nav-link text-white px-5 py-3 title">TARJETAS GRAFICAS</a></li>
                <li className="nav-item"><a href="https://www.facebook.com/" className="nav-link text-white px-5 py-3 title">COMPUTADORAS</a></li>
                <li className="nav-item"><a href="https://www.facebook.com/" className="nav-link text-white px-5 py-3 title">LABTOPS</a></li>
            </ul>
        </nav>
        <Carousel></Carousel>
        <List></List>
        <hr className='mx-5'></hr>
        {//<Map></Map>
        }
        <Footer></Footer>
        
    </>
    
  )
}

export default Index