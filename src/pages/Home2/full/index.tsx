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
                        <h2>POR QUE ESCOLHER A ACUCOIN?</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>Comunidade</h5>
                        <p>Crescente comunidade de leitores de quadrinhos</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-btc" aria-hidden="true"></i> ESCASSO </h5>
                        <p>Mais raro que o bitcoin devido à sua oferta máxima mais baixa..</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-university" aria-hidden="true"></i> TOKEN APOIADO AO PRODUTO </h5>
                        <p>Garanta que 1 Acucoin será equivalente a uma História em Quadrinhos.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-money" aria-hidden="true">
                        </i>ECOSSISTEMA</h5>
                        <p>Moeda de pagamento para bens e serviços do African Comic Universe..</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-paypal" aria-hidden="true"></i> FÁCIL DE COMPRAR </h5>
                        <p>Os usuários que não são criptos participam da ICO usando o PayPal..</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-shopping-cart" aria-hidden="true"></i>FORMA DE PAGAMENTO </h5>
                        <p>20 As empresas locais aceitam o Acucoin como forma de pagamento de bens e serviços...</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>CONVENIENTE</h5>
                        <p>Taxa de transação instantânea, global e muito baixa.</p>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>MAIS UTILIDADE </h5>
                        <p>Precisa trocar outros tokens com Acucoin para gastá-lo localmente..</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>MAIS VALOR</h5>
                        <p>A atualização de uma série de quadrinhos para livros de novelas gráficas aumentará o valor do Acucoin..</p>
                    </div>
                </div>

                
                
            </div>
        </div>
        <div className=''>
            <select className='select' id='mather' onChange={handleSelectChange}>
                        <option value="pt-BR">EN</option>
                        <option value="en-US">PT</option>
            </select>
        </div>
        
        </section>
    )
}