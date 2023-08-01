import styled from "styled-components"
const background="https://images.unsplash.com/photo-1678874780591-0f4ba3fe5dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"

export const colors={
    primary:"#fff",
    theme:"#BE185D",
    back:"rgb(255,255,250)",
    light1:"#F3F4F6",
    light2:"#E5E7EB",
    red:"red"
}
export const StyledContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0;
  min-height:100vh;
  background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background});
  background-position:center;
  background-attachment:fixed;
  background-repeat:no-repeat;
  background-size:cover;

`
export const StyledTitle=styled.h2`
  font-size:${(props=>props.size)}px;
  color:${colors.theme};
  font-weight:bold;
  text-align:center;
  margin-bottom:20px;
  padding:5px
`
export const StyledsubTitle=styled.p`
font-size:${(props=>props.size)}px;
  color:${colors.theme};
  font-weight:bold;
  text-align:center;
  margin-bottom:20px;
  padding:5px
`
export const StyledFormarea=styled.div`
background-color:${colors.primary};
padding: 45px 55px;
text-align:center;
border-radius:10px
`
export const StyledLabel=styled.p`
font-size:13px;
text-align:left;
font-weight:bold
`
export const StyledInput=styled.input`
width:280px;
padding:15px;
padding-left:50px;
font-size:17px;
letter-spacing:1px;
display:block;
border:0;
margin:5px auto 10px auto;
transition: ease-in-out 0.3s;
background-color:${colors.light2}

${(props)=>props.invalid && `background-color:${colors.light2}; color:${colors.theme}`}

&:focus{
  background-color:${colors.light2};
  color:${colors.theme}
} }
`
export const StyledIcon=styled.p`
position:absolute;
font-size:21px;
top:40px;
${(props)=>props.right && `right:15px`}
${(props)=>!props.right && `left:15px`}


`
export const StyledFormButton=styled.button`
background-color:transparent;
font-size:16px;
padding:10px;
width:150px;
border:2px solid ${colors.theme};
color:${colors.theme};
transition:ease-in-out 0.3s;
border-radius:7px;

&:hover{
  background-color:${colors.theme};
  color:${colors.primary};
  cursor:pointer
}



`
export const ErrorMsg=styled.div`
font-size:11px;
color:${colors.red};
text-align:left;
margin-bottom:10px;
margin-top:-5px
`