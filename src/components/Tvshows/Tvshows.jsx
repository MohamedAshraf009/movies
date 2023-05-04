import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MediaContext } from '../../Context/MediaStore';
import Loading from '../Loading/Loading';


export default function Tvshows() {

let {trendingTvs}=useContext(MediaContext)
 
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Tv shows</title>
                
            </Helmet>
    {trendingTvs.length>0?<div className="row py-4 gy-3">
       <div className="col-md-4">
        <div>
          <div className='brdr mb-3 w-25'></div>
          <h3>Trending</h3>
          <h3>Tv</h3>
          <h3>To watch now</h3>
          <span className='text-muted'>most watched tvshows by day</span>
          <div className='brdr mt-4 w-100'></div>
        </div>
      </div> 
     {trendingTvs.slice(0,20).map((item,index)=>(
      <div key={index} className="col-md-2">
     <Link className='nav-link' to={`/details/${item.id}/${item.media_type}`} >
   <div>
      <div className="item position-relative overflow-hidden ">
        <img className='w-100' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="tvshow" />
        <span className='position-absolute top-0 end-0 p-2 bg-info'>
        <i className="fa-solid fa-star mx-1"></i>
          {item.vote_average.toFixed(1)}</span>
        <div className="overlay d-flex align-items-center text-center">
          <p>{item.overview.split(' ').slice(0,10).join(' ')}</p>
        </div>
      </div>
      <div>
      <h2 className='h6 text-center'>{item.title}{item.name}</h2>
      </div>
   </div>
     </Link>
    </div>
    ) )}
    </div>:<Loading/>}
    </>
  )
}
