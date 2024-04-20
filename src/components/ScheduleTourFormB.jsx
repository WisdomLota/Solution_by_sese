import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function ScheduleTourFormB() {
    
    const schema = yup.object().shape({
        proxyFullName: yup.string("Name must contain letters").required("Please enter your Proxy's full name"),
        proxyEmailAddress: yup.string()
        .required(" Please enter your Proxy's email address")
        .email("Please enter a valid email"),
        proxyMobileNumber: yup.string()
        .required("Please enter your Proxy's mobile number")
        .matches(/^\d{11}$/, 'Mobile number must be exactly 11 digits'),
        proxyTourChoice: yup.string().required("Please select the apartment your proxy would like to tour"),
        proxyTourDate: yup.string().required("Please select the date your proxy would like to take the tour"),
        proxyTourTime: yup.string().required("Please select the time your proxy would like to take the tour"),



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
                    <label for="proxyTourChoice">What apartment your proxy like to tour? </label>
                    <select name="proxyTourChoice" id="proxyTourChoice"    {...register('proxyTourChoice')}>
                        <option value="">Select apartment to tour</option>
                        <option value="4 Bedroom Terrace House">4 Bedroom Terrace House</option>
                        <option value="7 Bedroom Terrace House">7 Bedroom Terrace House</option>
                    </select>
                    <p>{errors.proxyTourChoice?.message}</p>
                </div>
                <div className="form-group">
                    <label for="proxyTourDate">What date would you like to take the tour? </label>
                    <input type="date" name="proxyTourDate" id="proxyTourDate"    {...register('proxyTourDate')}/>
                    <p>{errors.proxyTourDate?.message}</p>
                </div>
                <div className="form-group">
                    <label for="proxyTourTime">What time would you like to take the tour? </label>
                    <input type="time" name="proxyTourTime" id="proxyTourTime"    {...register('proxyTourTime')}/>
                    <p>{errors.proxyTourTime?.message}</p>
                </div>
                <div className="form-group">
                    <label for="proxyFullName">Full Name of your Proxy: </label>
                    <input type="text" name="proxyFullName" id="proxyFullName" {...register('proxyFullName')}/>
                    <p>{errors.proxyFullName?.message}</p>
                </div>
                <div className="form-group">
                    <label for="proxyPhone">Mobile Number of your Proxy: </label>
                    <input type="tel" name="proxyPhone" id="proxyPhone"   {...register('proxyMobileNumber')}/>
                    <p>{errors.proxyMobileNumber?.message}</p>
                </div>
                <div className="form-group">
                    <label for="proxyEmail">Email Address of your Proxy: </label>
                    <input type="email" name="proxyEmail" id="proxyEmail" {...register('proxyEmailAddress')}/>
                    <p>{errors.proxyEmailAddress?.message}</p>
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

export default ScheduleTourFormB;