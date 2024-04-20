import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";

function ConfirmTourDetails() {
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
            <p>We just sent all the details regarding the tour to the email address specified in the form </p>
            <div class="confirmation-btns">
                <button>GO TO MAIL</button>
                <button>OK</button>
            </div>
        </div>
        
    </div>
        </>
    )
}

export default ConfirmTourDetails;