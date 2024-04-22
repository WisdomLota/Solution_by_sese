// import React from "react";
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from "@hookform/resolvers/yup";
// import "../styles/Form.css";

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

// const schema = yup.object().shape({
//     document: yup
//       .mixed()
//       .test('is-valid-document', 'Please upload a document', (value) => {
        // Custom validation logic to check if a document is selected
//         return !!value?.length;
//       }),
//   });

// function SignUpTester() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema)
//   });

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission
//   };

//   return (
//     <form id = "registration-form" onSubmit={handleSubmit(onSubmit)}>
//       <div className="form-group">
//             <label for="id-card-img">ID Card Image: </label>
//                 <div class="id-talk">
//                     <div class="image-symbol">
//                     <input type="file" {...register('document')} /><br/>
//                         <label for="id-card-img" class="custom-id-image">
//                             <span class="upload-symbol">&#8686;</span>
//                             <span class="upload-text">Upload the image of a valid ID Card (this can<br/> be a passport, drivers license, NIN, National ID card)</span>
//                             <span class="upload-text"><b>Maximum size of 2MB</b></span>
//                         </label>
//                     </div>
//                     {errors.document && <p>{errors.document.message}</p>}
//                     <button type="submit">Submit</button>
//                 </div>
//         {/* <input type="file" {...register('document')} />
//         {errors.document && <p>{errors.document.message}</p>}
//         <button type="submit">Submit</button> */}
//       </div>
//     </form>
//   );
// }

// export default SignUpTester;


// import React, { useState } from 'react';

// const SignUpTester = () => {
//   const [formData, setFormData] = useState({
//     password: '',
//     confirmPassword: '',
//     securityQuestion: '',
//     agreedToTerms: false,
//   });

//   const [errors, setErrors] = useState({
//     password: '',
//     confirmPassword: '',
//     securityQuestion: '',
//     agreedToTerms: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm(formData);
//     setErrors(newErrors);

//     if (Object.values(newErrors).every((error) => error === '')) {
//       // Form is valid, submit data or perform further actions
//       console.log('Form data:', formData);
//     } else {
//       // Form has errors, handle them accordingly
//       console.log('Form has errors:', newErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};
//     if (!data.password) {
//       errors.password = 'Password is required';
//     }
//     if (!data.confirmPassword) {
//       errors.confirmPassword = 'Confirm Password is required';
//     } else if (data.confirmPassword !== data.password) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
//     if (!data.securityQuestion) {
//       errors.securityQuestion = 'Security Question is required';
//     }
//     if (!data.agreedToTerms) {
//       errors.agreedToTerms = 'You must agree to the Terms and Conditions';
//     }
//     return errors;
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <div className="error">{errors.password}</div>}
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && (
//             <div className="error">{errors.confirmPassword}</div>
//           )}
//         </div>
//         <div>
//           <label>Security Question:</label>
//           <select
//             name="securityQuestion"
//             value={formData.securityQuestion}
//             onChange={handleChange}
//           >
//             <option value="">Select a security question</option>
//             <option value="What is your mother's maiden name?">
//               What is your mother's maiden name?
//             </option>
//             <option value="What is the name of your first pet?">
//               What is the name of your first pet?
//             </option>
//             <option value="What city were you born in?">
//               What city were you born in?
//             </option>
//           </select>
//           {errors.securityQuestion && (
//             <div className="error">{errors.securityQuestion}</div>
//           )}
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="agreedToTerms"
//               checked={formData.agreedToTerms}
//               onChange={handleChange}
//             />
//             I agree to the Terms and Conditions
//           </label>
//           {errors.agreedToTerms && (
//             <div className="error">{errors.agreedToTerms}</div>
//           )}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpTester;


import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  securityQuestion: Yup.string().required('Security Question is required'),
  agreedToTerms: Yup.boolean().oneOf([true], 'You must agree to the Terms and Conditions'),
});

const SignUpTester = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Password:</label>
          <input type="password" {...register('password')} />
          {errors.password && <div className="error">{errors.password.message}</div>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
        </div>
        <div>
          <label>Security Question:</label>
          <select {...register('securityQuestion')}>
            <option value="">Select a security question</option>
            <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
            <option value="What is the name of your first pet?">What is the name of your first pet?</option>
            <option value="What city were you born in?">What city were you born in?</option>
          </select>
          {errors.securityQuestion && <div className="error">{errors.securityQuestion.message}</div>}
        </div>
        <div>
          <label>
            <input type="checkbox" {...register('agreedToTerms')} />
            I agree to the Terms and Conditions
          </label>
          {errors.agreedToTerms && <div className="error">{errors.agreedToTerms.message}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpTester;
