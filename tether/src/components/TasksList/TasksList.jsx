import React, { Component } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TasksList.scss";

export default class TasksList extends Component {
  // jiraTasks = this.props.jiraTasks;
  /*
  tasks = this.props.jiraTasks.map((obj) => {
    const taskInfo = {
      id: obj.id,
      name: obj.value.name,
      priority: obj.value.priority,
      isCompleted: obj.value.isCompleted,
      isInProgress: obj.value.isInProgress,
      number: obj.value.ticketNumber,
      details: obj.value.details,
    };
    return taskInfo;
  });
  */
  render() {
    console.log(this.props.jiraTasks);
    // if (this.props.jiraTasks !== undefined) {
    // }

    //   console.log(this.props.jiraTasks);
    //   this.props.jiraTasks.map((obj) => <TaskCard {...obj} key={obj.id} />);
    //if (this.props.jiraTasks)
    if (this.props.jiraTasks !== undefined) {
      let tasks =
        this.props.jiraTasks.length > 0
          ? this.props.jiraTasks.map((obj) => {
              const taskInfo = {
                id: obj.id,
                name: obj.value.name,
                priority: obj.value.priority,
                isCompleted: obj.value.isCompleted,
                isInProgress: obj.value.isInProgress,
                number: obj.value.ticketNumber,
                details: obj.value.details,
              };
              return taskInfo;
            })
          : null;
    }
    return <></>;
  }
}

/*
 <h1>My Tasks ({this.tasks.length})</h1>
        <div className="tasks__container">
          {this.tasks.map((obj) => (
            <TaskCard {...obj} key={obj.id} />
          ))}
        </div>
        */
