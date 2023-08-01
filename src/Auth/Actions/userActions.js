import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser=(values,history,setSubmitting,setFieldError,setError)=>{
     const baseUrl="https://id-vault-awufl1ov2-silencecodder.vercel.app/xvc/api/company/auth/login"
        
        console.log(values)
        axios.post(baseUrl,values,
    {
        headers:{
            "content-Type":"application/json"
        }
    }).then((response)=>{
     
    const {data}=response;
    if(data.status===false){
        const {message}=data;
        console.log(message)
        if(message.includes("credentials")){
            setFieldError("email",message)
            setFieldError("password",message)
        }else if(message.includes("password")){
            setFieldError("password",message)
        }
    }else{
        const userData=data.company;
        console.log(userData
            )
     const token=data.token;
     sessionService.saveSession(token).then(()=>{
        sessionService.saveUser(userData).then(()=>{
            history("/")
        }).catch(err=>console.error(err))

     }).catch((err)=>{
        console.log(err)
     })
    }
    setSubmitting(false)
 }).catch((err)=>{
    setError(err.response.status)
    console.log(err.response.status)})

}

export const userRegister=({credentials,history,setSubmitting,setFieldError})=>{

}

export const logout=(history)=>{  
        sessionService.deleteSession()
        sessionService.deleteUser()
        history("/login")

}