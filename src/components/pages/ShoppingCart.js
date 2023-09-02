import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Cookies from 'js-cookie'
import axios from 'axios'
import logo from '../../helpers/images/tarjeta_grafica_logo.png'
import Item from './Item';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    let stringProducts = Cookies.get('products');
    let arrayProducts = []
    if(stringProducts.length > 0){
        arrayProducts = stringProducts.split(',');
    }
    

    //---------------------------------------------------------------
    
    let stringUser = Cookies.get('user');
    console.log("stringUser", stringUser)
    let User = {
        id_user: 0,
        given_name: '',
        family_name: '',
        email: ''
    }
    if(stringUser && stringUser.length > 0){
        const arrayUser = stringUser.split(',');
        User = {
            id_user: arrayUser[0],
            given_name: arrayUser[1],
            family_name: arrayUser[2],
            email: arrayUser[3]
        }
    }
    let stringSesionToken = Cookies.get('sessionToken');
    
    const [list_products, setListProducts] = useState([]);
    const setAmount = (index, type) =>{
        console.log("setAmount", type)
        let newArray = [...list_products]
        if(type === 1){
            newArray[index].amount++;
            setBill({...bill,subtotal: bill.subtotal + newArray[index].product.price})
        }else{
            if(newArray[index].amount > 1){
                newArray[index].amount--;
                setBill({...bill,subtotal: bill.subtotal - newArray[index].product.price})
            }
        }
        setListProducts(newArray);
    }
    
    const [bill, setBill] = useState({subtotal:0, discount: 0, total: 0});
    const navigate = useNavigate();

    let id_products = {array_products: arrayProducts}
    useEffect(()=>{

        const getProducts = async () => {
            try{
                //let res = await axios.post(process.env.REACT_APP_SERVER +`/api/login`,form,{headers: {
                console.log(id_products)
                let res = await axios.post("http://localhost:5000/api/get_product", id_products, {headers: {
                    'Content-Type': 'application/json'
                }
            }),
                json = await res.data
                console.log("json",json)
                let suma = 0;
                json.products.forEach((ele)=>{
                    suma += ele.price;
                    setListProducts(list_products => [...list_products, {product:ele, amount: 1}])
                })
                setBill({...bill,subtotal:suma})
            }catch(e){
                console.log("Hubo un error")
            }
        }
        if(id_products.array_products.length > 0){
            getProducts();
        }
        
    
      },[])

    const buy_products = async (event) =>{
        try{
                let today = new Date();
                let date =  today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
                const shopping_cart = {
                    session:{id_user: User.id_user, email:User.email, date:date, total_cash: bill.total},
                    sesionToken: stringSesionToken,
                    products: list_products
                };
                console.log(shopping_cart);
                let res = await axios.post("http://localhost:5000/api/user/buy", shopping_cart, {headers: {
                    'Content-Type': 'application/json'
                }
                }),
                json = await res.data
                console.log(json)
                if(json.result){
                    Cookies.set('products','')
                    navigate('/')
                    console.log("La compra ha sido realizada");
                }
            }catch(e){
                console.log("Hubo un error")
            }
    }
    return (
    <div>
        <div id='header' className='d-flex justify-content-around'>
            <img src={logo} className="tarjeta-logo" alt="logo" width='150px' height="120px"/>
            <Link to='/' className='border-0 bg-transparent'><BiArrowBack size={35}/><span className='mx-1'>Seguir comprando</span></Link>
        </div>
        <hr></hr>
        <div className='container-sm'>
            <div className='my-3'>
                <AiOutlineShoppingCart size={40} color={'red'}/>
                <span className='px-1'>Mi Carrito</span>
            </div>
            <div className='d-flex'>
                <div id='table' className='col-9'>
                    <table class="table px-2 py-4">
                        <thead className='color-1 px-2 py-4'>
                            <tr className='px-2 py-4'>
                                <th scope="col"><span className='text-white'>PRODUCTO</span></th>
                                <th scope="col"></th>
                                <th scope="col"><span className='text-white'>PRECIO</span></th>
                                <th scope="col"><span className='text-white'>CANTIDAD</span></th>
                                <th scope="col"><span className='text-white'>TOTAL</span></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {list_products.length === 0 ? <div>No has agregado ningun producto</div> :
                            list_products.map((ele,index)=>
                                <Item key={ele.product.id_product} image={ele.product.image} naming={ele.product.naming} 
                                brand={ele.product.brand} price={ele.product.price} details={ele.product.details} amount={ele.amount}
                                setAmount={setAmount} index={index}
                                />
                            )}
                            

                        </tbody>
                    </table>
                </div>
                <div id='commercial-invoice' className='mx-3 col-3'>
                    <div className='border p-3'>
                        <div className="row">
                            <div className="col">
                            Subtotal:
                            </div>
                            <div className="col">
                            S/. {bill.subtotal}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            Descuento:
                            </div>
                            <div className="col">
                            S/. 0.00
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            Total:
                            </div>
                            <div className="col">
                            S/. {bill.total}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn color-1 text-white' onClick={buy_products}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShoppingCart