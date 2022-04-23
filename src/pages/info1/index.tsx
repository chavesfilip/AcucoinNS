import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import imgservice from '../../assets/images/icon1.png'
import imgservice2 from '../../assets/images/icon2.png'
import imgservice3 from '../../assets/images/icon3.png'





export default function Info1(){

    return(
        <section id="services_icon">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="services_icon_inner text-center">
                            <img src={imgservice} alt="icon" />
                            <p>Demand for Trade</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="services_icon_inner text-center">
                            <img src={imgservice2} alt="icon" />
                            <p> Growing Value</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="services_icon_inner text-center">
                            <img src={imgservice3} alt="icon" />
                            <p>Backed by a Product</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        
    )
}