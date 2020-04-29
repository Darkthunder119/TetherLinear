import React, { Component } from "react";
import "./Body.scss";
import TaskCard from "../TaskCard/TaskCard";
import JiraList from "../JiraList/JiraList";

export default class Body extends Component {
  render() {
    const { personalGoals, jiraTasks, currUser, currTask, jiraList } = this.props;
    console.log(jiraTasks);
    console.log(personalGoals);
    return (
      <>
        <main className="body">
          <h1 className="body__header">Focus</h1>
          <section className="body__taskcards">
            <TaskCard 
            
              type="jira"
              currUser={currUser}
              currTask={currTask}
              ticket="#WF-102" 
              title="UI For Components" 
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium, dolorum sed velit cum rem aperiam deserunt ad id laborum neque nostrum iste sequi accusantium sapiente quibusdam eum eos incidunt."
            />
            <TaskCard type="personal" data={personalGoals} />
          </section>
          <section className="body__tasks">
            <JiraList jiraList={jiraList} currUser={currUser} />
          </section>
        </main>
      </>
    );
  }
}
