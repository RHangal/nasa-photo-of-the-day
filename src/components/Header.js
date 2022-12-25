import React from "react";
import LogoIMG from "./LogoImg";
export default function Header(props) {
return (
    <header className="App-header">
        <h1>Welcome to the NASA APOD Gallery!</h1>
        <LogoIMG/>
    </header>
)
}