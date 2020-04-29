import React, { Component } from "react";
import "./Body.scss";
import TasksList from "../TasksList/TasksList";

export default class Body extends Component {
  render() {
    console.log(this.props.jiraTasks);
    return (
      <>
        <main className="body">
          <section></section>
          <section className="body__tasks">
            <TasksList jiraTasks={this.props.jiraTasks} />{" "}
          </section>
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
