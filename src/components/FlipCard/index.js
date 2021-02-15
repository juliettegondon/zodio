import React, { Component } from 'react';
import './style.css'
import ReactCardFlip from 'react-card-flip';


class FlipCard extends Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {

      
      return (
        <div>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
         <div className="card col-sm-12 col-md-4" onClick={this.handleClick}>
            <h1>{FlipCard.Title}!!!</h1>
          </div>
          <div className="card col-sm-12 col-md-4" onClick={this.handleClick}>
            <h1>Sign Name</h1>
          </div>
        </ReactCardFlip>
    
        </div>

        
      )
    }
  }
  export default FlipCard;