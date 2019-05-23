import React, { Component } from 'react'
import './Splash.css'

export default class Splash extends Component {

    render() {

       const clickChange = () =>  {
                document.getElementById("Column1").style.display = "none";
                document.getElementById("Column2").style.display = "none";
                document.getElementById("Column3").style.display = "none";
        }

        return (
            <div className="SplashComponent">
                <section className="firstColumn" id="Column1">
                </section>

                <section className="secondColumn" id="Column2">

                </section>

                <section className="thirdColumn" id="Column3">
                    <button onClick={clickChange}>Register</button>

                </section>
            </div>
        )
    }
}
