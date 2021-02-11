import React, { Component } from 'react';
import './style.css'
import ReactCardFlip from 'react-card-flip';
import CardInfo from '../CardInfo';

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
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
         <div className="card col-sm-12 col-md-4" onClick={this.handleClick}>
            <h1><CardInfo /></h1>
          </div>



          <div className="card col-sm-12 col-md-4" onClick={this.handleClick}>
          </div>

          
        </ReactCardFlip>
      )
    }
  }
  export default FlipCard;