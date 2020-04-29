import React, { Component } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TasksList.scss";

export default class TasksList extends Component {
  // jiraTasks = this.props.jiraTasks;
  /*
 tasks = this.props.jiraList.map((arr, index) => {
    arr.map((item) => {
      const taskInfo = {
        id: index,
        name: arr[3],
        priority: arr[4],
        number: arr[0],
        assignee: arr[5],
      };
      return taskInfo;
    });
    return arr;
  });
 */

  render() {
    console.log(this.props.jiraList);

    return (
      <>
        <h1>My Tasks ({this.props.jiraList})</h1>
        <div className="tasks__container">
          <TaskCard tasks={this.props.jiraList} />
        </div>
      </>
    );

    //   this.props.jiraTasks.map((obj) => <TaskCard {...obj} key={obj.id} />);
    //if (this.props.jiraTasks)
  }
}
