import React, {useState, useEffect} from 'react';
import Sidebar from '../Components/SidebarComponent/Sidebar';
import axios from 'axios'

function EventssApi() {
    const [events, getEvents] = useState('');

    const url ='http://localhost:1337/api/';

    useEffect(() => {
        getAllEvents();
    }, [])

    const getAllEvents = () => {
        axios.get(`${url}events`)
        .then((response) => {
            const allEvents = response.data.events.allEvents;
            getEvents(allEvents);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
  return (
    <div>{events}</div>
  )
}

export default EventssApi