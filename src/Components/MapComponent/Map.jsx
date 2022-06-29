import React from 'react';
import { Container } from 'react-bootstrap';
import './map.css';

export default function Map() {
  return (
    <div className="mapWrapper p-0 m-0">
        <Container className="mapContainer">
            <h4>Find Us on Google Maps</h4>
            <p>Are you busy wondering how you can  quickly locate us. Quickly and easily Find us on google maps</p>
            <div className="the-map">
                <iframe className="location" title="tenda-location" width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Tenda%20Africa%20Limited,%20Kampala%20-%20Entebbe%20Rd,%20Kampala&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </Container>

    </div>
  )
}
