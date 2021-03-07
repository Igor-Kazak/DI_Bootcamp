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
      posts: [],
      searchText: '',
      textToSearch: '',
      postsState: false
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
    this.setState({ textToSearch: searchText })
  }

  mySearch = (event) => {
    //this.state.searchText = event.target.value;
    this.setState({ searchText: event.target.value })
  }

  showPosts = (event) => {
    let id = event.target.id;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data, postsState: true });
      })
      .catch(e => {
        console.log(e);
      });
  }

  goHome = () => {
    this.setState({ posts: [], postsState: false, searchText:'', textToSearch:''  });
  }

  render() {

    const { rb, textToSearch, posts, postsState } = this.state;
    const filtered = rb.filter(item => {
      return item.name.toLowerCase().includes(textToSearch.toLowerCase())
    })
    if (posts.length === 0) {
      return (
        <React.Fragment>
          <SearchBox search={this.mySearch} btn={this.myButton} />
          <div className='tc'>
            {
              filtered.map((item, i) => {
                return <Card id={item.id} name={item.name} 
                email={item.email} key={i} 
                showPosts={this.showPosts} postsSt={postsState}/>
              })
            }
          </div>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          {/* <SearchBox search={this.mySearch} btn={this.myButton} /> */}
          <div className='tc pa3' onClick={this.goHome}>
          <button>Home</button>
          </div>
          <div className='tc'>
            {
              posts.map((item, i) => {
                return <Card id={item.id} name={item.title} email={item.body} key={i} postsSt={postsState}/>
              })
            }
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
