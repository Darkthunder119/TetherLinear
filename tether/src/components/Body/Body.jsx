import React, { Component } from "react";
import "./Body.scss";
import TasksList from "../TasksList/TasksList";

export default class Body extends Component {
  render() {
    console.log(this.props.jiraList);
    let tasks = <TasksList jiraList={this.props.jiraList} />;
    /*
   
    if (this.props.jiraTasks !== undefined) {
      tasks = <TasksList jiraTasks={this.props.jiraTasks} />;
    } else {
      tasks = <div>NO DATA, click BUTTON</div>;
    }
    */
    return (
      <>
        <main className="body">
          <section></section>
          <section className="body__tasks">{tasks}</section>
          {/*
 <button
            className="temporaryButton"
            onClick={this.props.populateJiraTasks}
          >
            CLICK ME TO POPULATE DATABASE AND REFRESH
          </button>
          */}
        </main>
      </>
    );
  }
}
