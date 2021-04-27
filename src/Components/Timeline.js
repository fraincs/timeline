import React from 'react'
import Event from "./Event";

function Timeline(events) {
    const eventsData = events.data;

    const event = Object.keys(eventsData).map(key => (
        <Event data={eventsData[key]} key={eventsData[key]["id"]}/>
        ));
    return (
        <div className="events">
            {event}
        </div>
    );
}

export default Timeline;