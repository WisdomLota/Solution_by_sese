import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";

// const schema = yup.object().shape({
//   document: yup
//     .mixed()
//     .required('Please upload a document')
//     .test('is-valid-document', 'Invalid document type', (value) => {
//       // Custom validation logic to check if the uploaded document meets your criteria
//       if (!value) return false; // Ensure value exists
//       const allowedTypes = ['image/jpeg', 'image/png']; // Example: Allowed file types
//       return allowedTypes.includes(value[0].type);
//     }),
// });

const schema = yup.object().shape({
    document: yup
      .mixed()
      .test('is-valid-document', 'Please upload a document', (value) => {
        // Custom validation logic to check if a document is selected
        return !!value?.length;
      }),
  });

function SignUpTester() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <form id = "registration-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
            <label for="id-card-img">ID Card Image: </label>
                <div class="id-talk">
                    <div class="image-symbol">
                    <input type="file" {...register('document')} /><br/>
                        <label for="id-card-img" class="custom-id-image">
                            <span class="upload-symbol">&#8686;</span>
                            <span class="upload-text">Upload the image of a valid ID Card (this can<br/> be a passport, drivers license, NIN, National ID card)</span>
                            <span class="upload-text"><b>Maximum size of 2MB</b></span>
                        </label>
                    </div>
                    {errors.document && <p>{errors.document.message}</p>}
                    <button type="submit">Submit</button>
                </div>
        {/* <input type="file" {...register('document')} />
        {errors.document && <p>{errors.document.message}</p>}
        <button type="submit">Submit</button> */}
      </div>
    </form>
  );
}

export default SignUpTester;
