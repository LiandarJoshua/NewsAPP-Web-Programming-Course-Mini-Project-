import React, { useState } from "react";

function NavBar1({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=bd3916e8bfe04202b97dc9ad162b8483`);
      const data = await response.json();
      setSearchResults(data.articles); // Set search results here
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="img-container">
              <img src="/Images/globe.png" alt="Globe" />
              <span className="global-title">THE GLOBAL</span>
            </div>
          </a>
          <p className="slogan">Good News Not Fake News</p>

          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
