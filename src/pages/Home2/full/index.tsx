import { useState, ChangeEvent } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/slick.css'
import '../../../assets/css/style.css'
import i18n from "../../../lang";

const i18n_STORAGE_KEY = 'i18nextLng';
import { LOCALES } from "../../../lang/locales";


import './styled.css'

const locale = LOCALES.PORTUGUÊS;



export default function Full(){
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        localStorage.setItem(i18n_STORAGE_KEY, event.target.value);
        window.location = window.location
    }
    return(
        <section id="full_services">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="secion_heading text-center">
                        <h2>POR QUE ESCOLHER  ACUCOIN?</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>Comunidade</h5>
                        <p>Número Crescente de Leitores de Banda Desenhada</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-btc" aria-hidden="true"></i> ESCASSES </h5>
                        <p>Mais raro que o bitcoin, Quantidade Máxima muito Reduzida..</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-university" aria-hidden="true"></i> LASTREADO EM UM PRODUTO </h5>
                        <p>Garanta que 1 Acucoin será equivalente a uma Revista ACU.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-money" aria-hidden="true">
                        </i>ECOSSISTEMA</h5>
                        <p>Moeda de pagamento para bens e serviços da African Comic Universe..</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-paypal" aria-hidden="true"></i> FÁCIL DE COMPRAR </h5>
                        <p>Leigos em Criptomoedas Participam do ICO usando Paypal..</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-shopping-cart" aria-hidden="true"></i>FORMA DE PAGAMENTO </h5>
                        <p>20 Negócios Locais  locais aceitam o Acucoin como forma de pagamento de bens e serviços...</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>CONVENIENTE</h5>
                        <p> Transação instantânea, Global e Taxas muitos baixas.</p>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>MAIS UTILIDADE </h5>
                        <p>Necessidade de Trocas outros Tokens para uso Local.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>MAIS VALOR</h5>
                        <p>A Transição de Revistas para Livros aumentara o Valor da Acucoin.</p>
                    </div>
                </div>

                
                
            </div>
        </div>
        </section>
    )
}