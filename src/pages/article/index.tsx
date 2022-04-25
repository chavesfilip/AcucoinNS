import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import '../../assets/css/font-awesome.min.css'
import img10 from '../../assets/images/dropcoin.png'
import img11 from '../../assets/images/map.png'



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
                    Acucoin is an utility token that comes a gift in the ACU Comics books. The amount of Acucoin required to buy a comic book decreases for each print run, increasing the value of Acucoin. Readers use Acucoin to buy more comics or pay for products  and services at Acucoin Alliance Members.
                    1 ACU will be backed by the comic book and will have the same value of the comic book, starting from 3 usd 

                </div>
                <div className="col-sm-2 ml-auto">
                    <img src={img11} style={{width: '260px' }} />
                </div>
            </div>
        </div>
    </div> 
    )


}