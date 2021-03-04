import React from 'react';
import './App.css';
import Card from './components/Card';
import Heroes from './components/Heroes';
import 'tachyons';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      rb: Heroes,
      random: [],
      hasclicked: [],
      counter: 0,
      top: 0
    }
  }

  componentDidMount() {
    let arr = [];
    for (let i = 0; i < Heroes.length; i++) {
      let rnd = parseInt(Math.random() * (Heroes.length));
      let st = false;
      for (let j = 0; j < arr.length; j++) {
        if (rnd === arr[j]) {
          st = true;
        }
      }
      if (st) {
        i--;
      }
      else {
        arr.push(rnd);
      }
    }

    let sorted = [];
    for (let i = 0; i < this.state.rb.length; i++) {
      sorted.push(this.state.rb[arr[i]]);
    }
    this.setState({ random: sorted })
  }

  clickMe = (id) => {
    let arrC = this.state.hasclicked;
    let st = false;
    for (let i = 0; i < arrC.length; i++){
      if (id === arrC[i]){
        st = true;
      }
    }
    if (st === false){
      arrC.push(id);
      this.setState({counter: (this.state.counter + 1)})
    }
    else {
      if (this.state.counter > this.state.top) {
        this.setState({top: this.state.counter});
      }
      this.setState({counter: 0, hasclicked: []});
    }
    this.componentDidMount();
  }

  render() {
    
    const { random, counter, top } = this.state;

    return (
      <React.Fragment>
        <h3 className='tc'>
          Score: {counter} | Top score: {top}
        </h3> 
        <div className='tc'>
          {
            random.map((item, i) => {
              return <Card clk={this.clickMe} id={item.id} name={item.name} occupation={item.occupation} image={item.image} key={i} />
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
