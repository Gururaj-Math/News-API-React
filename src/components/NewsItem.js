import React from 'react'

const NewsItem = ({item}) => {
  const websiteURL = item.url
  const website = websiteURL.split('https://').pop().split('/')[0]

  const date = item.publishedAt
  const formatDate = date.replace('T', '')
  const formatTime = formatDate.replace('Z', '')

  return (
    <a href={item.url} className='article' target='blank'>
      <div className='article-image'>
        <img src={item.urlToImage} alt={item.title} />  
      </div>
      <div className='article-content'>
        <div className='article-source'>
          <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http%3A%2F%2F${website}&size=16`} alt={item.source.id} />
          <span>{item.source.name}</span>
        </div>
        <div className='article-title'>
          <h2>{item.title}</h2>
        </div>
        <p className='article-description'>
          {item.description}
        </p>
        <div className='article-details'>
          <small><b>Published At: </b>{formatTime}</small>
        </div>
      </div>
    </a>
  )
}

export default NewsItem
