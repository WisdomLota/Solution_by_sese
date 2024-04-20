import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";
import uploadSymbol from "../assets/uploadSymbol.png"

function SignUpFormB() {

    const schema = yup.object().shape({
        passportNumber: yup.string().required("Please enter your Passport Number"),
        idCardImg: yup
        .mixed()
        .test('is-valid-document', 'Please upload your ID', (value) => {
          // Custom validation logic to check if a document is selected
          return !!value?.length;
        }),
        proofOfResidence: yup
        .mixed()
        .test('is-valid-document', 'Please upload your Proof of Residence', (value) => {
          // Custom validation logic to check if a document is selected
          return !!value?.length;
        }),
        signatureImg: yup
        .mixed()
        .test('is-valid-document', 'Please upload the Image of your Signature', (value) => {
          // Custom validation logic to check if a document is selected
          return !!value?.length;
        }), 
        nationality: yup.string().required('Please select your nationality'),
    });

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
            <h2>SIGN UP</h2>
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

                <div className="form-group">
                    <label for="nationality">Nationality: </label>
                    <select name="nationality" id="nationality" {...register('nationality')}>
                        <option value="">Select Nationality</option>
                        <option value="ngn">Nigeria</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                    </select>
                    <p>{errors.nationality?.message}</p>
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

                <div class="form-group">
                    <label for="signature">Signature Image: </label>
                    <div>
                        <div class="image-symbol">
                            <input type="file" id="signature" name="signature" accept="image*/" {...register('signatureImg')}/><br/>
                            <label for="signature" class="custom-id-image">
                                <span class="upload-symbol"><img src={uploadSymbol} alt="Upload Symbol" /></span>
                                <span class="upload-text">Upload a handwritten image of your signature </span>
                                <span class="upload-text"><b>Maximum size of 2MB</b></span>
                            </label>         
                    </div>
                </div>
                    <p>{errors.signatureImg?.message}</p>
                </div>
                

                
                <div className="form-group">
                <button type='submit'>NEXT</button>
                </div>
                
            </form>
        </div>
    </div>
        </>
     )
}
 
export default SignUpFormB;