import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function SecurityQuestion() {

    const schema = yup.object().shape({
        securityQuestion: yup.string().required("Please select security question"),
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
                
                <div class="form-group">
                    <label for="security-question">Security Question: </label>
                    <select name="security-question" id="security-question" {...register('securityQuestion')}>
                        <option value="">Select a Security Question</option>
                        <option value="pet">What is the name of your first pet?</option>
                        <option value="school">What is the name of your primary school?</option>
                        <option value="city">What city were you born in?</option>
                    </select>
                    <p>{errors.securityQuestion?.message}</p>
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
 
export default SecurityQuestion;