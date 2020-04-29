import React, {Component} from 'react'
import './TaskCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Switch from "react-switch";

export default class TaskCard extends Component {
  constructor() {
    super();
    this.state = { 
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
     
  handleChange(checked) {
  this.setState({ checked });
  }

  renderJiraCard = () => {
    const { ticket, title, description } = this.props;
    return (
      <div className="task">
        <div className="task__section">
          <h4 className="task__ticket">{ticket}</h4>
          <span className="task__options">...</span>
        </div>

        <div className="task__section">
          <h2 className="task__title">{title}</h2>
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
        <button className="task__button" onClick={this.onClick}>Mark as Complete</button>
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
    const { type, data, openModal } = this.props;
    return (
      <>
        {data.length
        ? type === 'jira'
          ? this.renderJiraCard()
          : this.renderPersonalCard()
        
        :   <div className="task--alt" onClick={openModal}>
                <span className="task__add">
                    <FontAwesomeIcon icon={faPlus} />
                </span>
                <h3 className="task__title--placeholder">Add Personal Goal</h3>
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