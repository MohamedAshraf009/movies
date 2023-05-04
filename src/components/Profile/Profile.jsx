import React from 'react'
import styles from './Profile.module.scss';
import { Helmet } from 'react-helmet';
export default function Profile({userData}) {
    console.log(userData);
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
                
            </Helmet>
     <div className={`profile w-75  py-5 my-5 m-auto text-start  ${styles.bgProfile}`}>
         <h2 className='text-center mb-5'>Welcome,{userData?.first_name}</h2>
        <h3>Name : {userData?.first_name} {userData?.last_name}</h3>
        <h3 className='my-4'>Age : {userData?.age}</h3>
        <h3>Email: {userData?.email}</h3>
     </div>
    </>
  )
}
