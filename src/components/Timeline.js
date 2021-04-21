import React from 'react'

function Timeline(events) {
    const data = events.data;

    const addToBookmark = function(key) {
        let favorites = localStorage.getItem("favorites");
        favorites = favorites ? favorites.split(","): [];
        if (!favorites.includes(key)) {
            favorites.push(key);
        } else {
            for (var i = 0; i < favorites.length; i++) {
                if (favorites[i] === key) {
                    favorites.splice(i, 1);
                }
            }
        }
        localStorage.setItem('favorites', favorites.toString());
    }

    const event = Object.keys(data).map(key => (
        <div key={data[key]["id"]}>
            <h3>{data[key]["name"]}</h3>
            <p>{data[key]["secretIdentity"]}<span>*</span></p>
            <button onClick={() => addToBookmark(data[key]["id"])}>Bookmark</button>
        </div>
        ));
    return (
        <>
            {event}
        </>
    );
}

export default Timeline;