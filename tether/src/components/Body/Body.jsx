import React, { Component } from "react";
import "./Body.scss";
import TaskCard from "../TaskCard/TaskCard";

export default class Body extends Component {
  render() {
    return (
      <>
        <main className="body">
          <TaskCard />
          <section className="body__tasks">ACTIVE TASKS SECTION</section>
          <section className="body__backlog">BACKLOG SECTION</section>
        </main>
      </>
    );
  }
}
