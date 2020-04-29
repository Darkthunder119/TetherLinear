import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import Body from "../../components/Body/Body";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import CreateModal from "../../components/CreateModal/CreateModal";
import "./MainPage.scss";
import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-database";
import axios from "axios";

const API_URL = "https://bstn-jira-integration.herokuapp.com";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.users = firebase.database().ref("users");
    this.state = {
      user: "",
      modalIsOpen: false,
      usersList: [],
      jiraList: [],
    };
  }
  mounted = false;

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ modalIsOpen: false });
  };

  /*=====================================================
  =  DATABASE SPECIFIC FUNCTIONS (ONLY FOR POPULATIONS) = 
  ======================================================*/

  populateJiraTasks = () => {
    const { id } = this.state.user;

    this.users.child(id + "/jiraTasks").push({
      isCompleted: false,
      isInProgress: false,
      name: "somerandomtext",
      priority: "high",
      ticketNumber: "WF-203",
      details: "John is really awesome I like his eyes",
    });
  };

  createNewUser = (email) => {
    let name = email.split("@")[0];
    console.log(name);
    this.users.push({
      name,
      email,
      currentTask: "",
      jiraTasks: [],
    });
  };

  /*=====================================================
  =         DATABASE SPECIFIC FUNCTIONS END             = 
  ======================================================*/

  convertObjectToArray = (obj) => {
    let keysArray = Object.keys(obj);
    let valuesArray = Object.values(obj);
    obj = keysArray.map((key, i) => {
      return { id: key, value: valuesArray[i] };
    });
    return obj;
  };

  retrieveUsersFromDatabase = (currentUser) => {
    this.users.on("value", (snap) => {
      let user = Object.entries(snap.val()).find(
        (user) => user[1].email === currentUser
      );
      let currUser = {};
      if (user) {
        currUser = {
          id: user[0],
          data: user[1],
        };

        let jiraTasks = currUser.data.jiraTasks;
        let personalGoals = currUser.data.personalgoals;

        if (jiraTasks) {
          currUser.data.jiraTasks = this.convertObjectToArray(jiraTasks);
        }

        if (personalGoals) {
          currUser.data.personalgoals = this.convertObjectToArray(
            personalGoals
          );
        }
      } else {
        // new user route
        currUser = currentUser;
        this.createNewUser(currentUser);
      }

      this.setState({
        user: currUser,
        usersList: snap.val(),
      });
    });
  };

  authChange = () => {
    this.auth.onAuthStateChanged((cred) => {
      if (this.mounted) {
        if (cred) {
          this.retrieveUsersFromDatabase(cred.email);
        } else {
          this.props.history.push("/login");
        }
      }
    });
  };

  componentDidMount() {
    this.mounted = true;
    this.authChange();
    axios.get(`${API_URL}/jira/issues`).then((response) => {
      // console.log(response.data);
      this.setState({ jiraList: response.data });
    });
  }
  componentDidUpdate() {
    const { authChange } = this;

    if (!this.state.user && this.mounted) {
      authChange();
    }

    if (!this.state.user.id) {
      this.retrieveUsersFromDatabase(this.state.user);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state.user.id) {
      const { jiraTasks, personalgoals } = this.state.user.data;

      return (
        <>
          <SideNav />
          <HeaderNav openModal={this.openModal} />
          <CreateModal
            isOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            currentUser={this.state.user}
          />
          <Body
            jiraTasks={jiraTasks ? jiraTasks : []}
            jiraList={this.state.jiraList}
            personalGoals={personalgoals ? personalgoals : []}
            populateJiraTasks={this.populateJiraTasks}
            currUser={this.state.user.id}
          />
        </>
      );
    } else {
      return <>Loading</>;
    }
  }
}

export default MainPage;
