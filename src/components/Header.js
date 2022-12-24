import React from "react";
import nasaLogo from '../images/NASA_logo.svg.png'
export default function Header(props) {
return (
    <header className="App-header">
        <h1>Welcome to the NASA APOD Gallery!</h1>
        <img className='App-logo' src = {`${nasaLogo}`} alt="the nasa logo"/>
    </header>
)
}