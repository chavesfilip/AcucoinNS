import React, {useState, ChangeEvent} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/slick.css'
import '../../../assets/css/style.css'
import '../../../assets/css/font-awesome.min.css'
import { Modal } from 'react-bootstrap'
import img1 from '../../../assets/images/trx.png'
import img2 from '../../../assets/images/tetrum.png'
import img3 from '../../../assets/images/bnb.png'
import img4 from '../../../assets/images/ada.png'
import img5 from '../../../assets/images/doge.png'
import img6 from '../../../assets/images/pp.png'
import img7 from '../../../assets/images/mce.png'
import TrxModal from "../../../components/Modal/TrxModal";
import UsdtModal from "../../../components/Modal/UsdtModal";
import BnbModal from "../../../components/Modal/BnbModal";
import AdaModal from "../../../components/Modal/AdaModal";
import DogeModal from "../../../components/Modal/DogeModal";
import PaypalModal from "../../../components/Modal/PaypalModal";
import IbanModal from "../../../components/Modal/IbanModal";













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
                                        <h1>PARTICIPE DO ICO DA ACUCOIN!</h1>
                                        <h2>1 acu = 0.2 USD</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 m-auto">
                                <div className="banner_form text-center">
                                    <span className="text-white">depois de recebermos o pagamento, levaremos cerca de 24 horas para depositar os Acucoins em sua carteira</span> <br />
                                    <span className="text-white">Aceitamos: TRX, USDT, BNB, ADA, DOGE, PayPal e IBAN</span>
                                   

                                    <p className="text-center text-white mt-2"  style={{ position: 'relative', bottom: '-20px', fontWeight: 'bold',}}>Escolha um método de pagamento</p>

                                    <div className=" col-md-8  pt-4 container1">
                                        <div className="fx">
                                            <img className="ml-4" src={img1}  style={{width: '40px'}} onClick={() => handleShow(1)}  title="TRX" />
                                            <TrxModal 
                                                show={activeModal === 1} 
                                                handleClose={handleClose} 
                                            />
    
                                        </div>
                                        <div className="fx">
                                            <img className="ml-4" src={img2} style={{width: '40px'}} title="USDT" onClick={() => handleShow(2)} />
                                            <UsdtModal 
                                                show={activeModal === 2}
                                                handleClose={handleClose}
                                            />
                                        </div>

                                        <div className="fx">
                                            <img className="ml-4" src={img3} style={{width: '40px'}} title="BNB" onClick={() => handleShow(3)} />
                                            <BnbModal 
                                                show={activeModal === 3}
                                                handleClose={handleClose}
                                            />
                                        </div>

                                        <div className="fx">
                                            <img className="ml-4" src={img4}  style={{width: '40px'}} title="ADA" onClick={() => handleShow(4)} />
                                            <AdaModal 
                                                show={activeModal === 4} 
                                                handleClose={handleClose} 
                                            />
                                        </div>

                                        <div className="fx">
                                            <img className="ml-4" src={img5} style={{width: '40px'}} title="DOGE" onClick={() => handleShow(5)} />
                                            <DogeModal 
                                                show={activeModal === 5} 
                                                handleClose={handleClose} 
                                            />
                                        </div>
                                        <div className='fx'>
                                            <img className="ml-4" src={img6}  style={{width: '40px'}} title="IBAN" onClick={() => handleShow(6)} />
                                            <PaypalModal
                                                show={activeModal === 6} 
                                                handleClose={handleClose} 
                                            />
                                        </div>
                                        <div className='fx'>
                                            <img className="ml-4" src={img7}  style={{width: '40px',}} title="IBAN" onClick={() => handleShow(7)}  />
                                            <IbanModal
                                                show={activeModal === 7} 
                                                handleClose={handleClose} 
                                            />
                                        </div>
                                    </div>
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