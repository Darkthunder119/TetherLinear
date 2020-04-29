import React, { Component } from "react";
import JiraCard from "../JiraCard/JiraCard";
import "./JiraList.scss";

export default class JiraList extends Component {
  render() {
    console.log("JIRALIST FROM JRIA LIST", this.props.jiraList);
    console.log("THIS IS THE CURR TASK", this.props.currTask);
    return (
      <>
        {this.props.currTask != undefined && (
          <>
            <h1>
              Tasks (
              {
                this.props.jiraList.filter(
                  (val) =>
                    val[2] != "Done" &&
                    val[0] !== this.props.currTask.ticketNumber
                ).length
              }{" "}
              )
            </h1>
            <div className="jira__container">
              {this.props.jiraList
                .filter(
                  (val) =>
                    val[2] != "Done" &&
                    val[0] !== this.props.currTask.ticketNumber
                )
                .map((item) => {
                  return (
                    <JiraCard
                      id={item[0]}
                      name={item[3]}
                      assignee={item[5]}
                      priority={item[4]}
                      currUser={this.props.currUser}
                    />
                  );
                })}
            </div>
          </>
        )}
      </>
    );
  }
}
