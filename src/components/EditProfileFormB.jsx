import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";
import uploadSymbol from "../assets/uploadSymbol.png"

function EditProfileFormB() {
    
    const schema = yup.object().shape({
       
        passportNumber: yup.string().required("Please enter your Passport Number"),
        idCardImg: yup
        .mixed()
        .test('is-valid-document', 'Please upload your ID', (value) => {
          // Custom validation logic to check if a document is selected
          return !!value?.length;
        }),

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
            <h2>EDIT PROFILE</h2>
        </div>
        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="passport-num">Passport Number: </label>
                    <input type="text" name="passport-num" id="passport-num" {...register('passportNumber')}/>
                    <p>{errors.passportNumber?.message}</p>
                </div>
                
                <div class="form-group">
                    <label for="id-image">ID Card Image: </label>
                    <div>
                        <div class="image-symbol">
                            <input type="file" id="id-image" name="id-image" accept="image*/" {...register('idCardImg')}/><br/>
                            <label for="id-image" class="custom-id-image">
                                <span class="upload-symbol"><img src={uploadSymbol} alt="Upload Symbol" /></span>
                                <span class="upload-text">Upload the image of a valid ID Card (this can<br/> be a passport, drivers license, NIN, National ID card)</span>
                                <span class="upload-text"><b>Maximum size of 2MB</b></span>
                            </label>         
                    </div>
                </div>
                    <p>{errors.idCardImg?.message}</p>
                </div>
                           
                <div class="btns">
                    <button>DONE</button>
                    <button>NEXT</button>
                </div>
            </form>
        </div>
    </div>
    </>
    )
}

export default EditProfileFormB;