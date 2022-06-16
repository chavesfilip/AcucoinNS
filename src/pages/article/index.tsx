import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import '../../assets/css/font-awesome.min.css'
import img10 from '../../assets/images/dropcoin.png'
import img11 from '../../assets/images/map.png'
import i18n from "../../lang";
import Cronometro from "../../components/Cronometro";



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
                   <p> {i18n.t('messages.p1')} </p>

                </div>
                <div className="col-sm-2 ml-auto">
                    <img src={img11} style={{width: '260px' }} />
                </div>
                <Cronometro />
            </div>
        </div>
    </div> 
    )


}