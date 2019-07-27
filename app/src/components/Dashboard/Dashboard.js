import React, { Component } from 'react';
import Ticker from '../Ticker/Ticker';
import News from '../News/NewsView'
import './Dashboard.css';
import QuickSearch from '../QuickSearch/QuickSearch';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import {Redirect} from 'react-router-dom';
import IPO from '../IPO/IPO';
export default class Dashboard extends Component {


state = {
    first_name: ''
}
 
  

    componentDidMount(){
        let data = JSON.parse(sessionStorage.getItem('STATE'));
        this.setState({
            first_name: data.first_name,
            sign_up_date: data.sign_up_date
        });
    }
    
    render() {
        //IF NO ITEM IN LOCALSTORAGE, USER IS REDIRECTED TO SPLASH PAGE
        if(!sessionStorage.getItem('STATE')){
            return(<Redirect to={'/'}/>)
          }
        return (
            <div>
                <Ticker />
                <NavBar />
                <QuickSearch />
                    <div className="Dashboard">
                    <div className="News">
                        <hr></hr>
                    <News />               
                    </div>
                    </div>
                    <IPO />
                <Footer />
            </div>
        )
    }
}
