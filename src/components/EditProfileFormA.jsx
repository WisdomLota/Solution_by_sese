import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import '../styles/Form.css';
import AKHDesign from "../assets/AKH-Design.png";
import uploadSymbol from "../assets/uploadSymbol.png"

function EditProfileFormA() {
    
    const schema = yup.object().shape({
       
        emailAddress: yup.string()
        .required(" Please enter your email address")
        .email("Please enter a valid email"),
        mobileNumber: yup.string()
        .required('Please enter your mobile number')
        .matches(/^\d{11}$/, 'Mobile number must be exactly 11 digits'),
        address: yup.string().required("Please enter your address").min(15),
        proofOfResidence: yup
        .mixed()
        .test('is-valid-document', 'Please upload your Proof of Residence', (value) => {
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
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" {...register('emailAddress')}/>
                    <p>{errors.emailAddress?.message}</p>
                </div>
                <div className="form-group">
                    <label for="phone">Mobile Number</label>
                    <input type="tel" name="phone" id="phone"   {...register('mobileNumber')}/>
                    <p>{errors.mobileNumber?.message}</p>
                </div>
                <div className="form-group">
                    <label for="address">Residential Address: </label>
                    <textarea name="address" id="address" cols="30" rows="5"    {...register('address')} />
                    <p>{errors.address?.message}</p>
                </div>
                <div class="form-group">
                    <label for="POR">Proof of Residence: </label>
                    <div>
                        <div class="image-symbol">
                            <input type="file" id="POR" name="POR" accept="image*/" {...register('proofOfResidence')}/><br/>
                            <label for="POR" class="custom-id-image">
                                <span class="upload-symbol"><img src={uploadSymbol} alt="Upload Symbol" /></span>
                                <span class="upload-text">Upload proof of residence (this can<br/> be water bill, electricity bill or any other document or image with your address)</span>
                                <span class="upload-text"><b>Maximum size of 2MB</b></span>
                            </label>         
                    </div>
                </div>
                    <p>{errors.proofOfResidence?.message}</p>
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

export default EditProfileFormA;