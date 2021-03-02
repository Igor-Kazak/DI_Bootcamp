import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import 'tachyons';
import SearchBox from './components/SearchBox';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      rb: [],
      searchText: '',
      textToSearch: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ rb: data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  myButton = (searchText) => {
    this.setState({textToSearch:searchText})
  }

  mySearch = (event) => {
    //this.state.searchText = event.target.value;
    this.setState({searchText:event.target.value})
  }

  render() {

    const { rb, textToSearch } = this.state;
      const filtered = rb.filter(item => {
        return item.name.toLowerCase().includes(textToSearch.toLowerCase())
      })

    return (
      <React.Fragment>
        <SearchBox search={this.mySearch} btn={this.myButton}/>
        <div className='tc'>
          {
            filtered.map((item, i) => {
              return <Card id={item.id} name={item.name} email={item.email} key={i} />
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <Hello />
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
