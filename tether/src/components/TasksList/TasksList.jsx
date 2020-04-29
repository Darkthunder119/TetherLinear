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
        <h1>Tasks ({this.props.jiraList.length})</h1>
        <div className="tasks__container">
          {this.props.jiraList
            .filter((val) => val[2] != "Done")
            .map((item) => {
              return (
                <TaskCard
                  id={item[0]}
                  name={item[3]}
                  assignee={item[5]}
                  priority={item[4]}
                />
              );
            })}
        </div>
      </>
    );

    //   this.props.jiraTasks.map((obj) => <TaskCard {...obj} key={obj.id} />);
    //if (this.props.jiraTasks)
  }
}
