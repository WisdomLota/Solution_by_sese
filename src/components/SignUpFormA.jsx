import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function SignUpFormA() {

    const schema = yup.object().shape({
        lastName: yup.string("Name must contain letters").required("Please enter your Last Name"),
        firstName: yup.string('Name must contain letters').required("Please enter your First Name"),
        emailAddress: yup.string()
        .required(" Please enter your email address")
        .email("Please enter a valid email"),
        mobileNumber: yup.string()
        .required('Please enter your mobile number')
        .matches(/^\d{11}$/, 'Mobile number must be exactly 11 digits'),
        dateOfBirth: yup.string().required(" Please enter your Date of Birth"),
        gender: yup.string().required("Please select your gender"),
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
    <div className="whole">

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
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" {...register('emailAddress')}/>
                    <p>{errors.emailAddress?.message}</p>
                </div>

                <div className="form-group">
                    <label for="phone">Mobile Number</label>
                    <input type="tel" name="phone" id="phone"   {...register('mobileNumber')}/>
                    <p>{errors.mobileNumber?.message}</p>
                </div>

                <div className="form-group">
                    <label for="dob">Date of Birth: </label>
                    <input type="date" name="dob" id="dob"    {...register('dateOfBirth')}/>
                    <p>{errors.dateOfBirth?.message}</p>
                </div>

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
 
export default SignUpFormA;