import React, { Component } from "react";
import "./Body.scss";
import TasksList from "../TasksList/TasksList";

export default class Body extends Component {
  render() {
    console.log(this.props.jiraTasks);
    return (
      <>
        <main className="body">
          <section className="body__tasks">ACTIVE TASKS SECTION</section>
          <section className="body__backlog">BACKLOG SECTION</section>
          <button
            className="temporaryButton"
            onClick={this.props.populateJiraTasks}
          >
            CLICK ME TO POPULATE DATABASE AND REFRESH
          </button>
        </main>
      </>
    );
  }
}
