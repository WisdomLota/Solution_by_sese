import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function Congrats() {
    return (
        <>
        <div class="big">

        <div class="text">
            <h2>HOUSE PURCHASE</h2>
        </div>

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>CONGRATULATIONS ON YOUR PROPERTY PURCHASE</p>
            <div class="confirmation-btns">
                <button>PROCEED</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default Congrats;