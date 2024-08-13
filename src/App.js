import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setApiData([json])) // Wrapping json in an array
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <header>
        <strong>NASA</strong>
      </header>

      {apiData.map((item) => (
        <article key={item.title}>
          <strong>{item.title}</strong>
          <img src={item.url} alt={item.title} />
          <p>{item.explanation}</p>
          <button>Acessar</button>
        </article>
      ))}
    </div>
  );
}

export default App;
