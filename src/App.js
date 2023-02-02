import React, { useEffect, useState } from "react";
import Title from './Title';
import './App.css';
import Article from './Article';

function App() {
  const [newsList, setNewsList] = useState([]);
  const [searchInput, setSearchInput] = useState(""); 
  const [query, setQuery] = useState("today");  //Page will start with "today" search

  const API_KEY = '98eaaa04e73941cb82928a154ced52a6';

  //fetches api data, changes depending on search
  useEffect( () => {
    getNews();
  }, [query]);

  //Fetch articles from NEWS api based on sea query state.
  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    setNewsList(data.articles);
    console.log(data.articles);
  }


  //Sets searchInput state to what is being entered in search bar
  function handleInput(e) {
    setSearchInput(e.target.value);
  }

  //Sets query state to word serached when submit or enter is pressed
  function handleSubmit(e) {
    e.preventDefault();       //prevents page from reloading after enter is pressed
    setQuery(searchInput);
    setSearchInput("");
  }


  return (
    <>
      <Title />
      <form onSubmit={handleSubmit} className="search-bar">
        <input type="text" placeholder="Search News" onChange={handleInput} value={searchInput} className="search-input" />
        <button type="submit" className="submit">Search</button>
      </form>
      <div className="news-list">
        {newsList.map(article => (
          <Article
            key={article.url}
            title={article.title}
            url={article.url}
            description={article.description}
            image={article.urlToImage}
          />
        ))}
      </div>
    </>
    
  );
}

export default App;
