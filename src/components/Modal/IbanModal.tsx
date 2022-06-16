
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
    const [value, setValue] = useState('')
    const [input, setInpute] = useState('')
    const [email, setEmail] = useState('')

    const [resultValue, setResultValue] = useState<number>(0)
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);

        const numberInput = Number(e.target.value)
        const calcInput = numberInput / 100;
        setResultValue(calcInput)

        
    }
    function addApi(e:any) {
        e.preventDefault();

        const params = new URLSearchParams()
    
      //  params.append('endress', inpute)    
       // params.append('valor', inputValue) 
       // params.append('qtd', String(resultCalc))
        
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('https://dash.acucoin.ao/api/iban', params, config)
        .then(response=> console.log('deu certo')).catch(err=>console.log(err))
        
        swal("Thank You!", "You aplication was sucessfully!", "success");
        
        
    }
    function inputValidated(e: any){
        e.preventDefault();
        if(value === "" || input === "" || email === ""){
            swal ( "Oops" ,  "please fill in all fields!!!" ,  "error" )
        }else{
            if (value <= "25") {
                swal ( "Oops" ,  "The amount must be greater than 250 or less than 20000!!" ,  "error" ) 
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

                     <div className="form-group">
                        <label  className="col-form-label">Email</label>
                        <input type="email" className="form-control"  placeholder="bob@gmail.com" 
                                onChange={(e) => setEmail(e.target.value)}

                        />
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
                             {resultValue} <span style={{fontSize: '20px'}}>ACU</span>
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
