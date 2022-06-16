import React, { useEffect, useState, ChangeEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import axios from 'axios'


interface Coin{
    symbol: string;
    current_price: number;
}



const i18n_STORAGE_KEY = 'i18nextLng';




export default function Home(){
    const [money, setMoney] = useState<Coin[]>()
    const Postmoney = async () => {
        console.log('entrou')
        console.log(money)
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
     )
      setMoney(response.data)
      setMoney(response.data.slice(0,5))
      const coins = response.data as Coin[]
      const filtercoins = coins.filter((coin:Coin) => coin.symbol === "usdt" || coin.symbol === "bnb" ||  coin.symbol === "ada" ||  coin.symbol === "doge" ||  coin.symbol === "trx" ) 
      const pricedCoins = filtercoins.map((item: Coin) => {
        return {
            ...item,
            current_price: Number((0.21 / item.current_price).toFixed(5))
        };
     })
     setMoney(pricedCoins)

     
     

}

useEffect(() => {
    Postmoney()
}, [])

    return(
        <header id="full_header">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="header_table">
                        <table>
                        {money?.map((exchange_rates, index) => (
                             <tr key={index}>
                                <td> 1 ACU  <span> = {exchange_rates?.current_price ?? ""} {exchange_rates?.symbol ?? ""} </span></td>   
                             </tr>
                        ))}
                           
                        </table>
                    </div>
                </div>
            </div
>        </div>

    </header>
    
    )
}