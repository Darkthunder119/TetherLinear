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
  debugger;
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.users = firebase.database().ref("users");
    this.timerId = 0;
    this.state = {
      user: "",
      modalIsOpen: false,
      usersList: [],
      jiraList: [],
      jiraQueue: [],
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
    // axios.get(`${API_URL}/jira/issues`).then((response) => {
    //   // console.log(response.data);
    //   this.setState({ jiraList: response.data });
    // });

    axios.get('https://team15hackathon.atlassian.net/rest/api/3/search?jql=project=WP', {headers: {'Authorization': 'Basic Z3VydGFqY2hoYWJyYUBnbWFpbC5jb206WGFqVlN2Tnc5RHJvWm52dWxlN0EzNDQw'}})
    .then(res=> {
      let list = res.data.issues.map(val=>[val.key, val.fields.project.name, val.fields.status.name, val.fields.summary, val.fields.priority.name, val.fields.assignee.displayName] )
      this.setState({jiraList: list })

    })
    .catch(err=>console.log('fuck'));
  }
  componentDidUpdate() {
    const { authChange } = this;

    if (!this.state.user && this.mounted) {
      authChange();
    }

    if (!this.state.user.id) {
      this.retrieveUsersFromDatabase(this.state.user);
    } else {
      if (this.state.user.data && this.state.user.data.currentTask) {
        let time = this.state.user.data.currentTask.timestamp / 1000;
        clearInterval(this.timerId);
        this.timerId = setInterval(() => {
          if (Math.floor((Date.now() / 1000 - time) % 60) === 0) {
            alert(
              "You hardworker! Take a break and check out your personal weekly tasks!"
            );
          }
        }, 1000);
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    clearInterval(this.timerId);
  }

  render() {
    if (this.state.user.id) {
      const { jiraTasks, personalgoals, currentTask } = this.state.user.data;

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
            currTask={currentTask ? currentTask : null}
            openModal={this.openModal}
          />
        </>
      );
    } else {
      return <>Loading</>;
    }
  }
}

export default MainPage;
