import { useEffect, useState } from 'react'
import { getStorage, setStorage } from "../../Utils/Localstorage";

import { ReactComponent as Bookmark } from '../../assets/bookmark.svg';
import './event.css';

function Event(props) {
    const [bookmarked, setBookmark] = useState(false);

    useEffect(() => {
        // Update the event if item is bookmarked in localStorage  
        const bookmarks = getStorage("favorites");
        const bookmarksArr = bookmarks ? bookmarks.split(",") : "";
        Object.keys(props).map(key => (
            bookmarksArr.includes(props[key]["id"])) ? setBookmark(true) : ''
        );
    });

    const bookmarks = getStorage("favorites");

    // converting our string to an array since we can't store arrays in localStorage
    const bookmarksArr = bookmarks ? bookmarks.split(",") : "";

    // superseed events with our saved data
    Object.keys(props).map(key => (
        bookmarksArr.includes(props[key]["id"])) ? props[key]["isBookmarked"] = true : ''
    );

    // Whenvever an event is bookmarked we save it's state in localStorage, and update state
    const addToBookmark = function(key) {
        setBookmark(!bookmarked);
        let favorites = getStorage("favorites");
        favorites = favorites ? favorites.split(",") : [];
        if (!favorites.includes(key)) {
            favorites.push(key);
        } else {
            for (var i = 0; i < favorites.length; i++) {
                if (favorites[i] === key) {
                    favorites.splice(i, 1);
                }
            }
        }
        setStorage("favorites", favorites.toString());
    }

    const data = props.data;

    return (
        <div className={`event ${bookmarked ? 'event-bookmarked' : ''}`}>
            <h2 className="event-year">{data.year}</h2>
            <figure className="event-figure">
                <div className="event-image-wrapper">
                    <img src={data["img"]["src"]} alt={data["img"]["alt"]} className="event-image" />
                    <button className="button-bookmark" title="Bookmark" alt="Bookmark" onClick={() => addToBookmark(data["id"])}><Bookmark className="button-bookmark-icon" /></button>
                </div>
                <figcaption className="event-figcaption">
                    <p>{data.name}<br />{data.maker}</p>
                    <p>{data.dimensions}<br />{data.weight}</p>
                    <p>{data.material}</p>
                </figcaption>
            </figure>
            <div className="event-description-wrapper">
                <div className="event-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
        </div>
    )
}

export default Event;