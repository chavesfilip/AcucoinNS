import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import '../../assets/css/font-awesome.min.css'
import { Modal } from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
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








interface Inputs  {
    validation: string;
}

const validationPost = yup.object({
    validation: yup.string().required("por favor preencha todos os campos"),

}).required();




export default function Banner(){
     const [activeModal, setActiveModal] = useState<number | null>(null);
     //Função para abrir modais diferentes por cada codigo
     const handleClose = () => setActiveModal(null);
     const handleShow = (id: number) => {
        setActiveModal(id)
        console.log('manuel')
        
     }
     const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(validationPost)
      });
     const onSubmit = (data: Inputs) => console.log(data);
    
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
                                        <h1>participate in acucoin pre-sale</h1>
                                        <h2>1 acu = 0.02 USD</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 m-auto">
                                <div className="banner_form text-center">
                                    <span className="text-white">After you make the payment, we take less than 72 hours to deposite Acucoins to your wallet</span> <br />
                                    <span className="text-white">We accept: TRX, USDT, BNB, ADA, DOGE, PayPal and IBAN </span>

                                    <p className="text-center text-white mt-2"  style={{ position: 'relative', bottom: '-20px', fontWeight: 'bold',}}> Choose a payment method!</p>

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