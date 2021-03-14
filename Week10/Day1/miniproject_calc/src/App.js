import React from 'react';
import './App.css';
import 'tachyons';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentNumber: '',
      prevNumber: '',
      isOn: false,
      doAction: '',
    }
  }


  componentDidMount() {
  }

  handleOn = () => {
    if (!this.state.isOn) {
      this.setState({ isOn: true, currentNumber: 0 });
    }
  }

  handleOff = () => {
    if (this.state.isOn) {
      this.setState({ isOn: false, currentNumber: '' });
    }
  }

  handleReset = () => {
    if (this.state.isOn) {
      this.setState({ currentNumber: 0, prevNumber: '', doAction: '' });
    }
  }

  handleDigit = (digit) => {
    let { currentNumber, isOn } = this.state;
    if (isOn && currentNumber !== 'error') {
      this.setState({ currentNumber: parseFloat(currentNumber + '' + digit) });
    }
  }

  handleDot = () => {
    let { currentNumber, isOn } = this.state;
    if (isOn && currentNumber !== 'error') {
      this.setState({ currentNumber: currentNumber + '.' });
    }
  }

  handleAction = (action) => {
    let { currentNumber, isOn } = this.state;
    if (isOn && currentNumber !== 'error') {
        this.setState({ prevNumber: currentNumber, currentNumber: '', doAction: action });
    }
  }

  handleResult = () => {
    let { doAction, prevNumber, currentNumber, isOn } = this.state;
    if (isOn && currentNumber !== 'error') {
      if (doAction !== '' && prevNumber !== '' && currentNumber !== '') {
        switch (doAction) {
          case '/':
            if (currentNumber !== 0) {
              this.setState({currentNumber: prevNumber / currentNumber});
            }
            else {
              this.setState({currentNumber: 'error', });
            }
            break;
          case '*':
            this.setState({currentNumber: prevNumber * currentNumber});
            break;
          case '-':
            this.setState({currentNumber: prevNumber - currentNumber});
            break;
          case '+':
            this.setState({currentNumber: prevNumber + currentNumber});
            break;
          default:
            break;
        }
      }
    }
  }


  render() {
    let { doAction, prevNumber, currentNumber, isOn } = this.state;
    console.log('action:', doAction, 'prevN:', prevNumber, 'currN:', currentNumber, 'on:', isOn)
    return (
      <React.Fragment>
        <div className="center yellow container"
          style={{ width: "250px", marginTop: "30px", padding: "10px 10px 2px 10px" }}>
          <div className="row">
            <div className="black"
              style={{ width: "230px", height: "30px", color: "white", padding: "7px", textAlign: "right", fontWeight: "bold" }}
            >{this.state.currentNumber}</div>
          </div>
          <div className="row">
            <div className="col green" onClick={this.handleOn}
              style={{ width: "50px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >ON</div>
            <div className="col black" onClick={this.handleOff}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >OFF</div>
            <div className="col red" onClick={this.handleReset}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >AC</div>
            <div className="col black" onClick={() => this.handleAction('/')}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >/</div>
          </div>
          <div className="row">
            <div className="col black" onClick={() => this.handleDigit(7)}
              style={{ width: "50px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >7</div>
            <div className="col black" onClick={() => this.handleDigit(8)}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >8</div>
            <div className="col black" onClick={() => this.handleDigit(9)}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >9</div>
            <div className="col black" onClick={() => this.handleAction('*')}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >*</div>
          </div>
          <div className="row">
            <div className="col black" onClick={() => this.handleDigit(4)}
              style={{ width: "50px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >4</div>
            <div className="col black" onClick={() => this.handleDigit(5)}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >5</div>
            <div className="col black" onClick={() => this.handleDigit(6)}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >6</div>
            <div className="col black" onClick={() => this.handleAction('-')}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >-</div>
          </div>
          <div className="row">
            <div className="col black" onClick={() => this.handleDigit(1)}
              style={{ width: "50px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >1</div>
            <div className="col black" onClick={() => this.handleDigit(2)}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >2</div>
            <div className="col black" onClick={() => this.handleDigit(3)}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >3</div>
            <div className="col black" onClick={() => this.handleAction('+')}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >+</div>
          </div>
          <div className="row">
            <div className="col black" onClick={() => this.handleDigit(0)}
              style={{ width: "50px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >0</div>
            <div className="col black" onClick={this.handleDot}
              style={{ width: "50px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >,</div>
            <div className="col black" onClick={this.handleResult}
              style={{ width: "110px", marginLeft: "10px", padding: "5px", color: "white", textAlign: "center", cursor: "pointer" }}
            >=</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
