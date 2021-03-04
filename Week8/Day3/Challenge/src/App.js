import React from 'react';
import './App.css';
import 'tachyons';
import UserData from './components/UserData';
import ShowUser from './components/ShowUser';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      age: '',
      gender: '',
      destination: '',
      nutsfree: 'No',
      lactosfree: 'No',
      vegan: 'No'
    }
  }


  handleChange = (event) => {
    if (event.target.name !== 'nutsfree' && event.target.name !== 'lactosfree' && event.target.name !== 'vegan') {
      this.setState({ [event.target.name]: event.target.value })
    }
    else {
      if (this.state[event.target.name] === 'No') {
        this.setState({ [event.target.name]: 'Yes' })
      }
      else {
        this.setState({ [event.target.name]: 'No' })
      }
    }

  }

  handleSubmit = (event) => {
    // event.preventDefault();
    fetch(`http://localhost:3000/?${this.setState.firstname}`)
    .then(res => {console.log('Data has been sent')})
    .catch(e => {console.log(e)})
  }

  render() {
    return (
      <React.Fragment>
        <div className="box tc" >
          <UserData handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </div>
        <div className="box tc" >
          <ShowUser stt={this.state} />
        </div>
      </React.Fragment>
    )
  }

}

export default App;
