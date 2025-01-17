// Code SimpleComponent Here
import React, { Component} from 'react';


export default class SimpleComponent extends Component {
   constructor(props){
        super(props)
        this.state = {
        mood: "happy"
        };
    };
    handleClick= event => {
        this.setState({ mood: this.state.mood === 'happy' ? 'sad': 'happy'})
    }

    render(){
        return (
            <div onClick={() => this.handleClick()}>
                <button>{this.state.mood}</button>
                
            </div>
        )
    }
}