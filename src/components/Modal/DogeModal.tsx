import { Modal } from "react-bootstrap";
import {useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import swal from 'sweetalert';



interface Inputs {
    dogeToken: string;
}
interface Coin {
    symbol: string;
    current_price: number;
}



type DogeModalProps = {
    show: boolean;
    handleClose: () => void;
};
const dogeModal = ({ show, handleClose }: DogeModalProps) => {
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

      const dogeData = filtercoins?.find((coin) => coin.symbol === 'doge')
      setResultCalc(dogeData?.current_price)
    }

    useEffect(() => {
      fetch()}, []
    )
    function addApi(e:any) {
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
        
        axios.post('https://admin-acucoin.ao/api/doge', params, config)
        .then(response=> console.log('deu certo')).catch(err=>console.log(err)) 
        swal("Thank You!", "You aplication was sucessfully!", "success");
        
        setInputValue("")
        setInpute("")

        
    }



    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const dogeData = money?.find((coin:Coin) => coin.symbol === 'doge')
        const constdoge = dogeData ? (0.21 / dogeData.current_price) : 28;
        const convert = Number(constdoge)
        const numberInput = Number(e.target.value)
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


    
    return(
        <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
           <h5 className="modal-title" id="exampleModalLabel">Buy with DOGE</h5>  
        </Modal.Header>  
       <form>
            <Modal.Body>
               <div className="form-group">
                    <label  
                       className="col-form-label">
                       Enter your Acucoin receive address
                   </label> <br/>
                   <code className="highlighter-rouge 4b-1">
                            (Make Sure It is a TRON /TRC10 ADDRESS)
                    </code>
                   <input type="text" 
                           className="form-control"
                           id="trx-token"
                           placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9"  
                           onChange={(e) => setInpute(e.target.value)}

                                                               
                   />
                   <div className="form-group mt-3">
                            <label  className="col-form-label">Sender Andress:</label>
                            <input type="textnpm run dev " className="form-control"  placeholder="bob@gmail.com" onChange={(e) => setAndress(e.target.value)} />
                    </div>
                  
               </div>

               <div className="form-group row">
                       <div className="col-sm-5">
                           <label  
                               className="col-form-label">
                                   You will get Acucoin 
                           </label>
                           <input type="number" 
                               className="form-control" 
                               id="value_coin" 
                               onChange={(e) => handleChange(e)}
                               placeholder="25"

                                                                  
                            />
                       </div>

                       <div className="col-sm-6">
                           <label className="col-form-label"
                               >
                               Pay with DOGE
                           </label>
                           <h1>
                           {resultCalc} 
                           <span style={{fontSize: '20px'}}>
                               DOGE
                           </span>
                           </h1>
                       </div>
                       <code className="highlighter-rouge 4b-2">
                                (TO AVOID LOSS PLEASE  TRANSFER  THE EXACT AMOUNT OF DOGE)
                        </code>

               </div>

               <div className="form-group">
                   <span className="col-form-label">Deposit DOGE:</span>
                   <br />
                   bnb1u4r33vrpcz3lu9dncqcmtl2eg6gylm55cukdty
               </div>
               <code className="highlighter-rouge 4b-2">
                            (TRANSFERRING ASSETS TO THE WRONG ADDRESS WILL RESULT IN LOSS OF FUNDS)
                </code>
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
export default dogeModal;