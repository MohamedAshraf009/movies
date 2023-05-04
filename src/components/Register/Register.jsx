import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const [user, setUser] = useState({
    'first_name':'',
    'last_name':'',
    'age':'',
    'email':'',
    'password':''
  });
  const [errorMsg, setErrorMsg] = useState('')
   const [errorsList, setErrorsList] = useState([])
   const [isLoading,setIsLoading]=useState(false);
  let navigate=useNavigate();
  let submitFormData= async (e)=>{
    e.preventDefault();
    setIsLoading(true);
    let validationResponse=validateFormData();
    if(validationResponse.error){
setErrorsList(validationResponse.error.details)
    }else{
let {data}= await axios.post('https://sticky-note-fe.vercel.app/signup',user)
    if(data.message=='success'){
    goToLogin()
    setIsLoading(false)
    }
    else{
      setErrorMsg(data.message)
      setIsLoading(false)
    }
    }
    
  };
  let validateFormData=()=>{
    const schema=Joi.object({
      first_name:Joi.string().alphanum().required().min(2).max(10),
      last_name:Joi.string().alphanum().required().min(2).max(10),
      age:Joi.number().required().min(20).max(80),
      email:Joi.string().required().email({tlds:{allow:['com','net','eg','gov','edu']}}),
      password:Joi.string().required().pattern(new RegExp(/.{3,15}$/))

    })
    return schema.validate(user,{abortEarly:false});
  }
  let goToLogin=()=>{
    navigate('/login')
  }
  let getInputValue=(e)=>{
    
    let myUser={...user}; 
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
  }
  return (
  <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
                
            </Helmet>
  <div className=' w-75 m-auto py-5'>
  <h2>Registration Form</h2>
  
  
  <form onSubmit={submitFormData}>
    <div className='input-data my-2'>
  {errorMsg?<div className="alert alert-danger p-2">{errorMsg}</div>:""}
      <label htmlFor="first_name">First Name</label>
      <input onChange={getInputValue} type="text" className='form-control my-2' name='first_name'/>
      {errorsList.filter((error)=>error.context.label=='first_name')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='first_name')[0]?.message}</div>:''}
    </div>
    <div className='input-data my-2'>
      <label htmlFor="last_name">Last Name</label>
      <input onChange={getInputValue} type="text" className='form-control my-2' name='last_name'/>
      {errorsList.filter((error)=>error.context.label=='last_name')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='last_name')[0]?.message}</div>:''}
    </div>
    <div className='input-data my-2'>
      <label htmlFor="age">Age</label>
      <input onChange={getInputValue} type="number" className='form-control my-2' name='age'/>
      {errorsList.filter((error)=>error.context.label=='age')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='age')[0]?.message}</div>:''}
    </div>
    <div className='input-data my-2'>
      <label htmlFor="email">Email</label>
      <input onChange={getInputValue} type="email" className='form-control my-2' name='email'/>
      {errorsList.filter((error)=>error.context.label=='email')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='email')[0]?.message}</div>:''}
    </div>
    <div className='input-data my-2'>
      <label htmlFor="password">Password</label>
      <input onChange={getInputValue} type="password" className='form-control my-2' name='password'/>
      {errorsList.filter((error)=>error.context.label=='password')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='password')[0]?.message}</div>:''}
    </div>

    <button className='btn btn-info float-end my-3'>
    {isLoading== true ?<i className='fas fa-spinner fa-spin'></i>:'Register'}
    </button>
    <div className="clear-fix"></div>
  </form>
  </div>
  </>
  )
}
