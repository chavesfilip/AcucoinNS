import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'


export default function Ifo(){
    return(
        <section id="btc_info">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="btc_table">
                        <table>
                            <tr>
                                <th>Total Supply</th>
                                <th>Circulating Supply</th>
                                <th>Holders</th>
                                <th>Transfers</th>
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