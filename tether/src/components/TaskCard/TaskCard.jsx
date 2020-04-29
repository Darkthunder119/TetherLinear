import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "./TaskCard.scss";

const TaskCard = (props) => {
  //const { number, name, priority } = props;
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
  console.log(props);

  return (
    <div className="task__card">
      <div className="task__top">
        <div className="task__priority">
          <span className={`task__task__priority-arrow ${textColor}`}>
            {arrow}
          </span>{" "}
          <span className={`task__priority-text ${textColor}`}>
            {props.priority}
          </span>
        </div>
        <div className="task__kebab">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      <div className="task__bottom">
        <h2 className="task__name">{props.name}</h2>

        <h3 className="task__assignee">{props.assignee}</h3>

        <h4 className="task__id">#{props.id}</h4>
      </div>
    </div>
  );
};
export default TaskCard;

/*
  return (

    <>
     
  <div className="task__card">
        <div className="task__top">
          <div className="task__priority">
            <span className={`task__task__priority-arrow ${textColor}`}>
              {arrow}
            </span>{" "}
            <span className={`task__priority-text ${textColor}`}>{result}</span>
          </div>

          <div className="task__kebab">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
        <div className="task__bottom">
          <h2 className="task__name">{name}</h2>
          <h4 className="task__id">#{number}</h4>
        </div>
      </div>
      */
