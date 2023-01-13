import React, { useRef, useState } from 'react'
import tarjeta1 from './img/tarjeta1.jpg'
import tarjeta2 from './img/tarjeta2.jpg'
import tarjeta3 from './img/tarjeta3.jpg'
const Carousel = () => {
    //console.log(tarjeta1)
    let {image,setImage} = useState(tarjeta1);
    //console.log(image);
    let refImage1 = useRef();
    let refImage2 = useRef();
    let refImage3 = useRef();
    const change = () => {
        console.log(refImage1.current.className)
        console.log(refImage2.current.className)
        console.log(refImage3.current.className)

        if(refImage1.current.className === 'carousel-item active'){
            refImage1.current.className = 'carousel-item';
            refImage2.current.className += ' active';
        }
            
        else if(refImage2.current.className === 'carousel-item active'){
            refImage3.current.className += ' active';
            refImage2.current.className = 'carousel-item';
        }
        else if(refImage3.current.className === 'carousel-item active'){
            refImage1.current.className+= ' active';
            refImage3.current.className = 'carousel-item';
        }
        
        console.log(refImage1.current.className)
        console.log(refImage2.current.className)
        console.log(refImage3.current.className)
    }

    

  return (
    <section>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-inner" style={{height:'450px'}}>
                <div className="carousel-item active" ref={refImage1}>
                    <img id='image'  src={tarjeta1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" ref={refImage2}>
                    <img src={tarjeta2}  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" ref={refImage3}>
                    <img src={tarjeta3}  className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button onClick={change} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
  )
}

export default Carousel