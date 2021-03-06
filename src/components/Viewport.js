import React from "react";
import { Router } from "react-router-dom";

import Nav from "./Nav";
import Content from "./Content";
import history from "../history";

class Viewport extends React.Component {
  state = {
    tabs: [
      { to: "/", name: "Welcome", icon: "", closable: false },
      {
        to: "/portfolio",
        name: "Project Portfolio",
        icon: "fas fa-folder-open",
        closable: false
      },
      {
        to: "/resume",
        name: "Resume",
        icon: "fas fa-file-alt",
        closable: false
      }
    ]
  };

  contentRef = React.createRef();

  onClickCase = newTab => {
    //if tab doesn't exist already, push the new tab into tabs array
    if (!this.state.tabs.find(tab => tab.to === newTab.to)) {
      this.setState({ tabs: [...this.state.tabs, newTab] });
    }
  };

  onClickClose = tabToClose => {
    const updatedTabs = this.state.tabs.filter(tab => tab.to !== tabToClose.to);
    this.setState({ tabs: updatedTabs }, () => {
      //if user is currently at the tab to be removed
      if (history.location.pathname === tabToClose.to) {
        //go to next tab on left hand side
        history.push(this.state.tabs[this.state.tabs.length - 1].to);
      }
    });
  };

  render() {
    return (
      <Router history={history}>
        <div className="viewport">
          <Nav tabs={this.state.tabs} onClickClose={this.onClickClose} />
          <Content onClickCase={this.onClickCase} />
        </div>
      </Router>
    );
  }
}

export default Viewport;
