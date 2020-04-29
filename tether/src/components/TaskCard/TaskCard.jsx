import React, {Component} from 'react'
import './TaskCard.scss'
import Switch from "react-switch";
import Modal from "react-modal";
import axios from 'axios'

const modalStyles = {
    content: {
      position: "absolute",
      padding: "0",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "16px"
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
            isModalOpen: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalChange = this.handleModalChange.bind(this);
    }
     
    handleChange(checked) {
    this.setState({ checked });
    }
    
    handleSubmit(e) {
    axios.get('https://bstn-jira-integration.herokuapp.com/jira/status?id=WP-2')
    .then(res => {
        console.log(res.config);
        //res.config: {
        //    url,
        //    method,
        //    headers: {
        //        Accept,
        //        Authorization,
        //        User-Agent
        //    },
        //    transformRequest,
        //    transformResponse,
        //    timeout,
        //    xsrfCookieName,
        //    xsrfHeaderName,
        //    maxContentLength
        //}
      })
    this.setState(state => ({
    isModalOpen: !state.isModalOpen
    }));
    }

    handleModalChange() {
    this.setState(state => ({
        isModalOpen: !state.isModalOpen
        }));  
    }

  renderJiraCard = () => {
    const { ticket, title, description } = this.props;
    return (
      <div className="task">
        <div className="task__section">
          <span className="task__ticket">{ticket}</span>
          <span className="task__options">...</span>
        </div>

        <div className="task__section">
          <h4 className="task__title">{title}</h4>
          <p className="task__description">{description}</p>
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
        >
            <h4 className="task__modal-prompt">Are you sure you want to mark this Jira ticket as complete?</h4>
            <div className="task__modal-button-container">
                <button className="task__modal-button task__modal-button--blue" onClick={this.handleSubmit}>Submit</button>
                <button className="task__modal-button" onClick={this.handleModalChange}>Cancel</button>
            </div>
        </Modal>

        }
      </div>
    </div>
    )
  }

renderPersonalCardRow = (todo) => {
  console.log(todo);
  return (
    <div className="task__todo" key={todo.id} data-id={todo.id} data-times={todo.value.times}>
      <span className="task__todo-name">{todo.value.goal}</span> 
      <span className="task__checkbox">
        <input type="checkbox"/>
      </span>
    </div>
  );
}
renderPersonalCard = () => {
  const { data } = this.props;

  return (
    <div className="task task__personal">
      <div className="task__section">
        <span className="task__ticket">Weekly Goals</span>
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
    const { type, data } = this.props;
    return (
      <>
        {data.length
        ? type === 'jira'
          ? this.renderJiraCard()
          : this.renderPersonalCard()
        
        : <div className="task">
            <button className="task__add-button">+</button>
            <h4 className="task__title">Add Next Task</h4>
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