import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/slick.css'
import '../../../assets/css/style.css'


export default function Ifo(){
    return(
        <section id="btc_info">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="btc_table">
                        <table>
                            <tr>
                                <th>FORNECIMENTO MÁXIMO</th>
                                <th>FORNECIMENTO CIRCULANTE</th>
                                <th>TITULARES</th>
                                <th>TRANSFERÊNCIAS</th>
                            </tr>
                            <tr>
                                <td>10,000,000 ACU</td>
                                <td>4,775,640 ACU</td>
                                <td>310 Endereço</td>
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