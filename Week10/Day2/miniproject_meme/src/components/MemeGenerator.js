import React from 'react';

class MemGenerator extends React.Component {

    constructor() {
        super();
        this.state = {
            allMemeImgs: [],
            topText: 'TOP TEXT',
            bottomText: 'BOTTOM TEXT',
            randomImage: 'https://i.imgflip.com/1bij.jpg'
        }
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                this.setState({ allMemeImgs: data.data.memes });
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleClick = (event) => {
        event.preventDefault();
        let rnd = parseInt(Math.random() * 100);
        let image = this.state.allMemeImgs[rnd].url;
        this.setState({ randomImage: image })

    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        const { randomImage, topText, bottomText } = this.state;
        return (
            <>
                    <form className="meme-form">
                        <input type="text" onChange={this.handleChange} id="topText" placeholder="Top text" />
                        <input type="text" onChange={this.handleChange} id="bottomText" placeholder="Bottom text" />
                        <button onClick={this.handleClick}>Generate</button>
                    </form>
                <div className="meme">
                    <img src={randomImage} alt="meme" />
                    <h2 className="top">{topText}</h2>
                    <h2 className="bottom">{bottomText}</h2>
                </div>
            </>
        )
    }
}

export default MemGenerator;