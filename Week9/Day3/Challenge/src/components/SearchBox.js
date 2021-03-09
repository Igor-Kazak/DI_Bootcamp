import React from 'react';

class SearchBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    mySearch = (event) => {
        //this.state.searchText = event.target.value;
        this.setState({text:event.target.value})
      }
    
    render() {
        const {text} = this.state;
        const { btn } = this.props;
    return (
        <div className="tc pa3">
            <input
                type="search"
                placeholder="Search fo robots"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={this.mySearch} />
            <button
                className="pa3 ba"
                onClick={()=>btn(text)}
            > Search </button>
        </div>
    )
    }
}

export default SearchBox;