import React, {useState, ChangeEvent} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import '../../assets/css/font-awesome.min.css'
import { Modal } from 'react-bootstrap'
import img1 from '../../assets/images/trx.png'
import img2 from '../../assets/images/tetrum.png'
import img3 from '../../assets/images/bnb.png'
import img4 from '../../assets/images/ada.png'
import img5 from '../../assets/images/doge.png'
import img6 from '../../assets/images/pp.png'
import img7 from '../../assets/images/mce.png'
import TrxModal from "../../components/Modal/TrxModal";
import UsdtModal from "../../components/Modal/UsdtModal";
import BnbModal from "../../components/Modal/BnbModal";
import AdaModal from "../../components/Modal/AdaModal";
import DogeModal from "../../components/Modal/DogeModal";
import PaypalModal from "../../components/Modal/PaypalModal";
import IbanModal from "../../components/Modal/IbanModal";


import { i18n } from '../../components/translete/i18n'











interface Inputs  {
    validation: string;
}






export default function Banner(){
     
    const [activeModal, setActiveModal] = useState<number | null>(null);
     //Função para abrir modais diferentes por cada codigo
     const handleClose = () => setActiveModal(null);
     const handleShow = (id: number) => {
        setActiveModal(id)
        
     }


    
    
    
     return(
        <section className="full_banner">
        <div className="" id="particles-js"></div>
        <div className="main_banner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 m-auto">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="banner_txt text-center">
                                    <div className="banner_txt_img">
                                    </div>
                                    
                                    <div className="banner_txt_h">
                                        <h1>{i18n.t('titles.h1')}</h1>
                                        <h2>1 acu = 0.2 USD</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 m-auto">
                                <div className="banner_form text-center">
                                    <span className="text-white">{i18n.t('messages.span')}</span> <br />
                                    <span className="text-white">{i18n.t('messages.span1')}</span>
                                   


                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )

}
