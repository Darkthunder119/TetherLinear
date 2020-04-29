import React, { Component } from "react";
import "./Body.scss";
import TasksList from "../TasksList/TasksList";

export default class Body extends Component {
  render() {
    console.log(this.props.jiraTasks);
    if (this.props.jiraTasks.length > 0) {
      return (
        <>
          <main className="body">
            <section></section>
            <section className="body__tasks">
              <TasksList jiraTasks={this.jiraTasks} />{" "}
            </section>
          </main>
        </>
      );
    }
  }
}
