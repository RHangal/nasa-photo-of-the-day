import React, {useState, useEffect}from "react";
import "./App.css";
import { BASE_URL, API_KEY } from ".";
import axios from 'axios'
import Header from "./Header";
import Main from "./Main";
import Body from "./Body";

function App() {
const [apod, setApod] = useState({})
const [countImages, setCountImages] = useState([])
const [count, setCount] = useState(4)

const increaseCount = () => {
  if(count <12)
  return setCount(count + 1)
}
const decreaseCount = () => {
  if(count >1)
  return setCount(count - 1)
}

const resetCount = () => {
  setCount(4)
}


  useEffect( () => {axios.get(`${BASE_URL}?&api_key=${API_KEY}
  `)
    .then(res => {
      return setApod(res.data)
    }).catch(err => console.error(err))
  }, [])

  useEffect( () => {axios.get(`${BASE_URL}?count=${count}&api_key=${API_KEY}
  `)
    .then(res => {
      return setCountImages(res.data)
    }).catch(err => console.error(err))
  }, [count])


  return (
    <div className="App">
      <Header />
      <Main apod={apod}/>
      <Body countImages={countImages} count ={count} increaseCount={increaseCount} 
      decreaseCount={decreaseCount} resetCount={resetCount}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}


export default App;
