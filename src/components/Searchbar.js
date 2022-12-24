import React from "react";

export default function Searchbar(props) {
    const {searchValue,searchDate, setSearchDate, setSearchValue} = props

    const changeHandler = event => {
        event.stopPropagation();
    // event.stopImmediatePropagation();
    return ( setSearchValue(event.target.value) )
   }

   const clickHandler = event => {
    event.stopPropagation();
    // event.stopImmediatePropagation();
    return ( setSearchDate(searchValue))
   }

    return (
        <section id='Searchbar'>
            <div className="searchbar--title">
            <h2>APOD: Astronomy Photo Of the Day</h2>
            <h3>View APODs by date using the Searchbar below! </h3>
            </div>
            <div className="searchbar--container">
                <form className="search--form">
                    <input
                    type='text'
                    placeholder="YYYY-MM-DD"
                    onChange={changeHandler}
                    />
                    <button
                    type='button'
                    value='Search'
                    onClick={clickHandler}
                    > Search </button>
            
                </form>
            </div>
        </section>
    )
}