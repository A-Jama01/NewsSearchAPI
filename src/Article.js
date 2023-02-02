import React from 'react';
//import App from './App';

export default function Article({ title, url, description, image }) {
  return (
    <div className='article'>
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
        <img className='article-image' src={image} />
    </div>
  )
}
