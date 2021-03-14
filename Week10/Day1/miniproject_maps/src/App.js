import React from 'react';
import './App.css';
import 'tachyons';
import GoogMap from './components/GoogMap'

function App() {

  return (
    <React.Fragment>
      <div className='center' style={{width: '70%', marginTop: '30px' }}>
        <h3 className='center'>Mini-Project: Google Map</h3>
        <GoogMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
