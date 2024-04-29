import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {

  
  const capitalize=(string)=>{
     return string.charAt(0).toUpperCase() + string.slice(1);
  }
    const [article,setArticle]=useState([]);
    const [page,setPage]=useState(1);
    const [totalArticles,setTotalArticles]=useState(0);

    document.title = `${capitalize(props.catagory)} - DailyNews`; 
  
  const newsUpdater=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.api}&page=${page}&pageSize=${props.pgSize}`;
    props.progress(10);
    let data = await fetch(url);
    props.progress(40);
    let parseData = await data.json();
    props.progress(70);
    console.log(parseData)
    setArticle(parseData.articles);
    setTotalArticles( parseData.totalResults);
    props.progress(100);
  }

  useEffect(()=>{
    newsUpdater();
  },[])
  
  const fetchMoreData=async()=>{
  
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pgSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    setPage(page+1);
    setArticle(article.concat(parseData.articles));
    setTotalArticles( parseData.totalResults);
  }

    return (
      <>
        <div className="container my-3">
          <h1 className='text-center'> Top - {capitalize(props.catagory)} Headlines</h1>

          <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalArticles}
          loader={<Loader/>}
        >
          <div className="container">
          <div className="row" >
          {
            article.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
          <NewsItem title = {element.title ? element.title.slice(0,40):""} description = {element.description ? element.description.slice(0,50):""} imgUrl={element.urlToImage ?element.urlToImage : "https://www.hindustantimes.com/ht-img/img/2023/11/15/1600x900/TOPSHOT-PALESTINIAN-ISRAEL-CONFLICT-ARMY-1_1700049977931_1700049993511.jpg" } newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
              
            })
}
         </div>
         </div>
         </InfiniteScroll>
        </div>
      </>
    )
  }

  News.propTypes ={
    pgSize : PropTypes.number,
    country: PropTypes.string,
    catagory : PropTypes.string
  }

News.defaultProps ={
    pgSize : 6,
    country: "",
    catagory : "general",
    api : "f7c0c8519b254ff0bbe6eda6c78e6c72"
  }

export default News
