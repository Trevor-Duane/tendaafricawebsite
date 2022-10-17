import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Card} from 'react-bootstrap';
import '../../sidebar.css';

function EventsTimeline() {
    const [events, setEvents] = useState([]); 

    useEffect(() => {
        async function loadEvents(){
            axios.get("http://backend.tendaafrica.com/public/api/posts")
            .then(res => {
                const homePostsEvents = res.data
                console.log("event posts", res.data)
                const homePostsEventsFiltered = homePostsEvents.filter(homePostsEvent => {
                    return homePostsEvent.category_id === "3" && homePostsEvent.pstatus === "published";
                })
                setEvents(homePostsEventsFiltered)
            })
            .catch(err => console.log(err))
        }
        loadEvents();
    }, [])

  return (
    <div className="eventWrapper">
        <h6 className="postsWrapperHead">Happening Now</h6>
        {/* <hr></hr> */}
            {events.map((event, index) => (
        <div className="card-img-overlay box" key={event.id}>
                <img className="card-img-top" src={event.image} alt=""/>
            <div className="eventBanner">
                <h6 class="card-title text">{event.title}</h6>
                {/* <p class="text eventBody" dangerouslySetInnerHTML={{__html: event.body}}></p> */}
            </div>
        </div>
            ))}
    </div>
  )
}

export default EventsTimeline