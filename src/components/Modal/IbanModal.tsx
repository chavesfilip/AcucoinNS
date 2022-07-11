
import { Modal } from "react-bootstrap";
import { ChangeEventHandler, useState, ChangeEvent } from "react";
import swal from 'sweetalert';
import axios from 'axios'


interface Inputs {
    ibanToken: string;
    ibanUserFullName: string;
    ibanNumber: number;
}


type IbanModalProps = {
    show: boolean;
    handleClose: () => void;
};
const paypalModal = ({ show, handleClose }: IbanModalProps) => {
    const [input, setInpute] = useState('')
    const [resultCalc, setResultCalc] = useState<number>()
    const [inputValue, setInputValue] = useState<string>("");

    const [image, setImage] = useState('')
    const [andress, setAndress] = useState<string>("");




   
    const onInputChange = (e: any) => {
        setImage(e.target.files[0])
    };
    function addApi(e: any) {
        e.preventDefault();
      
        const params = new FormData()
      
        params.append('iban', input)
        params.append('valor', inputValue)
        params.append('qtd', String(resultCalc))
        params.append('image', image)
      
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      
        axios.post('https://admin-acucoin.ao/api/iban', params, config)
          .then((res: any) => console.log(res))
          .catch((err: any) => console.log(err))
      
        swal("Thank You!", "You aplication was sucessfully!", "success");
        setInpute("")
        setInputValue("")

      }
    function handleChange(e: ChangeEvent<HTMLInputElement>) {

        const numberInput = Number(e.target.value)
        const calcInput = numberInput / 100;

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

                validationInputAdress()
                addApi(e);
                setInpute("")
    
                return;
            }
    
            swal ( "Oops" ,  "The amount must be greater than 25 or less than 20000!!!" ,  "error" ) 
            return;
        }
        
        swal ( "Oops" ,  "please fill in all fields!!!" ,  "error" )
    }

    function validationInputAdress(){
        if(input === ""){
            swal ( "Oops" ,  "please fill in all fields!!!" ,  "error" )
            return;
        }
    }

    
    return(
        <Modal show={show}  onHide={handleClose}>
             <Modal.Header closeButton>
                <h5 className="modal-title" id="exampleModalLabel">Buy with IBAN</h5>  
             </Modal.Header>  
            <form>
                 <Modal.Body>
                    <div className="form-group">
                        <label  className="col-form-label">Enter your Acucoin receive address </label> <br />
                        <code className="highlighter-rouge 4b-1">
                                (Make Sure It is a TRON /TRC10 ADDRESS)
                        </code>
                        <input type="text" className="form-control" placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9"
                         onChange={(e) => setInpute(e.target.value)}
                        />
                    </div>
                    
                    <div className="mb-3 mt-3">
                                <label  className="form-label">Proof</label>
                                <input className="form-control" type="file" id="formFile" onChange={onInputChange} accept="image/*,.png, .jpg"/>
                    </div>

                   



                     <div className="form-group">
                        <label  className="col-form-label">Deposit Slip</label>
                        <code className="highlighter-rouge 4b-2">
                                (send vai e-mail: acu.editora@gmail.com or whatssapp: +244 935396811)
                        </code>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-5">
                            <label  className="col-form-label"> Pay with kwanza</label>
                             <input type="number" className="form-control" id="value_coin"  placeholder="1000"  onChange={ (e) => handleChange(e) } />
                         </div>

                         <div className="col-sm-6">
                             <label className="col-form-label">You will get Acucoin</label>
                             <h1>
                             {resultCalc} <span style={{fontSize: '20px'}}>ACU</span>
                            </h1>
                         </div>
                    </div>

                    <div className="form-group">
                        <span className="col-form-label">Deposit IBAN:</span>
                        <br/>
                         AO06.0047.0000.2486.4257.1012.9
                        <br/>
                         Conta: <span style={{textTransform: 'uppercase'}}>Lavare-Comércio</span>
                    </div>
                 </Modal.Body>
                <Modal.Footer>
                        <button
                             onClick={inputValidated}
                             className="btn btn-primary"
                             id="meuBotao"
                             >
                            Buy Now
                        </button>
                </Modal.Footer>
             </form>
        </Modal>
    )
}
export default paypalModal
