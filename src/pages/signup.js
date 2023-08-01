import React from 'react'
import { StyledContainer ,StyledFormButton,StyledFormarea,StyledTitle, StyledsubTitle} from '../components/styles'
import air from "../components/airbnb.jpg";
import { Formik,Form } from 'formik';
import { TextInputs } from '../components/FormLib';
import { FiEye,FiEyeOff ,FiMail,FiLock} from 'react-icons/fi';
import *as Yup from "yup"

function Signup() {
  return (  
    

    <StyledContainer>
    <div style={{marginTop:"10px"}}>
        <StyledFormarea>
            <img src={air} style={{marginLeft:"50px"}} />
            <StyledTitle size={25}>Member Registration</StyledTitle>
            <Formik 
             initialValues={{
                companyName:"",
            address:"",
            country:"",
            state:"",
            city:"",
            email: '',
            awareness:"",
            password:"",
            confirmPassword: '',
            referedBy:"",
            deviceId:""
             }}
             validationSchema={
                Yup.object({
                    companyName:Yup.string().required("required"),
                    address:Yup.string().required("required"),
            country: Yup.string()          
                .required('Please enter your country'),
            state: Yup.string()           
                .required('Please enter your state'),
            city: Yup.string()            
                .required('Please enter your city'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
            device_Id: Yup.string()           
                .required('Please enter your device_Id'),

                })
             }
             onSubmit={(values,{setSubmitting})=>{
                console.log(values)
             }}
            
            >
                {()=>(
                    <Form>
                        <TextInputs
                            name="companyName"
                            type="text"
                            label="Company_Name"
                            placeholder="Enter Company_Name"
                            icon={<FiMail/>}
                        />
                        <TextInputs
                            name="address"
                            type="text"
                            label="Address"
                            placeholder="Enter Address"
                            icon={<FiLock/>} 
                        />
                         <TextInputs
                            name="country"
                            type="text"
                            label="Country"
                            placeholder="Enter Country"
                            icon={<FiMail/>}
                        />
                         <TextInputs
                            name="state"
                            type="text"
                            label="State"
                            placeholder="Enter State"
                            icon={<FiMail/>}
                        />
                         <TextInputs
                            name="city"
                            type="text"
                            label="City"
                            placeholder="Enter City"
                            icon={<FiMail/>}
                        />
                         <TextInputs
                            name="awareness"
                            type="text"
                            label="Awareness"
                            placeholder="Enter Awareness"
                            icon={<FiMail/>}
                        />
                         <TextInputs
                            name="email"
                            type="text"
                            label="Email"
                            placeholder="Eg-Aigbojie2022@gmail.com"
                            icon={<FiMail/>}
                        />
                        <TextInputs
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="*******"
                            icon={<FiLock/>}
                        />
                        <TextInputs
                            name="confirmPassword"
                            type="password"
                            label="Confirm_Password"
                            placeholder="*******"
                            icon={<FiLock/>}
                        />
                         <TextInputs
                            name="deviceId"
                            type="text"
                            label="Device_Id"
                            placeholder="Enter Device_Id"
                            icon={<FiLock/>}
                        />
                        <StyledFormButton type="submit">register</StyledFormButton>
                    </Form>
                )}
            </Formik>
        </StyledFormarea>
    </div>
    </StyledContainer>
  )
}

export default Signup