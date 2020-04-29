import React, { Component } from "react";
import "./Body.scss";
import TaskCard from "../TaskCard/TaskCard";

export default class Body extends Component {
  render() {
    console.log(this.props.jiraTasks)
    return (
      <>
        <main className="body">
        <h1 className="body__header">Focus</h1>
          <section className="body__taskcards">
            <TaskCard 
            ticket="#WF-102" 
            title="UI For Components" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium, dolorum sed velit cum rem aperiam deserunt ad id laborum neque nostrum iste sequi accusantium sapiente quibusdam eum eos incidunt."
            />
            <TaskCard />
            </section>
            <h1 className="body__header">My Tasks</h1>
          <section className="body__tasks">
              
          </section>
          <section className="body__backlog">

          </section>
          <button className="temporaryButton" onClick={this.props.populateJiraTasks}>CLICK ME TO POPULATE DATABASE AND REFRESH</button>
        </main>
      </>
    );
  }
}
