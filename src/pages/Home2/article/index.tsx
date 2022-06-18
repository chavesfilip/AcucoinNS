import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/slick.css'
import '../../../assets/css/style.css'
import '../../../assets/css/font-awesome.min.css'
import img10 from '../../../assets/images/dropcoin.png'
import img11 from '../../../assets/images/map.png'

import Cronometro2 from "../../../components/Cronometro2"




export default function Article(){
    return(
        <div   style={{background: '#eee'}}>
        <div className="container">
            <div className="row p-5">
                <div className="col-sm-2">
                    <div className="">
                        <a href="#">
                            <img className="w-100 img-responsive" src={img10} alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="col-sm-8" style={{textAlign: 'left'}}>
                   <p>Acucoin é um token de utilidade que vem como brinde nas revistas ACU. Os leitores usam Acucoin para adquirir mais revistas ou pagar por bens e serviços nos Membros da Aliança Acucoin.  A quantidade de Acucoin necessária para comprar uma revista diminui a cada tiragem até atinjir o lastro. Momento em que 1 Acucoin será usado para comprar uma revista ACU equivalente a 5 dollars. </p>

                </div>
                <div className="col-sm-2 ml-auto">
                    <img src={img11} style={{width: '260px' }} />
                </div>
                <Cronometro2 />
            </div>
        </div>
    </div> 
    )


}