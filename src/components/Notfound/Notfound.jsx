import React from 'react'
import { Helmet } from 'react-helmet';

export default function Notfound() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Not found</title>
                
            </Helmet>
    <div className=" my-5 text-center d-flex justify-content-center align-items-center ">
    <div className='my-5'>
    <h1 className='text-warning fs-1 fw-bold  '>404</h1>
      <p className='fs-1'>Oops! Page not found</p>
      <span>sorry,but the page you are looking for is not found.Please,make sure you have typed the correct URL</span>
    </div>
      
    </div>
    </>
  )
}
