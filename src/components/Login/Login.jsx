import React, {useState}from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from '@mui/material/Paper';

const Login =()=>{
    let navigate =useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    var userAcc={
        email:email,
        password:password,
    }
    const signIn=()=>{
        axios.post("http:localhost:8080/login",userAcc).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
            <Paper className="Paperlogin">

            <h3 className="W">Welcome!</h3>
            <p className="p">Sign in with your email</p>
            <label className="Emaillabel" >Email:</label> 
            <input className="inputlogin " type="text" placeholder="Your Email"  onChange={(e)=>{setEmail(e.target.value)}} />
            <label className="PasswordLabel" > Password*:</label>
            <input className="inputlogin " type="password" placeholder="Your password" onChange={(e)=>{setPassword(e.target.value)}} />
            <button className="Button1"  type="submit"onClick={signIn} >Sign in</button>
            <p >Don't have acount yet?   </p> 
            <span className="click" onClick={()=>{navigate("/Signup")}}>Create one!</span>
            </Paper>
    )
}
export default Login