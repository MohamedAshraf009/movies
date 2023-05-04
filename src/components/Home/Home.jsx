import React from 'react';
import { Offline } from 'react-detect-offline';
import { Helmet } from 'react-helmet';
import Movies from '../Movies/Movies';
import People from '../People/People';
import Tvshows from '../Tvshows/Tvshows';
import Disconnected from './../Disconnected/Disconnected';

export default function Home() {

  return (
    <>
    
    <Offline><Disconnected/></Offline>
  
    <Movies/>
    <Tvshows/>
    <People/>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
   
    </>
  )
}
