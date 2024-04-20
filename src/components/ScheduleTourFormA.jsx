import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function ScheduleTourFormA() {
    
    const schema = yup.object().shape({
        fullName: yup.string("Name must contain letters").required("Please enter your full name"),
        emailAddress: yup.string()
        .required(" Please enter your email address")
        .email("Please enter a valid email"),
        mobileNumber: yup.string()
        .required('Please enter your mobile number')
        .matches(/^\d{11}$/, 'Mobile number must be exactly 11 digits'),
        tourChoice: yup.string().required("Please select the apartment you would like to tour"),
        tourDate: yup.string().required("Please select the date you would like to take the tour"),
        tourTime: yup.string().required("Please select the time you would like to take the tour"),



    })

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
            <h2>SCHEDULE A TOUR</h2>
        </div>
        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="tourChoice">What apartment would you like to tour? </label>
                    <select name="tourChoice" id="tourChoice"    {...register('tourChoice')}>
                        <option value="">Select apartment to tour</option>
                        <option value="4 Bedroom Terrace House">4 Bedroom Terrace House</option>
                        <option value="7 Bedroom Terrace House">7 Bedroom Terrace House</option>
                    </select>
                    <p>{errors.tourChoice?.message}</p>
                </div>
                <div className="form-group">
                    <label for="tourDate">What date would you like to take the tour? </label>
                    <input type="date" name="tourDate" id="tourDate"    {...register('tourDate')}/>
                    <p>{errors.tourDate?.message}</p>
                </div>
                <div className="form-group">
                    <label for="tourTime">What time would you like to take the tour? </label>
                    <input type="time" name="tourTime" id="tourTime"    {...register('tourTime')}/>
                    <p>{errors.tourTime?.message}</p>
                </div>
                <div className="form-group">
                    <label for="fullName">Full Name: </label>
                    <input type="text" name="fullName" id="fullName" {...register('fullName')}/>
                    <p>{errors.fullName?.message}</p>
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
                <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
    </>
    )
}

export default ScheduleTourFormA;