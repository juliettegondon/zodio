import React, { Component } from 'react';

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
/*          .then(json => json.toLowerCase()) */
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
          <div>
              <p>{this.state.json.current_date} <br /></p>
          </div>
        );
    }
}

export default Aztro;