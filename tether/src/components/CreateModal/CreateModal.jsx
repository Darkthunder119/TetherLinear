import React, { Component } from "react";
import "./CreateModal.scss";
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
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  }
};

class CreateModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      goals:[""]
    };
  }

  addGoal(e){
    e.preventDefault();
    this.setState({goals: [...this.state.goals, " "]})
  }

  handleChange(e, index){
    e.preventDefault();
    this.state.goals[index] = e.target.value
    // set the changed state
    this.setState({goals: this.state.goals})
  }

  handleRemove(e,index){
    e.preventDefault();
    // remove an item at the index
    this.state.goals.splice(index,1)

    // update the state
    this.setState({goals: this.state.goals})
  }

// NEED A HANDLE SUBMIT here

  render() {
  return (
    <>
    {this.props.isOpen && (
      <Modal isOpen={this.props.isOpen} style={modalStyles}>
         <form onSubmit="handleSubmit" className="modal-form">
           <div className="modal-form__top">
              <h2 className="modal-form__heading">Personal Goals</h2>
              <p>Create Your Weekly Personal Goals. </p>
              <div className="modal-form__subheading-wrap">
                <h3 className="modal-form__subheading">Goal</h3>
                <h3 className="modal-form__subheading modal-form__subheading--second"># Times/Week</h3>
              </div>

                  {
                    this.state.goals.map((goal, index) => {
                      return(
                        <div className="modal-form__row">
                          <div className="modal-form__field">
                            <label className="modal-form__label"></label>
                            <input
                            onChange={(e) => this.handleChange(e)}
                            className="modal-form__input"
                            name="name"
                            key={index}
                
                            placeholder="Ex.: Do 15 minutes of Yoga Everyday"
                            />
                          </div>
                          <div className="modal-form__field">
                            <label className="modal-form__label"></label>
                            <select className="modal-form__input modal-form__input--small" name="times">
                              <option value="5">5</option>
                              <option value="4">4</option>
                              <option value="3">3</option>
                              <option value="2">2</option>
                              <option value="1">1</option>
                            </select>
                          </div>
                          <button className="modal-form__remove-btn" onClick={(e) => this.handleRemove(e)}>remove</button>
                        </div>
                        )
                    })
                  }
  
                <button className="modal-form__add-btn" onClick={(e)=>this.addGoal(e)}>+</button>
            </div>
            
            <div className="modal-form__buttonwrap">
              <button
                className="modal-form__button modal-form__button--blue"
                type="submit"
              >
                SAVE
              </button>
              <button className="modal-form__button" onClick={this.props.closeModal}>
                CANCEL
              </button>
            </div>
          </form>
      </Modal>
    )}
    </>
  )
    }
}

export default CreateModal;