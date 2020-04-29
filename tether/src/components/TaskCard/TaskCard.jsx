import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "./TaskCard.scss";

const TaskCard = (props) => {
  const { number, name, priority } = props;
  let result;
  let textColor;
  const priorityFn = (item) => {
    if (item.toLowerCase() === "highest") {
      result = "Highest";
      textColor = "dark-red";
    }
    if (item.toLowerCase() === "high") {
      result = "High";
      textColor = "red";
    }
    if (item.toLowerCase() === "medium") {
      result = "Medium";
      textColor = "orange";
    }
    if (item.toLowerCase() === "low") {
      result = "Low";
      textColor = "dark-green";
    }
    if (item.toLowerCase() === "lowest") {
      result = "Lowest";
      textColor = "green";
    }
  };
  let arrow;
  const arrowFn = (item) => {
    if (item.toLowerCase() === "highest") {
      arrow = <FontAwesomeIcon icon={faArrowUp} />;
    }

    if (item.toLowerCase() === "high") {
      arrow = <FontAwesomeIcon icon={faArrowUp} />;
    }
    if (item.toLowerCase() === "medium") {
      arrow = <FontAwesomeIcon icon={faArrowUp} />;
    }
    if (item.toLowerCase() === "low") {
      arrow = <FontAwesomeIcon icon={faArrowDown} />;
    }
    if (item.toLowerCase() === "lowest") {
      arrow = <FontAwesomeIcon icon={faArrowDown} />;
    }
  };
  priorityFn(priority);
  arrowFn(priority);

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
    </>
  );
};
export default TaskCard;
