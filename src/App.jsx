import React, { useEffect, useState } from 'react'
import axios from 'axios'
import News from './News'

const App = () => {
    const [news,setNews]=useState([])

    useEffect(()=>{
        const url=`
        https://newsapi.org/v2/everything?domains=wsj.com&apiKey=553bca9f4e8646d7af595acb849fbbe7`;
        const  getNews= async ()=>{
            const response=await axios.get(url);
            console.log(response);
            setNews(response.data.articles)

        }
        getNews();
    },[])
    return (
        
        <>
        
        <div className="show">

        <div className="heading">
            <p>The Developer Times</p>
            <h1>Get all the NEWS here</h1>
        </div>
            {news.map(({title,description,url,urlToImage})=>{
                  return(<News title={title} description={description} url={url} urlToImage={urlToImage} />) 
                   
            })}
        </div>
        </>
    )
}

export default App



