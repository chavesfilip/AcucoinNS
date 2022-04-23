
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import { ChangeEventHandler, useState, ChangeEvent } from "react";

interface Inputs {
    ibanToken: string;
    ibanUserFullName: string;
    ibanNumber: number;
}

const validationPost = yup.object().shape({
    ibanToken: yup.string().required("please all fields").max(50, "please only 50 characters allowed"),
    ibanUserFullName: yup.string().required("please all fields").max(50, "please only 50 characters allowed"),
    ibanNumber: yup.number().required('please only 50 characters allowed').positive("o campo deve ser positivo").integer("o campo deve ser inteiro")
}) .required();

type IbanModalProps = {
    show: boolean;
    handleClose: () => void;
};
const paypalModal = ({ show, handleClose }: IbanModalProps) => {
    const [value, setValue] = useState('')
    const [resultValue, setResultValue] = useState<number>(0)
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        const numberInput = Number(e.target.value)
        const calcInput = numberInput / 10;
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
                <h5 className="modal-title" id="exampleModalLabel">Buy with IBAN</h5>  
             </Modal.Header>  
            <form onSubmit={handleSubmit(onSubmit)}>
                 <Modal.Body>
                    <div className="form-group">
                        <label  className="col-form-label">Enter your Acucoin receive address <code className="highlighter-rouge 4b-2">(TRON / TRC10 TOKEN)</code></label>
                        <input type="text" className="form-control" placeholder="TDtGD9ydFTyrrqoa9xpsMGBFMn6DRDErU9" defaultValue="validation"  {...register("ibanToken", 
                                { required: true })}  />
                        <p className="text-danger">{errors.ibanToken?.message}</p>
                    </div>

                     <div className="form-group">
                        <label  className="col-form-label">Full Name</label>
                        <input type="text" className="form-control"  placeholder="Ex: Satoshi Nakamoto" defaultValue="validation"   {...register("ibanUserFullName",  { required: true })} />
                        <span className="text-danger">{errors.ibanUserFullName?.message}</span>
                    </div>

                    <div className="form-group">
                        <label  className="col-form-label">Phone Number</label>
                        <input type="text" className="form-control"  placeholder="930 000 000" defaultValue="validation"  {...register("ibanNumber", { required: true })} />
                        <span className="text-danger">{errors.ibanNumber?.message}</span>
                    </div>

                     <div className="form-group">
                        <label  className="col-form-label">Deposit Slip</label>
                        <input type="file" className="form-control"  accept="image/* application/pdf"/>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-5">
                            <label  className="col-form-label"> Pay with kwanza</label>
                             <input type="number" className="form-control" id="value_coin"  min="1000"  onChange={ (e) => handleChange(e) } />
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
