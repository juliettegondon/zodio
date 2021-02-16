import React, { Component } from 'react';


class Virgo extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=Virgo&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
          <div>
            <h1>Virgo</h1>
              compatibility: {this.state.json.compatibility} <br />
              lucky number: {this.state.json.lucky_number} <br />
              lucky time: {this.state.json.lucky_time} <br />
              color: {this.state.json.color} <br />
              date range: {this.state.json.date_range} <br />
              mood: {this.state.json.mood} <br />
              description: {this.state.json.description} <br />
              <br />
          </div>
        );
    }
}
export default Virgo;