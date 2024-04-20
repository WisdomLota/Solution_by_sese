import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function ConfirmTour() {
    return (
        <>
        <div class="big">

        <div class="text">
            <h2>SCHEDULE A TOUR</h2>
        </div>

        <div class="top">
            <img src={AKHDesign} alt="AKH Design" />
        </div>

        <div class="bottom">
            <p>How would you like to  take the tour?</p>
            <div class="confirmation-btns">
                <button>I WOULD LIKE  TO GO IN PERSON</button>
                <button>I WOULD LIKE TO SEND A PROXY</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default ConfirmTour;