import React, { useEffect, useState } from 'react'
import CardProducto from './CardProduct'
import imagen from './img/tarjeta1.jpg'
import axios from 'axios'
const List = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const getProducts = async () => {
      try{
        let res = await axios.get("http://127.0.0.1:5000/api/get_all_product"),
          json = await res.data
        console.log(json)
        json.forEach((ele)=>{
          setProducts(products => [...products, ele])
          //products.push(ele)
          //setProducts(products.push(ele))
        })
        console.log("Soy products",products)
      }catch(e){
        console.log("Hubo un error")
      }
    }
    getProducts();
  },[])
  return (
    
      <div className='container-md my-5'>
        <div className='d-flex justify-content-center my-4'>
            <span className='title text-primary'>Computadoras ideales para el estudio</span>
        </div>
        <div className='d-flex flex-wrap mx-2'>
            {console.log("filter")}
            {products.length===0?<h3>Cargando...</h3>:
              products.map((ele)=>
              <CardProducto key={ele.id_product} image={ele.image} naming={ele.naming} brand={ele.brand} price={ele.price} details={ele.details}></CardProducto>
            )}
        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn color-1 text-white'>Ver todo</button>
        </div>
      </div>
        
    
  )
}

export default List