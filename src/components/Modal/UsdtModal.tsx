import React, {useState, useEffect, ChangeEvent } from 'react'
import { Modal } from "react-bootstrap";
import axios from 'axios'
import swal from 'sweetalert';




interface Inputs {
    usdtToken: string;
}

interface Coin {
    symbol: string;
    current_price: number;
}


type UsdtModalProps = {
    show: boolean;
    handleClose: () => void;
};

const UsdtModal = ({ show, handleClose }: UsdtModalProps) => {
    const [money, setMoney] = useState<any>([])
    const [resultCalc, setResultCalc] = useState<number>()
    const [inputValue, setInputValue] = useState<string>("");
    const [inpute, setInpute] = useState<string>("");
    const [andress, setAndress] = useState<string>("");



    const fetch = async () =>  {
      const response =  await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const coins = response.data as Coin[]
      const filtercoins = coins.filter((coin:Coin) => coin.symbol === "usdt" || coin.symbol === "bnb" ||  coin.symbol === "ada" ||  coin.symbol === "doge" ||  coin.symbol === "trx" )           
      setMoney(filtercoins)

      const usdtData = filtercoins?.find((coin) => coin.symbol === 'usdt')
      setResultCalc(usdtData?.current_price)
    }

    useEffect(() => {
      fetch()}, []
    )
    function addApi(e: any) {
        e.preventDefault();
        const params = new URLSearchParams()
    
        params.append('nome', inpute)    
        params.append('valor', inputValue) 
        params.append('qtd', String(resultCalc))
        params.append('senders', andress)

        
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('https://admin-acucoin.ao/api/usdt', params, config)
        .then(response=> console.log('deu certo')).catch(err=>console.log(err)) 
        swal("Thank You!", "You aplication was sucessfully!", "success");
        setInputValue("")
        setInpute("")

        
    }



    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const usdtData = money?.find((coin:Coin) => coin.symbol === 'usdt')
        
        const constusdt = usdtData ? (0.21 / usdtData.current_price) : 28;
        
        const numberInput = Number(e.target.value)
        
        const convert = Number(constusdt)
        
        const calcInput = Number((convert * numberInput).toFixed(3))

        
        setInputValue(e.target.value) 
        setResultCalc(calcInput)
}
function inputValidated(e: any) {
    e.preventDefault();
    
    if (
        inputValue &&
        typeof inputValue === 'string' &&
        inputValue.length > 0 &&
        !isNaN(Number(inputValue))
    ) {
        let _value: number = parseInt(inputValue.trim());

        if (_value >= 25 && _value <= 20000) {
            addApi(e);
            setInpute("")

            return;
        }

        swal ( "Oops" ,  "The amount must be greater than 25 or less than 20000!!!" ,  "error" ) 
        return;
    }
    
    swal ( "Oops" ,  "please fill in all fields!!!" ,  "error" )
}



   

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <h5 className="modal-title" id="exampleModalLabel">
                    Buy with USDT
                </h5>
            </Modal.Header>
            <form>
                <Modal.Body>
                    <div className="form-group">
                        <label className="col-form-label">
                            Enter your Acucoin receive address
                        </label> <br/>
                        <code className="highlighter-rouge 4b-2">
                            (TRON / TRC10 TOKEN)
                        </code>
                        <code className="highlighter-rouge 4b-1">
                            (Make Sure It is a TRON /TRC10 ADDRESS)
                        </code>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9"                          
                            onChange={(e) => setInpute(e.target.value)}

                        />
                        <div className="form-group mt-3">
                            <label  className="col-form-label">Sender Andress:</label>
                            <input type="text" className="form-control"  placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9" onChange={(e) => setAndress(e.target.value)} />
                         </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-5">
                            <label className="col-form-label">
                                You will get Acucoin
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="value_coin"
                                onChange={(e) => handleChange(e)}
                                placeholder="25"

                            />
                        </div>
                        <div className="col-sm-5">
                            <label className="col-form-label">
                                Pay with Tether
                            </label>
                            <h1>
                            {resultCalc} <span style={{ fontSize: "20px" }}>USDT</span>
                            </h1>
                        </div>
                        <code className="highlighter-rouge 4b-2">
                                (TO AVOID LOSS PLEASE  TRANSFER  THE EXACT AMOUNT OF USDT)
                        </code>
                    </div>
                    <div className="form-group">
                        <span className="col-form-label">Deposit USDT:</span> <br />
                        TQD4G1tR26U9XMLiaMXwX51vQ3wczFNbCF{" "}
                        <span className="text-danger">TRC20</span> <br />
                        0x649C3eE058210c5f2A2B60145811Ca3a177aa09e{" "}
                        <span className="text-danger">ERC20</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        id="meuBotao"
                        onClick={inputValidated}

                    >
                        Buy Now
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default UsdtModal;
