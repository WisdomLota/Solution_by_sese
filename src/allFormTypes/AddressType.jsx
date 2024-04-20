import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function AddressType() {

    const schema = yup.object().shape({
        
        address: yup.string().required("Please enter your address").min(15),
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
                    <label for="address">Residential Address: </label>
                    <textarea name="address" id="address" cols="30" rows="5"    {...register('address')} />
                    <p>{errors.address?.message}</p>
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
 
export default AddressType;