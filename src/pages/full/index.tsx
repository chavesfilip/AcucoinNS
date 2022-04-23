import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'


export default function Full(){
    return(
        <section id="full_services">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="secion_heading text-center">
                        <h2>WHY CHOOSE ACUCOIN?</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>COMMUNITY </h5>
                        <p>Growing community of ACU comic book readers.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-btc" aria-hidden="true"></i> SCARCE </h5>
                        <p> More rarer than bitcoin due to it´s lower maximum supply.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-university" aria-hidden="true"></i> product-backed token </h5>
                        <p>Guarantee that 1 Acucoin will be equivalent to one Comic Book.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-money" aria-hidden="true">
                        </i> Ecosystem</h5>
                        <p>Paymente currency for African Comic Universe prudutos and services.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-paypal" aria-hidden="true"></i> Easy to Buy </h5>
                        <p>Participate in ICO using PayPal.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-shopping-cart" aria-hidden="true"></i> Payment Method </h5>
                        <p>20 Local businesses accept Acucoin as a form of payment for products and services.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>Conveniente </h5>
                        <p>Instant, global and very low transaction fee.</p>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>More utility </h5>
                        <p>Need to trade other tokens to Acucoin in order to pay for product and services locally.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>GRAPHIC NOVEL</h5>
                        <p>Upgrade from comic book series to graphic novels hardcover books, will encrease the value of the token.</p>
                    </div>
                </div>
                
            </div>
        </div>
        </section>
    )
}