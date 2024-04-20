import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function TimeType() {
    
    const schema = yup.object().shape({

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
                    <label for="proxyTourTime">What time would you like to take the tour? </label>
                    <input type="time" name="proxyTourTime" id="proxyTourTime"    {...register('proxyTourTime')}/>
                    <p>{errors.proxyTourTime?.message}</p>
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

export default TimeType;