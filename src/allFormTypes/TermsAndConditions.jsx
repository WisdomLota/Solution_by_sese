import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function TermsAndConditions() {

    const schema = yup.object().shape({
        // I have not yet beeen able to do the validation for the terms and conditions
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

                <div class="form-group" id="terms-conditions">
                    <label for="accept-terms" class="accept-terms">
                        <input type="checkbox" id="accept-terms" name="accept-terms"/>
                        <span class="check-mark"></span> 
                        <span class="terms-text">By checking this box you accept all of
                        our terms and conditions and privacy
                        policy (Please read the <b>terms and conditions</b> and <b>privacy policy</b> before checking the box)</span>
                    </label>
                </div>

                <div className="form-group">
                <button type='submit'>SUBMIT</button>
                </div>
                
            </form>
        </div>
    </div>
        </>
     )
}
 
export default TermsAndConditions;