import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogMap =  withScriptjs(withGoogleMap((props) => 
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 32.0853, lng: 34.7818 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    ));

export default GoogMap;
