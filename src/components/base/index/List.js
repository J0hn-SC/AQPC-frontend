import React, { useEffect, useState } from 'react'
import CardProducto from './CardProduct'
import axios from 'axios'
import Cookies from 'js-cookie'
const List = (props) => {
  const [products,setProducts] = useState([])
  //Obtener los productos marcados en cookies--------------------------
  
  let stringProducts = Cookies.get('products');
  console.log("string cookies:",stringProducts)
  let arrayProducts = []
  if(stringProducts.length > 0){
      arrayProducts = stringProducts.split(',');
  }
  

  const add_product_shopping_cart = (product, index) => {
    props.setContador(props.contador+1);
    arrayProducts.push(product.id_product);
    console.log("arrayProducts",arrayProducts);
    products[index]['bought'] = true;
    //añadir alas cookies
    let stringProducts = Cookies.get('products');
    if(stringProducts === ''){
      Cookies.set('products',product.id_product);
    }else{
      Cookies.set('products', stringProducts+','+product.id_product);
    }
  }

  const remove_product_shopping_cart = (product, index) => {
    props.setContador(props.contador-1);
    arrayProducts = arrayProducts.filter((ele)=>ele!==product.id_product.toString());
    products[index]['bought'] = false;
    let stringProducts = Cookies.get('products');
    if(stringProducts === ''){
      Cookies.set('products',product.id_product);
    }else{
      Cookies.set('products', arrayProducts);
    }
  }
  
  
  useEffect(()=>{
    const getAllProducts = async () => {
      try{
        let res = await axios.get("http://127.0.0.1:5000/api/get_all_product"),
          json = await res.data;
        console.log(json)
        json.forEach(key=>{
          if(arrayProducts.includes(key.id_product.toString())){
            key['bought'] = true;
          }else{
            key['bought'] = false;
          }
        })
        setProducts(json);
      }catch(e){
        console.log("Hubo un error")
      }
    }
    getAllProducts();

  },[])

  

  return (
    
      <div className='container-md my-5'>
        <div className='d-flex justify-content-center my-4'>
            <span className='title text-primary'>Computadoras ideales para el estudio</span>
        </div>
        <div className='d-flex flex-wrap mx-2'>
            {products.length===0?<h3>Cargando...</h3>:
              products.map((ele,index)=>
              <CardProducto key={ele.id_product} data={ele} index={index} addProductShopping={props.addProductShopping}
              add_product_shopping_cart = {add_product_shopping_cart}
              remove_product_shopping_cart = {remove_product_shopping_cart} ></CardProducto>
            )}
        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn color-1 text-white'>Ver todo</button>
        </div>
      </div>
        
    
  )
}

export default List