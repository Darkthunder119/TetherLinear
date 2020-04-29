import React, { Component } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TasksList.scss";

export default class TasksList extends Component {
  tasks = [
    {
      id: "WP-8",
      name: "My Tasks List Component and Card Component - UI Code",
      priority: "High",
    },
    {
      id: "WP-9",
      name: "UI for components - Design",
      priority: "Highest",
    },
    {
      id: "WP-10",
      name: "Add Personal Goals Component in Active Component",
      priority: "Medium",
    },
    {
      id: "WP-11",
      name: "SideNav - UI Code",
      priority: "Low",
    },
    {
      id: "WP-12",
      name: "HeaderNav - UI Code",
      priority: "Lowest",
    },
    {
      id: "WP-15",
      name: "My Tasks List Component and Card Component - UI Code",
      priority: "High",
    },
    {
      id: "WP-16",
      name: "UI for components - Design",
      priority: "Highest",
    },
    {
      id: "WP-17",
      name: "Add Personal Goals Component in Active Component",
      priority: "Medium",
    },
    {
      id: "WP-18",
      name: "SideNav - UI Code",
      priority: "Low",
    },
    {
      id: "WP-12",
      name: "HeaderNav - UI Code",
      priority: "Lowest",
    },
  ];
  render() {
    return (
      <>
        <h1>My Tasks ({this.tasks.length})</h1>
        <div className="tasks__container">
          {this.tasks.map((obj) => (
            <TaskCard {...obj} key={obj.id} />
          ))}
        </div>
      </>
    );
  }
}
