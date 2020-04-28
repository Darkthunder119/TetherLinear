import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import Body from "../../components/Body/Body";
import "./MainPage.scss";
import * as firebase from "firebase";
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import CreateModal from "../../components/CreateModal/CreateModal";

class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.auth = firebase.auth();
    this.state = {
      user: "",
      modalIsOpen: false,
    };
  }
  mounted = false;

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modaIsOpen: false });
  };

  authChange() {
    this.auth.onAuthStateChanged((cred) => {
      if (this.mounted) {
        if (cred) {
          this.setState({ user: cred.email }, () =>
            console.log("statechanged", this.state.user)
          );
        } else {
          this.props.history.push("/login");
          console.log("signout detected since no login");
        }
      }
    });
  }

  componentDidMount() {
    this.mounted=true;  
    this.authChange();
    console.log("didMount");
  }
  componentDidUpdate() {
    if (!this.state.user && this.mounted) {
      this.authChange();
      console.log('hello');
    }
    console.log("didUpdate");
  }

  componentWillUnmount(){
      this.mounted=false;
  }

  render(){
    return <>
      <SideNav />
      <HeaderNav
      openModal={this.openModal}
      />
      <CreateModal 
      isOpen={this.state.modalIsOpen}
      closeModal={this.closeModal}
      />
      <Body />
    </>
  }
}

export default MainPage;
