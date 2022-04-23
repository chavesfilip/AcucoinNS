import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import React, {useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'


interface Inputs {
    dogeToken: string;
}
interface Coin {
    symbol: string;
    current_price: number;
}

const validationPost = yup.object({
    dogeToken: yup.string().required("please all fields"),
}) .required();

type DogeModalProps = {
    show: boolean;
    handleClose: () => void;
};
const dogeModal = ({ show, handleClose }: DogeModalProps) => {
    const [money, setMoney] = useState<any>([])
    const [resultCalc, setResultCalc] = useState<number>()
    const [inputValue, setInputValue] = useState<string>("");
    const [inpute, setInpute] = useState<string>("");

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
    function addApi() {
        const params = new URLSearchParams()
    
        params.append('nome', inpute)    
        params.append('valor', inputValue) 
        params.append('qtd', String(resultCalc))
        
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('https://qqr.acucoin.ao/api/doge', params, config)
        .then(response=> console.log('deu certo')).catch(err=>console.log(err)) 
        
    }



    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const dogeData = money?.find((coin:Coin) => coin.symbol === 'doge')
        const constdoge = dogeData ? (0.021 / dogeData.current_price) : 28;
        const convert = Number(constdoge.toFixed(3))
        const numberInput = Number(e.target.value)
        const calcInput = convert * numberInput;
        setInputValue(e.target.value)
        setResultCalc(calcInput)
}
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(validationPost),
    });

    const onSubmit = (data: Inputs) => {
        console.log(data);
    };
    return(
        <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
           <h5 className="modal-title" id="exampleModalLabel">Buy with DOGE</h5>  
        </Modal.Header>  
       <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
               <div className="form-group">
                    <label  
                       className="col-form-label">
                       Enter your Acucoin receive address
                   </label>
                   <code className="highlighter-rouge 4b-1">
                            (Make Sure It is a TRON /TRC10 ADDRESS)
                    </code>
                   <input type="text" 
                           className="form-control"
                           id="trx-token"
                           placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9" 
                           defaultValue="validation"   
                           {...register("dogeToken", 
                           { required: true })} 
                           onChange={(e) => setInpute(e.target.value)}

                                                               
                   />
                   <p className="text-danger">
                       {errors.dogeToken?.message}
                   </p>
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
                                (TO AVOID LOSS PLEASE  TRANSFER  THE EXACT AMOUNT OF doge)
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
                        onClick={() => addApi()}
                        >
                       Buy Now
                   </button>
           </Modal.Footer>
        </form>
   </Modal>
    );
};
export default dogeModal;