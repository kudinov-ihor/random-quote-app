import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState({});

  const url = `https://api.quotable.io/random`;

  const generateQuote = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  };

  useEffect(() => {
    generateQuote();
  }, [])
  return (
    <div className="app">
      <h2 className="title">Random QUOTE with using https://api.quotable.io/</h2>
      <div className="container">
        <h1 className="quote">
          {data.content}
        </h1>
        <p className="author">
          {data.author}
        </p>
        <button
            className='button'
            onClick={generateQuote}
            >
          Generate Quote
        </button>
      </div>
      {/* {data.content}
      {data.author} */}
    </div>
  );
}

export default App;
