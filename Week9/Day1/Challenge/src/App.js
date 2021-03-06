import React from 'react';
import './App.css';
import 'tachyons';
import Countries from './components/Countries';
import PrintTable from './components/PrintTable';
import SearchBox from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchtext: '',
      result: []
    }
  }

  componentDidMount() {
    this.setState({ data: Countries })
  }


  handleChange = (event) => {
    let text = event.target.value;
    if (text !== '') {
      this.setState({
        searchtext: text,
        result: this.state.data.filter(item => {
          return item.includes(text)
        })
      });
    }
    else {
      this.setState({ result: []});
    }
  }

  handleMouse = (event) => {
    let id = event.target.id;
    document.getElementById(id).style.color = 'blue';
  }

  handleOut = (event) => {
    let id = event.target.id;
    document.getElementById(id).style.color = 'black';
  }

  handleClick = (event) => {
    document.getElementById('textInp').value = event.target.textContent;
    this.setState({ result: [] })
  }

  render() {
    let q = this.state.result.length
    return (
      <React.Fragment>
        <div className="box tc" >
          <SearchBox handleChange={this.handleChange} /> {q}
        </div>
        <div className="box tc">
          <ul className="list-group">
            {
              this.state.result.map((item, i) => {
                return <PrintTable
                  content={item} key={i} id={i}
                  handleClick={this.handleClick}
                  handleMouse={this.handleMouse}
                  handleOut={this.handleOut} />
              })
            }
          </ul>
        </div>
      </React.Fragment>
    )
  }

}

export default App;
