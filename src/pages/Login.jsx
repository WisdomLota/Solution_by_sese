import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function Login() {

    const schema = yup.object().shape({
        emailAddress: yup.string()
        .required(" Please enter your email address")
        .email("Please enter a valid email"),
        password : yup.string()
        .required("Please enter your password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/,
            'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),

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
            <h2>LOGIN</h2>
        </div>
        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email"  {...register('emailAddress')}/>
                    <p>{errors.emailAddress?.message}</p>
                </div>
                <div className="form-group">
                    <label for="password">Password: </label>
                    <input type="password" name="password" id="password" {...register('password')}/>
                    <p>{errors.password?.message}</p>
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
 
export default Login;