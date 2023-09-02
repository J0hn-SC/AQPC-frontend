import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart} from "react-icons/ai";
import Carousel from '../base/index/Carousel'
import Contact from '../base/index/Contact'
import Footer from '../base/index/Footer'
import Header from '../base/index/Header'
import List from '../base/index/List'
import Map from '../base/index/Map'
import Cookies from 'js-cookie';
const Index = () => {
  //let shoppingList = new Set([]);
  const handleProducts = () => {
    if(!Cookies.get('products')){
      Cookies.set('products','');
    }
    if(!Cookies.get('user')){
      Cookies.set('user','');
    }
  };
  handleProducts();
  let string=Cookies.get('products')
  let array=string.split(',');
  const [contador, setContador] = useState(array.length);
  
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
        <List contador={contador} setContador={setContador}></List>
        <hr className='mx-5'></hr>
        {//<Map></Map>
        }

        <div className='position-fixed bottom-0 end-0 m-5'>
          <Link class="btn rounded-circle color-1 position-relative" to='/shopping-cart' >
            <AiOutlineShoppingCart size={30} color={"white"} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {contador}
              <span class="visually-hidden">unr</span>
            </span>
          </Link>
        </div>
        <Footer></Footer>
        
    </>
    
  )
}

export default Index