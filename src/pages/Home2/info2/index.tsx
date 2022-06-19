import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/slick.css'
import '../../../assets/css/style.css'

export default function Info2(){
    return(
        <section id="btc_services">
            <div className="container">
                <div className="row position_transform">
                    <div className="col-md-6">
                        <div className="btc_ser_inner" style={{borderRadius: '10px'}}>
                            <div id="particles-new1js" className="btc_ser_partical"></div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="btc_ser_icon text-center">
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="btc_ser_txt">
                                        <h4>Distribuição</h4>
                                        <p>5.225.000 ACU - Brinde </p>
                                        <p>2.200.000 ACU - Reserva & LP</p>
                                        <p>1.000.000 ACU - Acionistas e Team</p>
                                        <p>1.000.000 ACU - ICO</p>
                                        <p>575.000 ACU- Parceiros e Marketing </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="btc_ser_inner"  style={{borderRadius: '10px'}}>
                            <div id="particles-new2js" className="btc_ser_partical"></div>
                                    <div className="btc_ser_txt">
                                        <h4>Fases do ICO</h4>
                                        <p>1º-ICO : 200.000 ACU - 1 ACU - 0.2 USD</p>
                                        <p>2º ICO : 200.000 ACU - 1 ACU - 0.3 USD</p>
                                        <p>3º ICO : 200.000 ACU - 1 ACU - 0.5 USD</p>
                                        <p>4º ICO : 200.000 ACU - 1 ACU - 0.7 USD</p>
                                        <p>5º ICO : 200.000 ACU - 1 ACU - 0.9 USD</p>
                                    </div>
                            </div>
                        </div>
                        </div>
            </div>        
        </section>      
    )

}