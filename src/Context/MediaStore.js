import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext=createContext(null);
export default function MediaContextProvider(props){
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTvs, setTrendingTvs] = useState([]);
    const [trendingPersons, setTrendingPersons] = useState([]);

    let getTrendingItems=async(mediaType,callback)=>{
        let{data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=4507261fca454568e6ba45d3e6be7831`)
        callback(data.results);
      };
      
      useEffect(() => {
        getTrendingItems('movie',setTrendingMovies);
        getTrendingItems('tv',setTrendingTvs);
        getTrendingItems('person',setTrendingPersons);
      }, [])

return <MediaContext.Provider value={{trendingMovies,trendingTvs,trendingPersons}}>
    {props.children}
</MediaContext.Provider>


}