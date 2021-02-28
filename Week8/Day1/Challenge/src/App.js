import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Card from './components/Card';
import 'tachyons';
import DemoCarousel from './components/DemoCarousel'
import './demo.css'

class App extends React.Component {
  render() {
    return (
      <div className="canvas">
      <div className="tc">
        <DemoCarousel />
      </div>
      </div>
    )
  }
}


// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       rb: []
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//       this.setState({rb:data});
//     })
//     .catch(e => {
//       console.log(e);
//     });
//   }

//   render() {
//     // const robots = [
//     //   {id:1, name:'One', email:'123@123.123'},
//     //   {id:2, name:'Two', email:'323@323.323'},
//     //   {id:3, name:'Three',  email:'523@523.523'}
//     // ];

//     const {rb} = this.state;

//     return (
//       //<React.Fragment>
//       <div className='tc'>
//         {
//           rb.map((item, i) => {
//             return <Card id={item.id} name={item.name} email={item.email} key={i}/>
//           })
//         }
//       </div>
//       //</React.Fragment>
//     );
//   }
// }

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
