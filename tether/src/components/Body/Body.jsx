import React, { Component } from "react";
import "./Body.scss";

export default class Body extends Component {
  render() {
    return (
      <>
        <main className="body">
          <section className="body__tasks">TASKS</section>
          <section className="body__backlog">BACKLOG</section>
        </main>
      </>
    );
  }
}
