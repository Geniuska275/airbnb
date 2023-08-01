import React,{useState} from 'react'
import { StyledContainer ,StyledFormButton,StyledFormarea,StyledTitle, StyledsubTitle} from '../components/styles'
import air from "../components/airbnb.jpg";
import { Formik,Form } from 'formik';
import { TextInputs } from '../components/FormLib';
import { FiEye,FiEyeOff ,FiMail,FiLock} from 'react-icons/fi';
import {useNavigate} from "react-router-dom"
import *as Yup from "yup"

import { connect } from 'react-redux';
import { loginUser } from '../Auth/Actions/userActions';

function Login({loginUser}) {
    const history=useNavigate()
    const[error,setError]=useState()
    console.log(error)
  return (  
    

    <StyledContainer>
    <div>
        <StyledFormarea>
            <img src={air} style={{marginLeft:"50px"}} />
            <StyledTitle size={25}>Member Login</StyledTitle>
            <Formik 
             initialValues={{
                email:"skitetech91@gmail.com",
                password:"Secret123!",
                deviceId:"fff",
                phoneToken: "fff",
                deviceInfo: "Chrome 419 on Window 10 10.15 July 27 at 03:12 PM"
             }}
             validationSchema={
                Yup.object({
                    email:Yup.string().email("invalid email address").required("required"),
                    password:Yup.string().min(8,"password too short").max(30,"password too long"),
                    deviceId:Yup.string().required("required"),
                    phoneToken:Yup.string().required("required")

                })
             }
             onSubmit={(values,{setSubmitting,setFieldError})=>{   
                loginUser(values,history,setFieldError,setSubmitting,setError)
             }}
            
            >
                {(error)=>(
                    <Form>
                    {error && <h1 style={{color:"red",textAlign:"center"}}>Invalid credentials!</h1>}
                        <TextInputs
                            name="email"
                            type="text"
                            label="Email"
                            placeholder="Aigbojie@2022@gmail.com"
                            icon={<FiMail/>}
                        />
                        <TextInputs
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="*****"
                            icon={<FiLock/>} 
                        />
                         <TextInputs
                            name="deviceId"
                            type="text"
                            label="Device_Id"
                            placeholder="Enter Device_Id"
                            icon={<FiMail/>}
                        />
                         <TextInputs
                            name="phoneToken"
                            type="text"
                            label="Phone_Token"
                            placeholder="Enter Phone_Token"
                            icon={<FiMail/>}
                        />
                        <StyledFormButton type="submit">Login</StyledFormButton>
                    </Form>
                )}
            </Formik>
        </StyledFormarea>
    </div>
    </StyledContainer>
  )
}

export default connect(null,{loginUser})(Login)