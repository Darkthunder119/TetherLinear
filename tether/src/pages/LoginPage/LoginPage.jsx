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
    <div className="form-page">
      <div className="form-page__overlay"></div>
      <div className="form-page__form">
        <div className="form-page__row">
            <button onClick={this.onGitHubHandler} className="form-page__button form-page__button--gh" name="git">Connect with Github</button>
        </div>
        <div className="form-page__row">
            <button onClick={this.onGoogleHandler} className="form-page__button form-page__button--go" name="face">Connect with Google</button>
        </div>
      </div>
    </div>
  );}
}

export default LoginPage;