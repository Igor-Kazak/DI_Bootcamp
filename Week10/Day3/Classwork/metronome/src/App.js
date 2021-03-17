import React from 'react';
import './App.css';
import 'tachyons';
import click1 from './sounds/click1.wav'
import click2 from './sounds/click2.wav'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      bpm: 100,
      playing: false,
      count: 0,
      beats: 4
    }
    this.click1 = new Audio(click1)
    this.click2 = new Audio(click2)
  }

  componentDidMount() {
  }

  playClick = () => {
    const {count, beats} = this.state;
    if (count % beats === 0) {
      this.click2.play();
    }
    else {
      this.click1.play();
    }
    this.setState({count: this.state.count-(-1)})
  }

  handleBpmChange = (event) => {
    if (this.state.playing) {
      clearInterval(this.myTimer);
      this.myTimer = setInterval(this.playClick, (60/this.state.bpm)*1000);
      this.setState({count: 0, bpm: event.target.value});
    }
    else {
    this.setState({bpm: event.target.value});
    }
  }

  handleStartStop = () => {
    if (this.state.playing) {
      this.setState({playing: false});
      clearInterval(this.myTimer);
    }
    else {
      this.myTimer = setInterval(this.playClick, (60/this.state.bpm)*1000)
      this.setState({playing: true, count: 0}, this.playClick);
    }
  }

  render() {

    const {bpm, playing} = this.state;

    return (
      <div className='tc' style={{backgroundColor:"lightblue", margin:"10% 30% 10% 30%", 
      padding:"3%", borderRadius:"10px"}}>
        <div>
          <h3>{bpm} bpm</h3>
          <input type="range" min="60" max="300" value={bpm} 
          onChange={this.handleBpmChange} style={{width:"100%", margin:"3% 0 5% 0"}}
          />
        </div>
        <button onClick={this.handleStartStop}>{playing ? 'Stop' : 'Start'}</button>
      </div>
    );

  }
}


export default App;
