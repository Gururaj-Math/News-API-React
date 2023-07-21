import React from 'react'
import Axios from 'axios'
import {useQuery} from '@tanstack/react-query'

const Newsapi = () => {
    const {data, isLoading} = useQuery([], ()=>{
        return Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=239662c80ccd4e01a72488a2ab0002e2").then((res)=>res.data);
    });
    if(isLoading){
        return<h1>Loading..</h1>
    }
  return (
    <div>
      {console.log(data.articles)}
      {data.articles.map((news, index)=>(
        <div key={index}>
            <p>{news.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Newsapi
