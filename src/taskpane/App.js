import * as React from "react";
import PropTypes from "prop-types";
import MyNav from "./components/MyNav";
import Progress from "./components/Progress";
import { Switch, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import FtmFormPage from "./pages/FtmFormPage";
import DynamicFormPage from "./pages/DynamicFormPage";

/* global require */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    // here we organise the app layout
    return (
      <div className="ms-welcome">
        <MyNav />
        <div>
          <Switch>
            <Route exact path="/home">
              <DynamicFormPage />
            </Route>
            <Route exact path="/form">
              <FormPage></FormPage>
            </Route>
{/*             <Route exact path="/ftm">
              <FtmFormPage></FtmFormPage>
            </Route> */}
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
