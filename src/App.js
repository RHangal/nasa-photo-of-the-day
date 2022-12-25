import React, {useState, useEffect}from "react";
import "./App.css";
import { BASE_URL, API_KEY } from ".";
import axios from 'axios'
import Header from "./components/Header";
import Main from "./components/Main";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import styled from "styled-components";


const DivApp = styled.div`
    text-align: ${prop => prop.theme.textAlign};
    background-color: ${prop => prop.theme.primary};
    color: ${prop => prop.theme.textColor};
`

function App() {
const [apodDate, setapodDate] = useState({})  
const [apod, setApod] = useState({})
const [countImages, setCountImages] = useState([])
const [count, setCount] = useState(4)
const [searchDate, setSearchDate] = useState('')
const [searchValue, setSearchValue] = useState('')

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




  useEffect( () => {axios.get(`${BASE_URL}?&thumbs=True&date=${searchDate}&api_key=${API_KEY}
  `)
    .then(res => {
      return setapodDate(res.data)
    }).catch(err => console.error(err))
  }, [searchDate])

  useEffect( () => {axios.get(`${BASE_URL}?&thumbs=True&api_key=${API_KEY}
  `)
    .then(res => {
      return setApod(res.data)
    }).catch(err => console.error(err))
  }, [])

  useEffect( () => {axios.get(`${BASE_URL}?count=${count}&thumbs=True&api_key=${API_KEY}
  `)
    .then(res => {
      return setCountImages(res.data)
    }).catch(err => console.error(err))
  }, [count])


  return (
    <DivApp>
      <Header />
      <Searchbar searchDate={searchDate} searchValue={searchValue} setSearchValue={setSearchValue} setSearchDate={setSearchDate}/>
      <Main apod={apod} apodDate={apodDate} searchDate={searchDate}/>
      <Body countImages={countImages} count ={count} increaseCount={increaseCount} 
      decreaseCount={decreaseCount} resetCount={resetCount} />
      <Footer />
    </DivApp>
  );
}


export default App;
