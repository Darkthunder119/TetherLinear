import React, {Component} from 'react'
import './TaskCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Switch from "react-switch";
import Modal from "react-modal";
import axios from 'axios'
import firebase from "firebase/app";
import 'firebase/firebase-database';

const modalStyles = {
    content: {
      position: "absolute",
      padding: "16px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)"
    }
  };

export default class TaskCard extends Component {
    constructor() {
        super();
        this.state = { 
            checked: false,
            isModalOpen: false,
            goalsSwitch: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalChange = this.handleModalChange.bind(this);
    }
     
    handleChange(checked) {
    this.setState({ checked });
    }
    
    handleSubmit(e) {
    const { ticketNumber, assignee } = this.props.currTask;
    axios.get(`https://bstn-jira-integration.herokuapp.com/slack/notify?message=${assignee}%20Finished%20working%20on%20${ticketNumber}`)
    .then(res=>console.log('done!'))
    .catch(err=>console.log(err));

    axios.get(`https://bstn-jira-integration.herokuapp.com/slack/user?message=Looking%20for%20things%20to%20do`)
    .then(res=>console.log('done!'))
    .catch(err=>console.log(err));

    axios.post(`https://team15hackathon.atlassian.net/rest/api/3/issue/${ticketNumber}/transitions` , {headers: {'Authorization': 'Basic Z3VydGFqY2hoYWJyYUBnbWFpbC5jb206WGFqVlN2Tnc5RHJvWm52dWxlN0EzNDQw'}}, {  "transitions": {
        "id": "41"
      }
    })

    this.setState(state => ({
      isModalOpen: !state.isModalOpen
    }));

    firebase.database()
      .ref("users/"+this.props.currUser)
      .child("currentTask")
      .remove()
    }

    
    handleModalChange() {
    this.setState(state => ({
        isModalOpen: !state.isModalOpen
        }));  
    }

  handleSwitch(checked) {
    this.setState({ goalsSwitch: checked });
  }

  renderJiraCard = () => {

    const { currTask } = this.props;

    return (
      <div className="task">
        <div className="task__section">
          <h4 className="task__ticket">{currTask.ticketNumber}</h4>
          <span className="task__options">...</span>
        </div>

        <div className="task__section">
          <h4 className="task__description">{currTask.assignee}</h4>
          <h2 className="task__description">{currTask.name}</h2>
        </div>

      <div className="task__section">
        <div className="task__toggle-container">
          <Switch 
            onChange={this.handleChange} 
            uncheckedIcon={false} 
            checked={this.state.checked}
            checkedIcon={false} 
          />
          <span className="task__is-paused">{this.state.checked && "paused"}</span>
        </div>
        <button className="task__button" onClick={this.handleModalChange}>Mark as Complete</button>

        {this.state.isModalOpen &&

        <Modal 
            isOpen={this.state.isModalOpen} 
            style={modalStyles}
            contentLabel="Submit"
        >   <div className="task__modal-content-container">
                <h3 className="task__modal-prompt">Are you sure?</h3>
                <h4 className="task__modal-prompt">This will mark your <strong>{currTask.ticketNumber}</strong> Jira ticket as completed.</h4>
                <div className="task__modal-button-container">
                    <button className="task__button" onClick={this.handleSubmit}>Submit Complete</button>
                    <button className="task__button task__button--cancel" onClick={this.handleModalChange}>Cancel</button>
                </div>
            </div>
        </Modal>

        }
      </div>
    </div>
    )
  }

renderPersonalCardRow = (todo) => {

  return (
    <div className="task__todo" key={todo.id} data-id={todo.id} data-times={todo.value.times}>
      <span className="task__todo-name">{todo.value.goal}</span> 
      <label className="task__checkbox">
        <input type="checkbox" className="task__checkbox-input"/>
        <span className="task__checkmark"></span>
      </label>
    </div>
  );
}
renderPersonalCard = () => {

  const { data } = this.props;

  return (
    <div className="task task__personal">
      <div className="task__section task__section--personal">
        <div className="task__heading">
          <h4 className="task__ticket">Daily Goals</h4>
          <Switch
            onChange={this.handleChange} 
            uncheckedIcon={false} 
            checked={this.state.checked}
            checkedIcon={false} 
            height={20}
            width={38}
            offColor="#1457DB"
            onColor="#1457DB"
            />
          <h4 className="task__ticket">Weekly Progress</h4>
        </div>
        <span className="task__options">...</span>
      </div>

      <div className="task__section">
        <div className="task__personal-todos">
          {data.map(todo=>this.renderPersonalCardRow(todo))}
        </div>
      </div>
    </div>
  )
}
  renderCard = () => {

    const { type, data, currTask, openModal, todo} = this.props;
    console.log(type)

    return (
      <>
        {(data && data.length) || currTask
        ? type === 'jira'
          ? this.renderJiraCard()
          : this.renderPersonalCard()
        
        :   <div className="task--alt" onClick={openModal}>
                <span className="task__add">
                    <FontAwesomeIcon icon={faPlus} />
                </span>
                <h3 className="task__title--placeholder">{ type === "jira" ? "Add Task" : "Add Personal Goal"}</h3>
            </div>
        }
    </>
  )}

  render() {
    return (
      this.renderCard() 
    );
  }
}