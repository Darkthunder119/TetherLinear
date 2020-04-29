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

        //handleClick(checked) {
        //}

    render() {
        const { ticket, title, description } = this.props;

    return (
    <>
        {this.props.description 

        ?   <div className="task">
                <div className="task__section">
                    <span className="task__ticket">{ticket}</span>
                        <button className="task__options">...</button>
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
        
        :   <div className="task">
                <button className="task__add-button">+</button>
                <h4 className="task__title">Add Next Task</h4>
            </div>
        }
    </>
    )}
}