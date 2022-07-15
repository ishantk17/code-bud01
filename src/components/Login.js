import React, {useState} from 'react'
import signinimg from "../images/3426526.jpg"
import "bootstrap/dist/css/bootstrap.css"
import { NavLink , useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
  const [userlogin,setUserLogin]=useState({
    phone:"",password:""
  });
  let name,value;
const handleChange=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUserLogin({...userlogin,[name]:value});
  }
  const handleClick=async(e)=>{
    e.preventDefault();
    const { phone,password,}=userlogin;
    const res=await fetch('/login',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json ',
      
      },
      body:JSON.stringify({
        phone,password
      })
    });
    const data=await res.text();
    if(res.status===400 || !data){
      window.alert("invalid credentials");
    }
    else{
      window.alert("signed in successfully");
      navigate("/");
    }
  }
  return (
    <div className="wrapper shadow-lg p-3 mb-5 bg-body rounded" >
<div className="inner">
<div className="image-holder">
<img src={signinimg} alt="image" />
<NavLink className="nav-link text-warning" to="/signup">Create a new Account</NavLink>
</div>
<form method='POST' style={{ position: "relative",top: "50px"}}>
<h3 className='h1'>LOGIN</h3>
<div className="form-wrapper">
<input type="number" placeholder="Phone Number" name='phone' onChange={handleChange} value={userlogin.phone} className="form-control"/>
</div>
<div className="form-wrapper">
<input type="password" placeholder="Password" name='password' onChange={handleChange} value={userlogin.password} className="form-control"/>
</div>
<button type="button" onClick={handleClick} class="btn btn-outline-success ">LOGIN</button>
</form>
</div>
</div>
  )
}

export default Login