import React, { useEffect, useState } from "react";
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import NavBar1 from './components/NavBar1'; 

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNews();
  }, [category, searchQuery]);

  const fetchNews = () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=eeb5b7a20bb643a1ac77e7d15e120ff6`;
    if (searchQuery.trim() !== '') {
      apiUrl += `&q=${searchQuery}`;
    }

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data.articles) {
          setItems(data.articles);
        } else {
          throw new Error('No articles found in response');
        }
      })
      .catch(error => console.log("Error fetching news:", error));
  };

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <div>
      <NavBar1 setSearchResults={setItems} />
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
      <footer className="footer">
        <div className="container">
          <p>Joshua Ltd. &copy;. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
