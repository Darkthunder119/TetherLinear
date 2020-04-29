import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "./JiraCard.scss";
import "firebase/firebase-database";
import firebase from "firebase/app";

const JiraCard = (props) => {
  let result;
  let textColor;

  const priorityFn = (item) => {
    if (item === "Highest") {
      result = "Highest";
      textColor = "dark-red";
    }
    if (item === "High") {
      result = "High";
      textColor = "red";
    }
    if (item === "Medium") {
      result = "Medium";
      textColor = "orange";
    }
    if (item === "Low") {
      result = "Low";
      textColor = "dark-green";
    }
    if (item === "Lowest") {
      result = "Lowest";
      textColor = "green";
    }
  };
  let arrow;

  console.log(props);

  const arrowFn = (item) => {
    if (item === "Highest") {
      arrow = <FontAwesomeIcon icon={faArrowUp} />;
    }

    if (item === "High") {
      arrow = <FontAwesomeIcon icon={faArrowUp} />;
    }
    if (item === "Medium") {
      arrow = <FontAwesomeIcon icon={faArrowUp} />;
    }
    if (item === "Low") {
      arrow = <FontAwesomeIcon icon={faArrowDown} />;
    }
    if (item === "Lowest") {
      arrow = <FontAwesomeIcon icon={faArrowDown} />;
    }
  };
  priorityFn(props.priority);
  arrowFn(props.priority);

  const setToFocus = () => {
    console.log(props.currUser);
    let objTask = {
      ticketNumber: props.id,
      name: props.name,
      assignee: props.assignee,
      priority: props.priority,
      timestamp: Date.now()
    };
    firebase
      .database()
      .ref("users/" + props.currUser)
      .child("currentTask")
      .update(objTask);
  };
  return (
    <div
      className="jira__card"
      onClick={() => {
        // console.log("trigger", props.id);
        setToFocus();
      }}
    >
      <div className="jira__top">
        <div className="jira__priority">
          <span className={`jira__priority-arrow ${textColor}`}>{arrow}</span>{" "}
          <span className={`jira__priority-text ${textColor}`}>
            {props.priority}
          </span>
        </div>
        <div className="jira__kebab">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      <div className="jira__bottom">
        <h2 className="jira__name">{props.name}</h2>

        <h3 className="jira__assignee">{props.assignee}</h3>

        <h4 className="jira__id">#{props.id}</h4>
      </div>
    </div>
  );
};
export default JiraCard;
