import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import '../Styles/Newsapi.css'

const Newsapi = () => {
  const { data, isLoading } = useQuery([], () => {
    return Axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=239662c80ccd4e01a72488a2ab0002e2"
    ).then((res) => res.data);
  });
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      {console.log(data)}

      <div className="article_container">
        {data.articles.slice(0, 6).map((article, index) => (
          <div key={index} className="article">
            <div className="article_img">
              <img src={article.urlToImage} alt={article.title} href={article.url}/>
            </div>
            <div className="article_info">
            <a href={article.url} className="btn">  
              <p className="title">{article.title}</p>
              <p>{article.content && article.content.slice(0, 150)}...</p>
              <p className="author">- {article.author}</p>
              <p>Published At - {article.publishedAt}</p>
               </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Newsapi;

{
  /* {console.log(data.articles)}
      {data.articles.map((news, index)=>(
        <div key={index}>
           
        </div>
      ))} */
}
