import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function SignUpFormC() {

    const schema = yup.object().shape({
        password : yup.string()
        .required("Please enter your password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/,
            'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
        confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Passwords do not match")
        .required("Please confirm your password"),
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
                
                <div className="form-group">
                    <label for="password">Password: </label>
                    <input type="password" name="password" id="password" {...register('password')}/>
                    <p>{errors.password?.message}</p>
                </div>
                <div className="form-group">
                    <label for="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" {...register('confirmPassword')}/>
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                
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
 
export default SignUpFormC;