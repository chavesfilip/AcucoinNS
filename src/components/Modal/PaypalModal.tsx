
import { Modal } from "react-bootstrap";
import { useState, ChangeEvent } from "react";
import swal from 'sweetalert';
import axios from 'axios'


interface Inputs {
    paypalToken: string;
}



type PaypalModalProps = {
    show: boolean;
    handleClose: () => void;
};
const paypalModal = ({ show, handleClose }: PaypalModalProps) => {
    const [value, setValue] = useState('')
    const [resultValue, setResultValue] = useState<number>(0)
    const [inpute, setInpute] = useState<string>("");
   
   
    function addApi(e:any) {
        e.preventDefault();
        const params = new URLSearchParams()
    
        params.append('nome', inpute)    
        params.append('valor', value) 
        params.append('qtd', String(resultValue))
        
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('https://admin-acucoin.ao/api/ada', params, config)
        .then(response=> console.log('deu certo')).catch(err=>console.log(err))
        
        swal("Thank You!", "You aplication was sucessfully!", "success");
 
        
    }
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        const numberInput = Number(e.target.value)
        const calcInput = numberInput * 0.21;
        
        setResultValue(calcInput)


        
    }
    function inputValidated(e: any){
        e.preventDefault();
        if(inpute === "" || value === ""){
            swal ( "Oops" ,  "please fill in all fields!!!" ,  "error" )
        }else{
            if (value <= "25") {
                swal ( "Oops" ,  "The amount must be greater than 250 or less than 20000!!!" ,  "error" ) 
            }else{
                addApi(e);
                setValue("")
                setInpute("")
            }
    
    
        }
      }
    

    
    return(
        <Modal show={show}  onHide={handleClose}>
             <Modal.Header closeButton>
                <h5 className="modal-title" id="exampleModalLabel">Buy with PAYPAL</h5>  
             </Modal.Header>  
            <form >
                 <Modal.Body>
                    <div className="form-group">
                         <label  
                            className="col-form-label">
                            Enter your Acucoin receive address
                        </label>
                        <br/>
                        <code className="highlighter-rouge 4b-1">
                                (Make Sure It is a TRON /TRC10 ADDRESS)
                            </code>
                        <input type="text" 
                                className="form-control"
                                id="trx-token"
                                placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9"  
                                onChange={(e) => setInpute(e.target.value)}

                                                                    
                        />
                    </div>

                    <div className="form-group row">
                            <div className="col-sm-5">
                                    <label className="col-form-label">You will get ACU:</label>
                                    <input type="number" className="form-control" id="value_coin" placeholder="25"   onChange={ (e) => handleChange(e)} />
                            </div>
                            <div className="col-sm-5">
                                 <label  
                                    className="col-form-label">
                                        Pay with Dollar
                                </label>
                                <h1>
                                {resultValue} 
                                <span style={{fontSize: '20px'}}>
                                    USD
                                </span>
                                </h1>
                            
                            </div>
                            <code className="highlighter-rouge 4b-2">
                                (TO AVOID LOSS PLEASE  TRANSFER  THE EXACT AMOUNT OF DOLLAR)
                            </code>
                            

                    </div>

                    <div className="form-group">
                        <span className="col-form-label">Transfer on PayPal:</span>
                        <br />
                        acu-editora@gmail.com
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
    )
}
export default paypalModal
