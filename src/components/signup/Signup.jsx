import React ,{useState} from "react";
import "./Signup.css"
import axios from 'axios'
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";



const Signup =()=>{
   const [name,setName]=useState("")
   let navigate =useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const [userRole,setUserRole]=useState("")
var UserData={
    name:name,
    email:email,
    password:password,
    username:username,
    userRole:userRole
}
const register=()=>{
    console.log(UserData)
    axios.post("http:localhost:8080/register",UserData).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

    return(
        <div>
           
        <div className="mycomponent">
       
            <div className="title">
            </div>
           
            
            </div>
            <div className="signup">
                <Paper className="paper"> 
                <h2>Get started with your account</h2>
                <h3>Start updating your team and investors today</h3>
                <div className="sheet">
                <label className="Labels" >Full Name</label>
                <input className="put" type="text" placeholder="name" onChange={(e)=>{setName(e.target.value)}} />
                <label className="Labels" >User Name</label>
                <input className="put" type="text" placeholder="User Name" onChange={(e)=>{setUsername(e.target.value)}} />
                <label  className="Labels" type="">Email*</label>
                <input  className="put" type="email" placeholder="Example@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label className="Labels" >Password</label>
                <input  className="put"  type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                
               
                
                <label className="Labels"> I'm a ...</label>
                <br/>
               <select className="select">
                    <option value="Investor">Investor</option>
                    <option value="Founder">Founder</option>
                   
                    </select>
                    <br/>
                        
                       
                     
                     
                
        
                <button className="buttonsubmit" type="button" onClick={register}>Sign Up</button>
                </div>
                </Paper>
            </div>
            </div>
            
            
      
    )
}
export default Signup