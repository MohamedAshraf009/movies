import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {
  
  const [user, setUser] = useState({
    'email':'',
    'password':''
  });
  const [errorMsg, setErrorMsg] = useState('');
   const [errorsList, setErrorsList] = useState([]);
   const [isLoading,setIsLoading]=useState(false);

  let navigate=useNavigate();
  let goToHome=()=>{
    navigate('/');
  }
  let submitFormData= async (e)=>{
    e.preventDefault();
    setIsLoading(true);

    let validationResponse=validateFormData();
    if(validationResponse.error)
    {
        setErrorsList(validationResponse.error.details);
    }
    else
    {
let {data}= await axios.post('https://sticky-note-fe.vercel.app/signin',user)
console.log(data);
    if(data.message==='success')
    {
      localStorage.setItem('token',data.token);
      saveUserData();
    goToHome();
    setIsLoading(false)

    }
    else{
      setErrorMsg(data.message);
    setIsLoading(false)

    }
    }
    
  };
  let validateFormData=()=>{
    const schema=Joi.object({
      email:Joi.string().required().email({tlds:{allow:['com','net','eg','gov','edu']}}),
      password:Joi.string().required().pattern(new RegExp(/.{3,15}$/))

    })
    return schema.validate(user,{abortEarly:false});
  }

  let getInputValue=(e)=>{
    let myUser={...user}; //--->deep copy 
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
  }

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                
            </Helmet>
     <div className=' w-75 m-auto py-5'>
  <h2>Login Form</h2>
  
  <form onSubmit={submitFormData}>
    <div className='input-data my-2'>
  {errorMsg?<div className="alert alert-danger p-2">{errorMsg}</div>:""}
      <label htmlFor="email">Email</label>
      <input onChange={getInputValue} type="email" className='form-control my-2' name='email'/>
      {errorsList.filter((error)=>error.context.label==='first_name')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='first_name')[0]?.message}</div>:''}
      {errorsList.filter((error)=>error.context.label==='email')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='email')[0]?.message}</div>:''}
    </div>
    <div className='input-data my-2'>
      <label htmlFor="password">Password</label>
      <input onChange={getInputValue} type="password" className='form-control my-2' name='password'/>
      {errorsList.filter((error)=>error.context.label==='password')[0]?<div className="alert alert-danger my-2">{errorsList.filter((error)=>error.context.label=='password')[0]?.message}</div>:''}

    </div>

    <button className='btn btn-info float-end my-3'>
      {isLoading=== true ?<i className='fas fa-spinner fa-spin'></i>:'Login'}
    </button>
    <div className="clear-fix"></div>
  </form>
  </div>
    </>
  )
}
