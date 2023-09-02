import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const Login = () => {
    const [form,setForm] = useState({
        email:'',
        password_:'',
    });
    const [error,setError] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    const sendForm = async () => {
        try{
            //let res = await axios.post(process.env.REACT_APP_SERVER +`/api/login`,form,{headers: {
            let res = await axios.post("http://localhost:5000/api/login",form,{headers: {
                'Content-Type': 'application/json'
            }}),
              json = await res.data
            console.log("json",json)
            if(json.result){
                setError(true);
            }else{
                //Cookies.set('sessionToken', data.session, configs);

                Cookies.set('user', json.user);
                Cookies.set('sessionToken',json.sessionToken);
                navigate('/');
            }
        }catch(e){
            console.log("Hubo un error")
        }
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(form);
        sendForm();
        //navigate('/');
    }
    return (
        <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                    <div className="row g-0">
                        <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">

                            <div className="text-center">

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{width: "185px"}} alt="logo"/>
                            <h4 className="mt-1 mb-5 pb-1">Nosotros somos AQPC</h4>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {error?<p className='p-1 bg-primary rounded'>Usuario o contraseña incorrecta</p>: <></>}
                                <p>Por favor inicia sesión</p>

                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control" id="email" name='email' value={form.email} onChange={handleChange}  />
                                    <label className="form-label" htmlFor="form2Example11">Correo</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" className="form-control" id="password_" name='password_' value={form.password_} onChange={handleChange} />
                                    <label className="form-label" htmlFor="form2Example22">Contraseña</label>
                                </div>

                                <div className="text-center pt-1 mb-1 pb-1">
                                    <input className="btn color-1 text-white btn-block fa-lg gradient-custom-2 mb-3" type="submit" value='Ingresar'></input>
                                    
                                </div>
                                <div className="text-center mb-5">
                                    <a className="text-muted" href="#!">Forgot password?</a>
                                </div>

                                <div className="d-flex align-items-center justify-content-center pb-4">
                                    <p className="mb-0 me-2">No tienes una cuenta?</p>
                                    <Link className="btn color-1 text-white">Crear Nueva cuenta</Link>
                                </div>

                            </form>

                        </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center color-1">
                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 className="mb-4">We are more than just a company</h4>
                                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Login