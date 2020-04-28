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