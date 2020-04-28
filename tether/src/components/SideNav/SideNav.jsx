import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faChartBar, faStar, faQuestionCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './SideNav.scss';

export default function SideNav() {
  return(
    <nav className="sidenav">
      <div className="sidenav__logo">tether</div>
      <div className="sidenav__links">
        <ul className="sidenav__link-container">
          <li>
            <span className="sidenav__icon">
              <FontAwesomeIcon icon={faTh} />
            </span>
            <span className="sidenav__text">
              Dashboard
            </span>
          </li>
          <li>
            <span className="sidenav__icon">
              <FontAwesomeIcon icon={faChartBar} />
            </span>
            <span className="sidenav__text">
              Productivity
            </span>
          </li>
          <li>
            <span className="sidenav__icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="sidenav__text">
              Tasks
            </span>
          </li>
          <li>
            <span className="sidenav__icon">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </span>
            <span className="sidenav__text">
              Help
            </span>
          </li>
          <li>
            <span className="sidenav__icon">
              <FontAwesomeIcon icon={faCog} />
            </span>
            <span className="sidenav__text">
              Settings
            </span>
          </li>
          <li>
            <span className="sidenav__icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
            <span className="sidenav__text">
              Signout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}