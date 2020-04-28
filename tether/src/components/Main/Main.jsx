import react, { Component } from "react";
import "./Main.scss";

export default class Main extends Component {
  render() {
    return (
      <>
        <main className="main">
          <section className="main__tasks">ACTIVE TASKS SECTION</section>
          <section className="main__backlog">BACKLOG SECTION</section>
        </main>
      </>
    );
  }
}
