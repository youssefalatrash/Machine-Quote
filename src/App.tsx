import { useState } from 'react';
import './App.css';
import quotes from "./assets/quotes.json";
import {FaTwitter,FaQuoteLeft,FaQuoteRight} from "react-icons/fa";

interface Quote {
  quote:string;
  author:string;
}

const getRandomQuote = (): Quote =>{
  return quotes [Math.floor(Math.random()*quotes.length)];
};

const getRandomColor = ():string =>{
  const red = Math.floor(Math.random()*128);
  const green = Math.floor(Math.random()*128);
  const blue = Math.floor(Math.random()*128);

  return `rgb(${red}, ${green}, ${blue})`;
}

function App() {
  const [randomColor,setRandomColor] = useState<string>(getRandomColor());
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const changeQuote = () =>{
    setQuote(getRandomQuote());
    setRandomColor (getRandomColor()) ;
  }

  return (
    <div className='background' style={{backgroundColor:randomColor}}>
      <div id='quote-box'>
        <div className='quote-content' style={{color:randomColor}}>
          <FaQuoteLeft size="30" style={{marginRight:"10px"}}/>
          <h2 id='text'>{quote.quote}</h2>
          <FaQuoteRight size="30" style={{marginRight:"10px"}} />
          <h4 id='author'>{quote.author}</h4>
        </div>
        <div className='buttons'>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
          id='tweet-quote'
          style={{backgroundColor:randomColor,marginRight:"10px"}}>
            <FaTwitter color="white"/>
          </a>
          <button id='new-quote' onClick={changeQuote} style={{backgroundColor:randomColor}}>
            Change Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
