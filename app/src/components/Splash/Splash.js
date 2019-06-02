import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import './Splash.css';


export default class Facebook extends Component {

  state = {
    isLoggedIn: false,
    Facebookname: "",
    Facebookemail: "",
    Googlename: "",
    Googleemail: "",
  };

  onSuccess(resp) {
      console.log(resp)
      this.setState({
        Googlename: resp.profileObj.name,
        Googleemail: resp.profileObj.email
      })
  }

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      Facebookname: response.name,
      Facebookemail: response.email,
    });
  };

  facebookClicked = () => console.log("Facebook Auth Fired");

  render() {
    let fbContent;
    let googleContent;

    const clickChange = () =>  {
        document.getElementById("Column1").style.display = "none";
        document.getElementById("Column2").style.display = "none";
        document.getElementById("Column3").style.display = "none";
    }

    if (this.state.isLoggedIn) {
        fbContent = (
            <FacebookLogin
     appId="274333116817522"
     autoLoad={false}
     fields="name,email"
     onClick={this.facebookClicked}
     callback={this.responseFacebook}
     textButton='Sign up with Facebook'
     />
    )

    googleContent = (
        <GoogleLogin
            clientId="432634226022-37hop4nb2mal0810tile8vmlkf8f1rs3.apps.googleusercontent.com"
            buttonText="Sign up with Google"
            autoLoad={false}
            onSuccess={resp => this.onSuccess(resp)}
            cookiePolicy={'single_host_origin'}
            />
      )

    } else {
        
      fbContent = (
        <FacebookLogin
          appId="274333116817522"
          autoLoad={false}
          fields="name,email"
          onClick={this.facebookClicked}
          callback={this.responseFacebook}
          textButton='Sign up with Facebook'
          />
      );

      googleContent = (
        <GoogleLogin
            clientId="432634226022-37hop4nb2mal0810tile8vmlkf8f1rs3.apps.googleusercontent.com"
            buttonText="Sign up with Google"
            autoLoad={false}
            onSuccess={resp => this.onSuccess(resp)}
            cookiePolicy={'single_host_origin'}
            />
      );
    }

    return (
    <div>
        <nav className="splashNav">
            <img className="splashLogo" alt="StockrLogo" src={require("../../components/Splash/stockrlogo.png")}/>
        </nav>

        <div className="splashContent"> 
            <div className="splashText">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut gravida, erat at semper semper, elit dui accumsan purus, 
                nec tristique neque est ac odio. Proin sodales, orci non 
                condimentum aliquam, erat lacus sollicitudin arcu, vel auctor 
                ex justo sit amet neque. Etiam at cursus lacus, vel laoreet 
                leo. Aenean efficitur nulla in ante vulputate, et pretium ex 
                maximus. Praesent condimentum metus id cursus interdum. In 
                hac habitasse platea dictumst. Curabitur turpis neque, 
                cursus feugiat auctor sit amet, faucibus convallis libero. 
                Pellentesque eu condimentum ipsum, a laoreet lacus. Praesent 
                consectetur tempor lorem et iaculis. Cras porta fringilla 
                neque, eu molestie est viverra eu. Pellentesque tellus dolor, 
                vestibulum in volutpat eget, euismod non tortor. Etiam eget 
                lectus vestibulum, accumsan massa eget, malesuada lorem. 
                Mauris eget quam scelerisque, tempor diam vitae, rhoncus nisi. 
                Quisque ultricies rutrum turpis, sit amet blandit odio sagittis 
                in. Ut augue odio, egestas ut urna sit amet, maximus pretium 
                massa. Duis sit amet rhoncus orci. Pellentesque iaculis porta 
                magna scelerisque blandit. Pellentesque iaculis porta 
                magna scelerisque blandit. Quisque ultricies rutrum turpis, 
                sit amet blandit odio sagittis in. 
                </p>
            </div>
        

        <div>
            <div className="splashLogoDiv">
                    <img className="splashBigLogo" alt="StockrLogo" src={require("../../components/Splash/faviconGreensquare.png")} />
                </div>
                    <section className="firstColumn" id="Column1"></section>
                    <section className="secondColumn" id="Column2"></section>
                    <section className="thirdColumn" id="Column3"></section>
            </div>

            <div className="splashForm">
                <form>
                    <h1>Sign Up</h1>
                    <h3>Name</h3>
                    <input type="text" defaultValue={this.state.Facebookname || this.state.Googlename}></input>
                    <h3>Email</h3>
                    <input type="text" defaultValue={this.state.Facebookemail || this.state.Googleemail} ></input>
                    <h3>Phone Number</h3>
                    <input placeholder="phone number"></input>
                    <div>
                        <div>{fbContent}</div>
                        <div>{googleContent}</div>
                    </div>
                </form>
                <button onClick={clickChange}>Register</button>
            </div>
        </div>
    </div>
    )}
}