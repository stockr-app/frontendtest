import React, { Component } from 'react'
import axios from 'axios';

export default class Stocktable extends Component {

    state = {
        user_id: '',
        stocks: []
    }

    componentDidMount(){       
        let data = JSON.parse(sessionStorage.getItem('STATE'));
        this.setState({user_id: data.user_id});
      }

    render() {
        return (
            <div>
                <p>{this.state.user_id}</p>
            </div>
        )
    }
}
