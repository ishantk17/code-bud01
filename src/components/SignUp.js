import React,{useState} from 'react'
import signupimg from "../images/2517915.jpg"
import "bootstrap/dist/css/bootstrap.css"
import { NavLink , useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa';

function SignUp() {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });
  let name,value;
const handleInput=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }
  const handleClick = async(e)=>{
      e.preventDefault();
      const { name,email,phone,password,cpassword}=user;
      const res=await fetch("/signup",{
        method:"POST",
        mode:"cors",
        credentials:'include',
        headers:{
          'Content-Type': 'application/json ',
          'Accept': 'application/json',
          "Access-Control-Origin": "*"
        },
        body:JSON.stringify({
          name,email,phone,password,cpassword
        })
      });
      const data=await res.json();
      if(data.status === 422 || !data){
        window.alert("invalid registration");
        console.log("registration error");
      }
      else{
        window.alert("registration successful");
        console.log("registration successful");
        navigate("/login");
      }
  }

  return (
<div className="wrapper shadow-lg p-3 mb-5 bg-body rounded" >
<div className="inner">
<div className="image-holder">
<img src={signupimg} alt="image" height="500px"/>
<NavLink className="nav-link text-success" to="/login">Already registered</NavLink>
</div>
<form method='POST'>
<h3 className='h1'>SignUp</h3>
<div className="form-wrapper"> 
<input type="text" placeholder=" Name"  name='name'  onChange={handleInput}  value={user.name} className="form-control" />
</div>
<div className="form-wrapper">
<input type="text" placeholder="Email Address" name='email' onChange={handleInput}  value={user.email} className="form-control"/>
</div>
<div className="form-wrapper">
<input type="number" placeholder="Phone Number" name='phone' onChange={handleInput}  value={user.phone} className="form-control"/>
</div>
<div className="form-wrapper">
<input type="password" placeholder="Password" name='password' onChange={handleInput}  value={user.password} className="form-control"/>
</div>
<div className="form-wrapper">
<input type="password" placeholder="Confirm Password" name='cpassword' onChange={handleInput}  value={user.cpassword} className="form-control"/>
</div>
<button type="button" onClick={handleClick} class="btn btn-primary">Register</button>
</form>
</div>
</div>
  )
}

export default SignUp