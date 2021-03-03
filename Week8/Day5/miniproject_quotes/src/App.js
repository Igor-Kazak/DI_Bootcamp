//import logo from './logo.svg';
import './App.css';
//import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';
import quotes from './QuotesDatabase';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      random: parseInt(Math.random() * quotes.length),
    }
  }

  getRandom = () => {
    let a = parseInt(Math.random() * quotes.length);
    this.setState({ random: a })
  }

  render() {

    return (
      <Card className="text-center">
        <Card.Header>Random Quote Generator</Card.Header>
        <Card.Body>
          <Card.Title>"{quotes[this.state.random].quote}"</Card.Title>
          <Card.Text>
            -{quotes[this.state.random].author}-
          </Card.Text>
          <Button
            variant="primary"
            onClick={this.getRandom}
          >Another qoute</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default App;
