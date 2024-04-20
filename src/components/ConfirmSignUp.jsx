import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function ConfirmSignUp() {
    return (
        <>
        <div class="big">

        <div class="text">
            <h2>SIGN UP</h2>
        </div>

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>We just sent an email to confirm your sign up</p>
            <div class="confirmation-btns">
                <button>OK</button>
                <button>GO TO MAIL</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default ConfirmSignUp;