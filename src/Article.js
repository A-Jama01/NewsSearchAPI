import React from 'react';

export default function Article({ title, url, description, image }) {
  return (
    <div className='article'>
        <h3>{title}</h3>
        <p>{description}</p>
        <img className='article-image' src={image} alt="pew" />
        <button className='read-article'><a href={url}>Read Article</a></button>
    </div>
  )
}
