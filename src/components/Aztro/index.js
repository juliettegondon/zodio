import React, { Component } from 'react';
import './style.css'
class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=libra&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

/*     componentDidUpdate(){
        let Date = this.state.json.current_date;
        if(Date || typeof Date == "string") {
            console.log("Valid");
            let newDate = Date.toLowerCase();
            console.log(newDate);
         }
        else {
            console.log("!not a string");
         }
    }
 */

    render() {
        return (
          <div className="today">
              <h1>today's date:</h1>
              <p className>{this.state.json.current_date} <br /></p>
          </div>
        );
    }
}

export default Aztro;