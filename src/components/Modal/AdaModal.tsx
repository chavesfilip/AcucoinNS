import React, {useState, useEffect, ChangeEvent } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import axios from 'axios'
import api from '../../service';



interface Coin {
    symbol: string;
    current_price: number;
}
interface Inputs {
    adaToken: string;
}
interface backAda{
    nome: string;
    valor: number;
    qtd: number;
    


}

const validationPost = yup.object({
    adaToken: yup.string().required("please all fields"),
}) .required();

type AdaModalProps = {
    show: boolean;
    handleClose: () => void;
};

const adaModal = ({ show, handleClose }: AdaModalProps) => {
    const [money, setMoney] = useState<any>([])
    const [resultCalc, setResultCalc] = useState<number>()
    const [inpute, setInpute] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
    


    console.log(inpute)

    const fetch = async () =>  {
      const response =  await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const coins = response.data as Coin[]
      const filtercoins = coins.filter((coin:Coin) => coin.symbol === "usdt" || coin.symbol === "bnb" ||  coin.symbol === "ada" ||  coin.symbol === "doge" ||  coin.symbol === "trx" )           
      setMoney(filtercoins)

      const adaData = filtercoins?.find((coin) => coin.symbol === 'ada')
      setResultCalc(adaData?.current_price)
    }

    useEffect(() => {
      fetch()}, []
    )

function addApi() {

    const [show, setShow] = useState(true);

    const params = new URLSearchParams()

    params.append('nome', inpute)    
    params.append('valor', inputValue) 
    params.append('qtd', String(resultCalc))
    
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    
    axios.post('https://qqr.acucoin.ao/api/ada', params, config)
    .then(response=> console.log('deu certo')).catch(err=>console.log(err)) 
    
    
}


    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const adaData = money?.find((coin:Coin) => coin.symbol === 'ada')

        const constAda = adaData ? (0.021 / adaData.current_price) : 28;
        const numberInput = Number(e.target.value)
        const convert = Number(constAda.toFixed(3))
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
    return (
            <>
                
                <Modal show={show}  onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="exampleModalLabel">Buy with ADA</h5>  
                </Modal.Header>  
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <div className="form-group">
                            <label  
                                className="col-form-label">
                                Enter your Acucoin receive address
                            </label> <br />
                            <code className="highlighter-rouge 4b-1">
                                (Make Sure It is a TRON /TRC10 ADDRESS)
                            </code>
                            <code className="highlighter-rouge 4b-1">
                                (Make Sure It is a TRON /TRC10 ADDRESS)
                            </code>
                            <input type="text" 
                                    className="form-control"
                                    id="trx-token"
                                    placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9" 
                                    defaultValue="validation"   
                                    {...register("adaToken", 
                                    { required: true })} 
                                    onChange={(e) => setInpute(e.target.value)}


                                                                        
                            />
                            <p className="text-danger">
                                {errors.adaToken?.message}
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
                                        Pay with ADA
                                    </label>
                                    <h1>

                                    {resultCalc}

                                    <span style={{fontSize: '20px'}}>
                                        ADA
                                    </span>
                                    </h1>
                                </div>
                                <code className="highlighter-rouge 4b-2">
                                    (TO AVOID LOSS PLEASE  TRANSFER  THE EXACT AMOUNT OF ADA)
                                </code>
                        </div>

                        <div className="form-group">
                            <span className="col-form-label">Deposit ADA:</span>
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
            
            
            </>
            
         
    );
};

export default adaModal;