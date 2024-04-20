// You can make use of this for all your drop down selections

import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function GenderType() {

    const schema = yup.object().shape({
       
        gender: yup.string().required("Please select your gender"),
        
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
                    <label for="gender">Gender </label>
                    <select name="gender" id="gender"    {...register('gender')}>
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <p>{errors.gender?.message}</p>
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
 
export default GenderType;