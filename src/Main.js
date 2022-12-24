import React from "react";

export default function Main(props) {
    const {apod} = props
return (
    <section id='Main'>
     <div className='Main--container'>
        <div className="Main--imgContainer">
            <img id='Main--img'src={`${apod.hdurl}`} alt="a celestial body NASA has captured and shared with the public for today's date"/>
        </div>
        <div className="Main--articleContainer">
            <h2>{apod.title}</h2>
            <h3>{apod.date}</h3>
            <p>{apod.explanation}</p>
            {apod.copyright && <h6>Copyright: {apod.copyright}</h6>}
        </div>
        </div>   
    </section>
)
}