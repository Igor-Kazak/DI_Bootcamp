import React from 'react';
import './App.css';
import 'tachyons';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      answer: ''
    }
  }

  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {message: document.getElementById('inpt').value};
    console.log(obj);
    fetch('http://localhost:5000/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({answer: data.answer})
      })
      .catch(err => {
        console.log(err);
      })

  }

  render() {

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" style={{margin:"10px"}} id="inpt"/>
          <input type="submit" value="Send"/>
        </form>
        <p style={{margin:"10px"}}>Response from the server:</p>
        <p style={{margin:"10px", color:"blue"}}>{this.state.answer}</p>
      </React.Fragment>
    );
  }
}

export default App;
