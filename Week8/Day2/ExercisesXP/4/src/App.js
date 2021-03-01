//import logo from './logo.svg';
import './App.css';
import BootstrapCard from './BootstrapCard';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <BootstrapCard title='McCartney'
      imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
      buttonLabel='Go to Wikipedia'
      buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
      description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
      />
    </React.Fragment>
    )
  }
}

export default App;
