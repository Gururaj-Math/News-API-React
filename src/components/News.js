import React from 'react'
import NewsItem from './NewsItem'
const News = ({items}) => {
  return (
    <div className='news-grid'>
      {items.slice(0, 12).map((item, index)=>(
        <NewsItem key={index} item={item} />
      ))}
    </div>
  )
}

export default News
