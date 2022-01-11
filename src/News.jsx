import React from 'react'

const News=({title,urlToImage,description,url})=> {
    return (
       <>
       <div className="box">
       <div className="title"><p>{title}</p></div>
       <div className="img"><img src={urlToImage} alt={title} /></div>
       <div className="description"><p>{description}</p></div>
       <div className="url"><a href={url}>View Full Article</a></div>
       </div>
       </>
    )
}

export default News