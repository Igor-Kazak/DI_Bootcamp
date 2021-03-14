import React, { useState, useEffect } from 'react';
import './App.css';
import 'tachyons';
import Card from './components/Card';
import SearchBox from './components/SearchBox';

function App() {

  const [rb, setRb] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [textToSearch, setTextToSearch] = useState('');
  const [postsState, setPostsState] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setRb(data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const myButton = (searchText) => {
    setTextToSearch(searchText);
  }

  const mySearch = (event) => {
    setSearchText(event.target.value);
  }

  const showPosts = (event) => {
    let id = event.target.id;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setPostsState(true);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const goHome = () => {
    setPosts([]);
    setPostsState(false);
    setSearchText('');
    setTextToSearch('');
  }

  const filtered = rb.filter(item => {
    return item.name.toLowerCase().includes(textToSearch.toLowerCase())
  });

  if (posts.length === 0) {
    return (
      <React.Fragment>
        <SearchBox search={mySearch} btn={myButton} />
        <div className='tc'>
          {
            filtered.map((item, i) => {
              return <Card id={item.id} name={item.name}
                email={item.email} key={i}
                showPosts={showPosts} postsSt={postsState} />
            })
          }
        </div>
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>
        <div className='tc pa3' onClick={goHome}>
          <button>Home</button>
        </div>
        <div className='tc'>
          {
            posts.map((item, i) => {
              return <Card id={item.id} name={item.title} email={item.body} key={i} postsSt={postsState} />
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
