import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import i18n from "../../lang";

export default function Footer1(){

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p>© {i18n.t('messages.p19')}</p>
                    </div>
                </div>
            </div>
       </footer>
    )
}