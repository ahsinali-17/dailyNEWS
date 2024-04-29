import React from 'react'

 const NewsItem=(props)=> {
 
    let {title,description,imgUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
       <div className="card" >
    <img src= {imgUrl} className="card-img-top" alt="..."/>
    <span className="badge bg-info text-dark" style={{width:"40%",position:"relative",top:"10px"}}>{source}</span>
    <div className="card-body">
    <h5 className="card-title"> {title}.....</h5>
    <p className="card-text">{description}......</p>
    <a href={newsUrl} target='_' className="btn btn-dark btn-sm">Read more...</a>
    <p className="card-text"><small className="text-muted">Published by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
  </div>
</div>
      </div>
    )
}

export default NewsItem
