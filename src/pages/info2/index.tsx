import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import i18n from "../../lang";

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
                                        <h4>{i18n.t('messages.h4')}</h4>
                                        <p>5.225.000 ACU - {i18n.t('messages.p5')} </p>
                                        <p>2.200.000 ACU - {i18n.t('messages.p6')}</p>
                                        <p>1.000.000 ACU - {i18n.t('messages.p7')}</p>
                                        <p>1.000.000 ACU - {i18n.t('messages.p8')}</p>
                                        <p>575.000 ACU - {i18n.t('messages.p9')}  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="btc_ser_inner"  style={{borderRadius: '10px'}}>
                            <div id="particles-new2js" className="btc_ser_partical"></div>
                                    <div className="btc_ser_txt">
                                        <h4>ICO´s</h4>
                                        <p>1st ICO : 200.000 ACU - 1 ACU - 0.02 USD</p>
                                        <p>2nd ICO : 200.000 ACU - 1 ACU - 0.3 USD</p>
                                        <p>3rd ICO : 200.000 ACU - 1 ACU - 0.5 USD</p>
                                        <p>4th ICO : 200.000 ACU - 1 ACU - 0.7 USD</p>
                                        <p>5th ICO : 200.000 ACU - 1 ACU - 0.9 USD</p>
                                    </div>
                            </div>
                        </div>
                        </div>
            </div>        
        </section>      
    )

}