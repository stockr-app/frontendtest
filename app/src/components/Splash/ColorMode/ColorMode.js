import React, { Component } from 'react'

export default class ColorMode extends Component {

    render() {
        return (
            <div>
                <button onClick={this.lightMode}>Light</button>
                <button onClick={this.darkMode}>Dark</button>
            </div>
        )
    }
}
