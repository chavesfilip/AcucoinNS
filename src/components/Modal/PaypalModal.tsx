import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import { useState, ChangeEvent } from "react";

interface Inputs {
    paypalToken: string;
}

const validationPost = yup.object({
    paypalToken: yup.string().required("por favor preencha todos os campos"),
}) .required();

type PaypalModalProps = {
    show: boolean;
    handleClose: () => void;
};
const paypalModal = ({ show, handleClose }: PaypalModalProps) => {
    const [value, setValue] = useState('')
    const [resultValue, setResultValue] = useState<number>(0)
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        const numberInput = Number(e.target.value)
        const calcInput = numberInput * 0.21;
        setResultValue(calcInput)

        
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
                <h5 className="modal-title" id="exampleModalLabel">Buy with PAYPAL</h5>  
             </Modal.Header>  
            <form onSubmit={handleSubmit(onSubmit)}>
                 <Modal.Body>
                    <div className="form-group">
                         <label  
                            className="col-form-label">
                            Enter your Acucoin receive address
                        </label>
                         <code 
                            className="highlighter-rouge 4b-2">
                            (TRON / TRC10 TOKEN)
                        </code>
                        <input type="text" 
                                className="form-control"
                                id="trx-token"
                                placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9" 
                                defaultValue="validation"   
                                {...register("paypalToken", 
                                { required: true })} 
                                                                    
                        />
                        <p className="text-danger">
                            {errors.paypalToken?.message}
                        </p>
                    </div>

                    <div className="form-group row">
                            <div className="col-sm-5">
                                    <label className="col-form-label">Pay with PAYPAL:</label>
                                    <input type="number" className="form-control" id="value_coin"   onChange={ (e) => handleChange(e)} />
                            </div>
                                <label  
                                    className="col-form-label">
                                        You will get Paypal
                                </label>
                                <h1>
                                {resultValue} 
                                <span style={{fontSize: '20px'}}>
                                    ADA
                                </span>
                                </h1>
                            
                            <code className="highlighter-rouge 4b-2">
                                (TO AVOID LOSS PLEASE  TRANSFER  THE EXACT AMOUNT OF ADA)
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
                             >
                            Buy Now
                        </button>
                </Modal.Footer>
             </form>
        </Modal>
    )
}
export default paypalModal