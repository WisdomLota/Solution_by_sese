import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function MakePaymentsInPerson() {
    
    const schema = yup.object().shape({
        fullName: yup.string("Name must contain letters").required("Please enter your full name"),
        amountInWords: yup.string("").required("Please enter the amount in words"),
        emailAddress: yup.string()
        .required(" Please enter your email address")
        .email("Please enter a valid email"),
        mobileNumber: yup.string()
        .required('Please enter your mobile number')
        .matches(/^\d{11}$/, 'Mobile number must be exactly 11 digits'),
        payChoice: yup.string().required("Please select the payment option you prefer"),
        payDate: yup.string().required("Please select the date you would like to make payments"),
        payTime: yup.string().required("Please select the time you would like to make payments"),
        amountInNumbers: yup.number("")
        .required()
        .positive("Amount cannot be negative")
        .typeError("Please enter amount in Numbers"),


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
            <h2>IN PERSON PAYMENT</h2>
        </div>
        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="fullName">Full Name: </label>
                    <input type="text" name="fullName" id="fullName" {...register('fullName')}/>
                    <p>{errors.fullName?.message}</p>
                </div>
                <div className="form-group">
                    <label for="phone">Mobile Number</label>
                    <input type="tel" name="phone" id="phone"   {...register('mobileNumber')}/>
                    <p>{errors.mobileNumber?.message}</p>
                </div>
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" {...register('emailAddress')}/>
                    <p>{errors.emailAddress?.message}</p>
                </div>

                <div className="form-group">
                    <label for="payDate">What date would you like to pay? </label>
                    <input type="date" name="payDate" id="payDate"    {...register('payDate')}/>
                    <p>{errors.payDate?.message}</p>
                </div>
                <div className="form-group">
                    <label for="payTime">What time would you like to pay? </label>
                    <input type="time" name="payTime" id="payTime"    {...register('payTime')}/>
                    <p>{errors.payTime?.message}</p>
                </div>
                <div className="form-group">
                    <label for="amountInWords">Amount in Words: </label>
                    <input type="text" name="amountInWords" id="amountInWords" {...register('amountInWords')}/>
                    <p>{errors.amountInWords?.message}</p>
                </div>
                <div className="form-group">
                    <label for="amountInNumbers">Amount in Numbers: </label>
                    <input type="number" name="amountInNumbers" id="amountInNumbers"   {...register('amountInNumbers')}/>
                    <p>{errors.amountInNumbers?.message}</p>
                </div>
                <div className="form-group">
                    <label for="payChoice">How would you like to pay?</label>
                    <select name="payChoice" id="payChoice" {...register('payChoice')}>
                        <option value="">Payment Options</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Card">Card</option>
                    </select>
                    <p>{errors.payChoice?.message}</p>
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

export default MakePaymentsInPerson;