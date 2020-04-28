import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import Body from "../../components/Body/Body";
import "./MainPage.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="main">
          <SideNav />
          <Body />
        </div>
      </>
    );
  }
}

export default MainPage;
