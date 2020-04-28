import React, { Component } from "react";
import "./CreateModal.scss";
import Modal from "react-modal";

// Modal.setAppElement("#root");

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

const CreateModal = ({ isOpen, closeModal }) => {

  // handleSubmit function

  return (
    <>
    {isOpen && (
      <Modal isOpen={isOpen} style={modalStyles}>
         <form onSubmit="handleSubmit" className="modal-form">
           <div className="modal-form__top">
              <h2 className="modal-form__heading">Personal Goals</h2>
              <p>Create Your Weekly Personal Goals. </p>
              <div className="modal-form__row">
                <div className="modal-form__field">
                  <label className="modal-form__label"></label>
                  <input
                    className="modal-form__input"
                    name="name"
                    placeholder="Do 15 minutes of Yoga Everyday"
                    />
                </div>
              </div>
            </div>
            
            <div className="modal-form__buttonwrap">
              <button
                className="modal-form__button modal-form__button--blue"
                type="submit"
              >
                SAVE
              </button>
              <button className="modal-form__button" onClick={closeModal}>
                CANCEL
              </button>
            </div>
          </form>
      </Modal>
    )}
    </>
  )
}

export default CreateModal;