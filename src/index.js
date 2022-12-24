import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = 'FRJ5D5mL34Nzd8hTUgUXJ6rAu9DYTOL67ANjXMYi'

ReactDOM.render(<App />, document.getElementById("root"));
