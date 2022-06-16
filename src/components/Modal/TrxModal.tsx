import React, {useState, useEffect, ChangeEvent } from 'react'
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import axios from 'axios'
import swal from 'sweetalert';



interface Coin {
    symbol: string;
    current_price: number;
}

interface Inputs {
    trxToken: string;
}


type TrxModalProps = {
    show: boolean;
    handleClose: () => void;
};

const TrxModal = ({ show, handleClose }: TrxModalProps) => {
    const [money, setMoney] = useState<any>([])
    const [resultCalc, setResultCalc] = useState<number>()
    const [inputValue, setInputValue] = useState<string>("");
    const [inpute, setInpute] = useState<string>("");

    const fetch = async () =>  {
      const response =  await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const coins = response.data as Coin[]
      const filtercoins = coins.filter((coin:Coin) => coin.symbol === "usdt" || coin.symbol === "bnb" ||  coin.symbol === "ada" ||  coin.symbol === "doge" ||  coin.symbol === "trx" )           
      setMoney(filtercoins)

      const trxData = filtercoins?.find((coin) => coin.symbol === 'trx')
      setResultCalc(trxData?.current_price)
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
        
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('https://dash.acucoin.ao/api/trx', params, config)
        .then(response=> console.log('deu certo')).catch(err=>console.log(err))
       
        swal("Thank You!", "You aplication was sucessfully!", "success");
 
        
    }




    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const trxData = money?.find((coin:Coin) => coin.symbol === 'trx')

        const consttrx = trxData ? (0.21 / trxData.current_price) : 28;
        const convert = Number(consttrx)
        const numberInput = Number(e.target.value)
        const calcInput = Number((convert * numberInput).toFixed(3))


        setInputValue(e.target.value) 
        setResultCalc(calcInput)
}
  function inputValidated(e: any){
    e.preventDefault();
    if(inpute === "" || inputValue === ""){
        swal ( "Oops" ,  "Please fill in all fields!" ,  "error" )
    }else{
        if (inputValue <= "25") {
            swal ( "Oops" ,  "The amount must be greater than 250! or less than!" ,  "error" ) 
        }else{
            addApi(e);
            setInputValue("")
            setInpute("")
        }


    }
  }

  
   

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <h5 className="modal-title" id="exampleModalLabel">
                    Buy with TRX
                </h5>
            </Modal.Header>
            <form>
                <Modal.Body>
                    <div className="form-group">
                        <label className="col-form-label">
                            Enter your Acucoin receive address
                        </label> <br />
                        <code className="highlighter-rouge 4b-1">
                            (Make Sure It is a TRON /TRC10 ADDRESS)
                        </code>
                        <div className='form-group mt-3'>
                            <input
                                id="trx-token"
                                type="text"
                                className="form-control"
                                placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9"
                                onChange={(e) => setInpute(e.target.value)}
                            />
                         </div>
                        <div className="form-group mt-3">
                            <label  className="col-form-label">Email:</label>
                            <input type="Email" className="form-control"  placeholder="bob@gmail.com" />
                         </div>

                     
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4">
                            <label className="col-form-label">
                                You will get ACU
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="value_coin"
                                onChange={(e) => handleChange(e)}
                                placeholder="25"
                                

                            />
                        </div>
                        <div className="col-sm-6">
                            <label className="col-form-label">
                                Pay with Tronix
                            </label>
                            <h1>
                            {resultCalc}
                                <span style={{ fontSize: "20px" }}>TRX</span>
                            </h1>
                        </div>
                        <code className="highlighter-rouge 4b-2">
                                (TO AVOID LOSS PLEASE  TRANSFER  THE EXACT AMOUNT OF TRX)
                        </code>
                    </div>
                    <div className="form-group">
                        <span className="col-form-label">Deposit TRX:</span>
                        <span className="col-form-label">
                            TQD4G1tR26U9XMLiaMXwX51vQ3wczFNbCF
                        </span> <br />
                        <code className="highlighter-rouge 4b-2">
                            (TRANSFERRING ASSETS TO THE WRONG ADDRESS WILL RESULT IN LOSS OF FUNDS)
                        </code>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        id="modal-trx--submit"
                        onClick={inputValidated}

                    >
                        Buy Now
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default TrxModal;
