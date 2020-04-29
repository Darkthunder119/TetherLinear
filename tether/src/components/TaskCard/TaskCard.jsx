import React, {Component} from 'react'
import './TaskCard.scss'
import Switch from "react-switch";
import Modal from "react-modal";

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
            isModalOpen: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalChange = this.handleModalChange.bind(this);
    }
     
        handleChange(checked) {
        this.setState({ checked });
        }
        
        handleSubmit(e) {
        this.setState(state => ({
            isModalOpen: !state.isModalOpen
            }));
        }

        handleModalChange() {
        this.setState(state => ({
            isModalOpen: !state.isModalOpen
            }));  
        }

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
                    <button className="task__button" onClick={this.handleModalChange}>Mark as Complete</button>
                </div>

                {this.state.isModalOpen &&

                    <Modal 
                        isOpen={this.state.isModalOpen} 
                        style={modalStyles}
                        contentLabel="Submit"
                    >
                        <h4 className="task__modal-prompt">Are you sure?</h4>
                        <div className="task__modal-button-container">
                            <button className="task__modal-button task__modal-button--blue" onClick={this.handleSubmit}>Submit</button>
                            <button className="task__modal-button" onClick={this.handleModalChange}>Cancel</button>
                        </div>
                    </Modal>

                }

            </div>
        
        :   <div className="task">
                <button className="task__add-button">+</button>
                <h4 className="task__title">Add Next Task</h4>
            </div>
        }
    </>
    )}
}