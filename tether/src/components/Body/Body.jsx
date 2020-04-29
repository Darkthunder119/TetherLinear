import React, { Component } from "react";
import "./Body.scss";
import TasksList from "../TasksList/TasksList";

export default class Body extends Component {
  render() {
    return (
      <>
        <main className="body">
          <section></section>
          <section className="body__tasks">
            <TasksList />{" "}
          </section>
        </main>
      </>
    );
  }
}
