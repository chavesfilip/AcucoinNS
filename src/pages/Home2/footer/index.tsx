import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/slick.css'
import '../../../assets/css/style.css'
import '../../../assets/css/font-awesome.min.css'
import imglogo from '../../../assets/images/dropcoin.png'
import {Link} from 'react-router-dom'


export default function Footer(){
    return(
        <section id="full_foooter">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 m-auto">
                        <div className="footer_inner">
                            <a href="#">
                                <img className="img-responsive" src={imglogo} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer_inner">
                            <h5>SOCIAL</h5>
                            <ul>
                                <li><a href="https://twitter.com/ACUCOIN1?t=zQAiLg" target="_BLANK">Twitter</a></li>
                                <li><a href="https://www.facebook.com/RevistaACU" target="_BLANK">Facebook</a></li>
                                <li><a href="#" target="_BLANK">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_inner">
                            <h5>COMUNIDADE</h5>
                            <ul>
                                <li><a href="https://t.me/+cLCzNoYxTFlkODZk" target="_BLANK">Telegram Inglês</a></li>
                                <li><a href="https://t.me/+OzE9MATskmdmNjFk" target="_BLANK">Telegram Espanhol</a></li>
                                <li><a href="https://t.me/+UGqEfdBSh7NiYzk8" target="_BLANK">Telegram Português</a></li>
                                <li><a href="https://discord.gg/225NxyUg" target="_BLANK">Discord</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer_inner">
                            <h5>WHITEPAPER</h5>
                            <ul>
                                <li><a href="#"></a></li>
                                <li><a href="https://drive.google.com/file/d/14lKlAWbdqXtVfOXVVUoR4Pe3B7piUKIL/view" target="_BLANK">Inglês</a></li>
                                <li><a href="https://drive.google.com/file/d/1ORduN3cq4Tt43Olb0-UVww4sYzV4p5_Q/view" target="_BLANK">Português</a></li>
                            </ul>

                           <div className="footer_inner">
                                <h5>TROCAR DE IDIOMAS</h5>
                                <ul>
                                    <li>
                                       <Link to="/">inglês</Link>
                                    </li>
                                    <li>
                                        <Link to="/pt">
                                            Português
                                        </Link>
                                    </li>
                                   

                                </ul>
                               
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer_inner">
                            <h5>COMPANIA</h5>
                            <ul>
                                <li><a href="https://acu-editora.ao/" target="_BLANK">A.C.U</a></li>
                                <li><a href="acu.editora@gmail.com" target="_BLANK" style={{textTransform: 'lowercase'}}>acu.editora@gmail.com</a></li>
                                <li><a href="" target="_BLANK">Luanda/Angola</a></li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </section>
   
    )
}