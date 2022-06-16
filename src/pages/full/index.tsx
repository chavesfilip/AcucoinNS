import { useState, ChangeEvent } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import i18n from "../../lang";

const i18n_STORAGE_KEY = 'i18nextLng';

import './styled.css'


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
                        <h2>{i18n.t('titles.h2')}?</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>{i18n.t('titles.h5')}</h5>
                        <p>{i18n.t('messages.p10')}</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-btc" aria-hidden="true"></i> {i18n.t('titles.h6')} </h5>
                        <p> {i18n.t('messages.p11')}.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-university" aria-hidden="true"></i> {i18n.t('titles.h7')} </h5>
                        <p>{i18n.t('messages.p12')}</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-money" aria-hidden="true">
                        </i> {i18n.t('titles.h8')}</h5>
                        <p>{i18n.t('messages.p13')}.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-paypal" aria-hidden="true"></i> {i18n.t('titles.h9')} </h5>
                        <p>{i18n.t('messages.p14')}.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-shopping-cart" aria-hidden="true"></i> {i18n.t('titles.h10')} </h5>
                        <p>{i18n.t('messages.p15')}.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>{i18n.t('titles.h11')} </h5>
                        <p>{i18n.t('messages.p16')}.</p>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>{i18n.t('titles.h12')} </h5>
                        <p>{i18n.t('messages.p17')}.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="serives_inner">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i>{i18n.t('titles.h13')}</h5>
                        <p>{i18n.t('messages.p18')}.</p>
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