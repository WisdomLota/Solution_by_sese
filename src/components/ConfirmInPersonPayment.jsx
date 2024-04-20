import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function ConfirmInPersonPayment() {
    return (
        <>
        <div class="big">

        <div class="text">
            <h2>IN PERSON PAYMENT</h2>
        </div>

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>We just sent all the details regarding the in person payment to your email address</p>
            <div class="confirmation-btns">
                <button>GO TO MAIL</button>
                <button>OK</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default ConfirmInPersonPayment;