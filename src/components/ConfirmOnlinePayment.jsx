import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function ConfirmOnlinePayment() {
    return (
        <>
        <div class="big">

        <div class="text">
            <h2>ONLINE PAYMENT</h2>
        </div>

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>The next page is the online payment page, would you like to proceed?</p>
            <div class="confirmation-btns">
                <button>PROCEED</button>
                <button>GO BACK</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default ConfirmOnlinePayment;