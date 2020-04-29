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

        //handleClick(checked) {
        //}

    render() {
        const { ticket, title, description } = this.props;

    return (
    <>
        {this.props.description 

        ?   <div className="task">
                <div className="task__section">
                    <h4 className="task__ticket">{ticket}</h4>
                        <button className="task__options">...</button>
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
        
        :   <div className="task--alt">
                <span className="task__add">
                    <FontAwesomeIcon icon={faPlus} />
                </span>
                <h3 className="task__title--placeholder">Add Personal Goal</h3>
            </div>
        }
    </>
    )}
}