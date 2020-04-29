import React, {Component} from 'react'
import './TaskCard.scss'
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