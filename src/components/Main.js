import React from "react";

export default function Main(props) {
    const {apod, apodDate, searchDate} = props
return (
    !searchDate ?
    <section id='Main'>
     <div className='Main--container'>
        <div className="Main--imgContainer">
        {!apod.hdurl ? <img id='Main--img'src={`${apod.thumbnail_url}`} alt='video thumbnail'/> : <img id='Main--img'src={`${apod.hdurl}`} alt="a celestial body NASA has captured and shared with the public for today's date"/>}
        </div>
        <div className="Main--articleContainer">
            <h2>{apod.title}</h2>
            <h3>{apod.date}</h3>
            <p>{apod.explanation}</p>
            {apod.copyright && <h6>Copyright: {apod.copyright}</h6>}
        </div>
        </div>   
    </section>
    :

    <section id='Main'>
     <div className='Main--container'>
        <div className="Main--imgContainer">
        {!apodDate.hdurl ? <img id='Main--img'src={`${apodDate.thumbnail_url}`} alt='video thumbnail'/> : <img id='Main--img'src={`${apodDate.hdurl}`} alt="a celestial body NASA has captured and shared with the public for today's date"/>}
        </div>
        <div className="Main--articleContainer">
            <h2>{apodDate.title}</h2>
            <h3>{apodDate.date}</h3>
            <p>{apodDate.explanation}</p>
            {apod.copyright && <h6>Copyright: {apod.copyright}</h6>}
        </div>
        </div>   
    </section>
)
}