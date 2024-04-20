import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";


function PassportNumType() {

    const schema = yup.object().shape({
        passportNumber: yup.string().required("Please enter your Passport Number"),
        
    });

    const  { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return ( 
        <>
        <div class="whole">
        <div className="form-header">
            <h2>SIGN UP</h2>
        </div>
        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="passport-num">Passport Number: </label>
                    <input type="text" name="passport-num" id="passport-num" {...register('passportNumber')}/>
                    <p>{errors.passportNumber?.message}</p>
                </div>

                
                <div className="form-group">
                <button type='submit'>NEXT</button>
                </div>
                
            </form>
        </div>
    </div>
        </>
     )
}
 
export default PassportNumType;