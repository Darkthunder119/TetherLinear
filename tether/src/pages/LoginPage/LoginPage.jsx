import React, {Component} from 'react';
import * as firebase from 'firebase';
import './LoginPage.scss';

import blue from "../../assets/shapes/bluebackground.svg";
import computers from "../../assets/images/computers.svg";
import logo from "../../assets/icons/logo.svg";
import github from "../../assets/icons/github.svg";
import google from "../../assets/icons/google.svg";

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.auth = firebase.auth();
        this.gitProvider = new firebase.auth.GithubAuthProvider();
        this.googProvider = new firebase.auth.GoogleAuthProvider();
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }  

  onGitHubHandler = e => this.auth.signInWithPopup(this.gitProvider).then(data=>this.props.history.push('/')).catch(err=>console.log(err));
  
  onGoogleHandler = e => this.auth.signInWithPopup(this.googProvider).then(data=>this.props.history.push('/')).catch(err=>console.log(err));

  render(){

  return(
        <div className="login-page">
            <div className="login-page__overlay"></div>
            <div className="login-page__header">
                <img src={logo}/>
            </div>
            <div className="login-page__container">
                <div className="login-page__options">
                    <h1 
                        className="login-page__option login-page__option--login">
                        Login
                    </h1>
                    <h1 
                        className="login-page__option login-page__option--signup">
                        Sign Up
                    </h1>
                </div>
                <form className="login-page__login">
                    <input 
                        className="login-page__input" 
                        placeholder="Username"
                    />
                    <input 
                        className="login-page__input" 
                        placeholder="Password"
                    />
                    <label className="login-page__remember">
                        <input className="login-page__check" type="checkbox"/>
                        Stay Logged In
                    </label>
                    <button 
                        className="login-page__submit">
                        Log In
                    </button>
                    <span className="login-page__seperation">--------------- Or ---------------</span>
                    <div >
                        <button onClick={this.onGoogleHandler} className="login-page__button login-page__button--go" name="face">
                            <img className="login-page__icon" src={google} />
                            Sign in with Google
                        </button>
                        <button onClick={this.onGitHubHandler} className="login-page__button login-page__button--gh" name="git">
                            <img className="login-page__icon" src={github} />
                            Sign in with Github
                        </button>
                    </div>
                </form>
            </div>
            <div className="login-page__promo">
                <img className="login-page__preview" src={computers}/>
            </div>
            <img className="login-page__accent" src={blue}/>
    </div>
  );}
}

export default LoginPage;



/*

import React, {Component} from 'react';
import * as firebase from 'firebase';
import './LoginPage.scss';

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.auth = firebase.auth();
    this.gitProvider = new firebase.auth.GithubAuthProvider();
    this.googProvider = new firebase.auth.GoogleAuthProvider();
  }  

  onGitHubHandler = e => this.auth.signInWithPopup(this.gitProvider).then(data=>this.props.history.push('/')).catch(err=>console.log(err));
  
  onGoogleHandler = e => this.auth.signInWithPopup(this.googProvider).then(data=>this.props.history.push('/')).catch(err=>console.log(err));

  render(){
  return(
    <div className="login-page">
      <div className="login-page__overlay"></div>
      <div className="login-page__form">
            <button onClick={this.onGitHubHandler} className="login-page__button login-page__button--gh" name="git">Connect with Github</button>
            <button onClick={this.onGoogleHandler} className="login-page__button login-page__button--go" name="face">Connect with Google</button>
      </div>
    </div>
  );}
}

export default LoginPage;

*/