import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home Page</Link>
        <Link to="/form"> Form Page</Link>
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  message: PropTypes.string,
};
