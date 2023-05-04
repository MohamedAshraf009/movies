import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MediaContext } from '../../Context/MediaStore';
import noimg from "../../images/noimg.jpg";
import Loading from '../Loading/Loading';



export default function People() {
let {trendingPersons}=useContext(MediaContext)
  
  return (
    
   <>
   
   <Helmet>
                <meta charSet="utf-8" />
                <title>People</title>
                
            </Helmet>
   {trendingPersons.length>0? <div className="row py-4 gy-3">
       <div className="col-md-4">
        <div>
          <div className='brdr mb-3 w-25'></div>
          <h3>Trending</h3>
          <h3>People</h3>
          <h3>To watch now</h3>
          <span className='text-muted'>most watched people by day</span>
          <div className='brdr mt-4 w-100'></div>
        </div>
      </div> 
     {trendingPersons.slice(0,20).map((item,index)=>(
      <div key={index} className="col-md-2">
     <Link className='nav-link' to={`/details/${item.id}/${item.media_type}`}>
<div>
    <div className="item position-relative overflow-hidden">
      {item.profile_path? 
      <img className='w-100' src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="Actor" />:
      <img className='w-100' src={noimg} alt="Actor" />
      }
        <div className="overlay  text-center">
          <div className='mt-5'>{item.original_name}</div>
          <div>{item.popularity.toFixed(1)}</div>
          <div>{item.known_for_department}</div>
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
