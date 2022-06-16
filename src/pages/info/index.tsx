import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import i18n from "../../lang";


export default function Ifo(){
    return(
        <section id="btc_info">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="btc_table">
                        <table>
                            <tr>
                                <th>{i18n.t('messages.th1')}</th>
                                <th>{i18n.t('messages.th2')}</th>
                                <th>{i18n.t('messages.th3')}</th>
                                <th>{i18n.t('messages.th4')}</th>
                            </tr>
                            <tr>
                                <td>10,000,000 ACU</td>
                                <td>4,775,640 ACU</td>
                                <td>310 Address</td>
                                <td>526 Txns</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}