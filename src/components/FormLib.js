import {useField} from "formik";
import { StyledIcon, StyledInput, StyledLabel,ErrorMsg } from "./styles";
import { FiEye,FiEyeOff ,FiMail,FiLock} from 'react-icons/fi';
import { useState } from "react";



export const TextInputs=({icon,...props})=>{
    const [field,meta]=useField(props)
    const [show,setShow]=useState(true)
    return(
        <div style={{position:"relative"}}> 
        <StyledLabel htmlFor={props.name}>
            {props.label}
        </StyledLabel>
       {props.type === "password" && <StyledInput
        invalid={meta.touched && meta.error}

            {...field}   
            {...props}
            type={show ?"password":"text"}
        />}

        {props.type !== "password" && 
        <StyledInput
        invalid={meta.touched && meta.error}
            {...field}   
            {...props}
            
        />
        }
        <StyledIcon>
            {icon}
        </StyledIcon>

       {props.type==="password" && (<StyledIcon onClick={()=>setShow(!show)} right="true">
        {show && <FiEye/>}
        {!show && <FiEyeOff/>}


        </StyledIcon>)}
        {meta.touched && meta.error ?(
         <ErrorMsg>{meta.error}</ErrorMsg>
        ):(
            <ErrorMsg style={{visibility:"hidden"}}>.</ErrorMsg>

        )}
        </div>

    )
}