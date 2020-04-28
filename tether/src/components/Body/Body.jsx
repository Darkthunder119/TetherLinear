import React, { Component } from "react";
import "./Body.scss";
import TaskCard from "../TaskCard/TaskCard";

export default class Body extends Component {
  render() {
    return (
      <>
        <main className="body">
          <div className="body__taskcards">
            <TaskCard 
            ticket="#WF-102" 
            title="UI For Components" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium, dolorum sed velit cum rem aperiam deserunt ad id laborum neque nostrum iste sequi accusantium sapiente quibusdam eum eos incidunt."
            />
            <TaskCard />
          </div>
          <section className="body__tasks">ACTIVE TASKS SECTION</section>
          <section className="body__backlog">BACKLOG SECTION</section>
        </main>
      </>
    );
  }
}
