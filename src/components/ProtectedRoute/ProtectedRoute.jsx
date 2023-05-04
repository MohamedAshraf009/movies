import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({userDate,children}) {
   if((userDate == null) & (localStorage.getItem('token')==null)){
    return <Navigate to='/login'/>;
   }else{
    return children;
   }
}
