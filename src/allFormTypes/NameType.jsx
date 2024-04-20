import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function NameType() {

    const schema = yup.object().shape({
        lastName: yup.string("Name must contain letters").required("Please enter your Last Name"),
        firstName: yup.string('Name must contain letters').required("Please enter your First Name"),
        
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
                    <label for="last-name">Last Name: </label>
                    <input type="text" name="last-name" id="last-name"  {...register('lastName')}/>
                    <p>{errors.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <label for="first-name">First Name: </label>
                    <input type="text" name="first-name" id="first-name"   {...register('firstName')}/>
                    <p>{errors.firstName?.message}</p>
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
 
export default NameType;